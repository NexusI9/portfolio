import { 
    getCategories, 
    getColorOfCategory, 
    changeHashTo, 
    getZhongwenOfCategory
  } from '../../lib/utils';
  import CategoryContainer from './CategoryContainer';
  import { useRouter } from 'next/router';
  import { motion, AnimatePresence } from 'framer-motion';
  import { useEffect, useState, useRef } from 'react';
  import BackgroundHeader from './BackgroundHeader';
  import { connect } from 'react-redux';

const mapStateToPorps = (state) => ({
  _category: state.flow.category
});

const mapDispatchToProps = (dispatch) => ({
  _onCategoryChange: (cat) => dispatch({type: 'CHANGE_CATEGORY', category:cat})
});

const Flow = ({projects, _onCategoryChange=(e)=>0, _category}) => {

    const containerRef = useRef([]);
    const categories = useRef( getCategories() );
    const [category, setCategory] = useState(_category);
    const router = useRouter();
    const location = router.asPath;
    const [displaySuper, setDisplaySuper] = useState(true);
    const userScroll = useRef(false);

    
    useEffect( () => {
  
      const onClick = () => {
        //if user clicked on "a" from categorymenu then prevent hash change from this userEffect ( give priority to categorymenu hash change )
        userScroll.current = false;
      }
      const onMouseWheel = (e) => {
        userScroll.current = true;
      }
  
  
      const checkViewportDiv = () => {
  
        getCategories().forEach( (cat,c) => {
          if(!containerRef.current.length){ return; }
          const container = containerRef.current[c];
          const title = cat;
          const { top, bottom } = container.getBoundingClientRect();
  
          const scrollTop = window.pageYOffset;
          const windowHeight = window.innerHeight;
  
  
          if( (scrollTop < windowHeight) || ( c === containerRef.current.length-1 && bottom < window.innerHeight/3 ) ){ 
            _onCategoryChange(" ");
            return setCategory(" "); 
          }
  
          if(
            top < window.innerHeight/4 &&
            bottom > window.innerHeight &&
            category !== title
          ){

            //react 
            //window.gtag('event',`view_category_${title}`,{event_category:'scroll', event_label: `View homepage category: ${title}`});
            if(userScroll.current) changeHashTo(title);
            else{
              _onCategoryChange(title);
            }
            return setCategory(title);
          }
  
  
        });
  
      }
  
      setCategory("");
  
      window.addEventListener('scroll', checkViewportDiv);
      window.addEventListener('click', onClick);
      window.addEventListener('mousewheel', onMouseWheel);
  
      return () => { 
        window.removeEventListener('scroll', checkViewportDiv)
        window.removeEventListener('click', onClick);
        window.addEventListener('mousewheel', onMouseWheel);
      };
  
    }, [location.pathname]);
  
    useEffect( () => {
  
      const onResize = (e) => {
        setDisplaySuper( e.matches );
      }
      
  
      //dispatch custom event
      const mq = window.matchMedia('(min-width:800px)');
      onResize(mq);
      mq.addEventListener('change', onResize);
  
      return () => mq.removeEventListener('change', onResize);;
    
    }, [category]);

  
    return (
      <>
      <AnimatePresence>
        {displaySuper && 
          <motion.div 
            id="categorySuper"
            key={'catsuper'+category}
            >
              <BackgroundHeader title={category} zhongwen={getZhongwenOfCategory(category)} color={ getColorOfCategory(category) || '#000000' }/>
          </motion.div>
          }
      </AnimatePresence>

          <div id="projects">
                {
              categories.current.map( (cat,c) =>
                  <CategoryContainer 
                      key={'CategoryContainer_'+c} 
                      category={cat} 
                      projects={projects} 
                      innerRef={el => containerRef.current[c] = el }
                  />)}
          </div>
  
      </>
    );
  }

export default connect(mapStateToPorps, mapDispatchToProps)(Flow);
