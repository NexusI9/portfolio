import { useEffect, useState, useRef, Fragment } from 'react';
import { motion } from 'framer-motion';
import { getCategories, changeHashTo, getColorOfCategory } from '../../lib/utils';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  _category: state.flow.category
});

const CategoryMenu = ({_category}) => {
  

    const [active, setActive] = useState();
    const lastInteraction = useRef();
  
    const updateColor = (category) => {
      //switch body attribute for CSS change to take effects
      const color = getColorOfCategory(category);
      //const favicon = document.getElementById('favicon');
      document.querySelector("body").setAttribute('data-theme',color);
      //setFaviconColor(favicon,color);
    }
  
    const goToCategory = (cat) => { //listen to click change, so we store the new category in ref and set it active in Scroll event listener below
      lastInteraction.current = 'click';
      setActive(cat);
      changeHashTo(cat); 
      updateColor(cat);
      document.getElementById(cat)?.scrollIntoView({behavior:'smooth'});
    }
  
    const onCategoryChange = (e) => { //listen to global category change (on scroll)
      const category = (typeof e === 'string') ? e : e.detail.category();
      if(category && lastInteraction.current != 'click'){
        changeHashTo(category); 
        setActive(category);
        updateColor(category);
      }
  
    }
    
    const onCategoryClick = (e) => {
      goToCategory(e);
      window.gtag('event',`click_menu_category_${e}`,{event_category:'click', event_label:`Click on category menu: ${e}`});
    }
  
    useEffect(()=>{
  
      let scrollTimeout;
      const onScroll = () => {
        //only setActive when scroll is done;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() =>  { 
          lastInteraction.current = null;
        }, 100);
      }
  
      
  
      window.addEventListener('scroll', onScroll);
      window.addEventListener('categorychange', onCategoryChange);
  
      return () =>{ 
        window.removeEventListener('categorychange', onCategoryChange); 
        window.removeEventListener('scroll', onScroll);
      }
  
    },[]);

    useEffect( () => { setActive(_category) },[_category])
  
  
  
    return( 
      <motion.div 
          key='category_menu'
          id='category_menu'
          initial={{opacity:0,y:-100}}
          animate={{opacity:1, y:0, transition:{type:'spring', stiffness: 100} }}
          exit={{opacity:0, y:-100, transition:{type:'spring', stiffness: 100} }}
          >
            <ul>
                {getCategories().map( (cat,i) => 
                <Fragment key={`categoryMenu_${cat}`}>
                  <li className={ active === cat ? 'active' : undefined }>
                    <a onClick={ () => onCategoryClick(cat) } >
                      <small className='cacheBold'><b>{cat}</b></small>
                      <small>{cat}</small>
                      </a>
                  </li>
                  {i < getCategories().length-1 && <span className='lineSeparator'></span>}
                </Fragment>
            )}
             </ul>
          </motion.div>
      
        );
  
  }


export default connect(mapStateToProps)(CategoryMenu);