import { useEffect, useState, useRef, Fragment } from 'react';
import { motion } from 'framer-motion';
import { getCategories, changeHashTo } from '../../lib/utils';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

const mapStateToProps = (state) => ({
  _category: state.flow.category,
  _latestHref: state.flow.href
});

const mapDispatchToProps = (dispatch) => ({
  _setLatestHref: (e) => dispatch({type:'SET_LAST_HREF', href:e}),
  _onCategoryChange: (e) => dispatch({type:'CHANGE_CATEGORY', category:e}),
});

const CategoryMenu = ({_category, _latestHref, _setLatestHref, _onCategoryChange}) => {

    const [active, setActive] = useState(_category);
    const lastHref =  useRef(_latestHref);
    const lastInteraction = useRef();
    const router = useRouter();
  
    const goToCategory = (cat, behavior={behavior:'smooth'}) => { 
      //listen to click change, so we store the new category in ref and set it active in Scroll event listener below
      lastInteraction.current = 'click';
      _onCategoryChange(cat);
      document.getElementById(cat)?.scrollIntoView(behavior);
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
  
      return () => window.removeEventListener('scroll', onScroll);
  
    },[]);

    useEffect( () => { 
      let realCategory = lastHref.current ? lastHref.current : _category; //lastHref take over
      _setLatestHref(realCategory);
      setActive(realCategory);
      changeHashTo(realCategory);
    },[_category]);
  
    useEffect( () => { 
      if(lastHref.current){ 
        goToCategory(lastHref.current, {behavior:'instant'}); 
        lastHref.current = undefined;
      } 
    },[lastHref] );
  
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


export default connect(mapStateToProps,mapDispatchToProps)(CategoryMenu);