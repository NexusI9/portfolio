import { 
    getCategories, 
    getColorOfCategory, 
    changeHashTo, 
    getZhongwenOfCategory
  } from '../../lib/utils';
  import CategoryContainer from './CategoryContainer';
  import { useLocation } from 'react-router-dom';
  import { motion, AnimatePresence } from 'framer-motion';
  import { useEffect, useState, useRef } from 'react';
  import BackgroundHeader from './BackgroundHeader';

const Flow = ({projects, onCategoryChange=()=>0}) => {

    const containerRef = useRef([]);
    const catContainers = getCategories().map( (cat,c) => {
      return <CategoryContainer key={'CategoryContainer_'+c} category={cat} projects={projects} innerRef={el => containerRef.current[c] = el }/> 
    });
    const [category, setCategory] = useState();
    const location = useLocation();
    const [displaySuper, setDisplaySuper] = useState(true);
  
    const categoryChangeEvent = new CustomEvent('categorychange', {
      bubbles: true,
      detail: { category: () => category }
    });
    
    useEffect( () => {
  
      const onClick = () => {
        //if user clicked on "a" from categorymenu then prevent hash change from this userEffect ( give priority to categorymenu hash change )
        userScroll = false;
      }
      const onMouseWheel = (e) => {
        userScroll = true;
      }
  
      let userScroll = false;
  
      const checkViewportDiv = () => {
  
        catContainers.forEach( (cat,c) => {
  
          const container = containerRef.current[c];
          const title = cat.props.category;
          const { top, bottom } = container.getBoundingClientRect();
  
          const scrollTop = window.pageYOffset;
          const windowHeight = window.innerHeight;
  
  
          if( (scrollTop < windowHeight) || ( c === catContainers.length-1 && bottom < window.innerHeight/3 ) ){ 
            window.history.pushState(null, "The Art of Nassim El Khantour ", "/");
            onCategoryChange(" ");
            return setCategory(" "); 
          }
  
          if(
            top < window.innerHeight/4 &&
            bottom > window.innerHeight &&
            category !== title
          ){
  
            //react 
            //window.gtag('event',`view_category_${title}`,{event_category:'scroll', event_label: `View homepage category: ${title}`});
            if(userScroll) changeHashTo(title);
            onCategoryChange(title);
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
      window.dispatchEvent(categoryChangeEvent);
      const mq = window.matchMedia('(min-width:800px)');
      onResize(mq);
      mq.addEventListener('change', onResize);
  
      return () => mq.removeEventListener('change', onResize);;
    
    }, [category]);
  
    return (
      <>
        { displaySuper && <AnimatePresence initial={false} >
          <motion.div
            id="categorySuper"
            key={'bkg'+category}
            initial={{opacity:1}}
            animate={{opacity:1, transition: {duration: 0.3}}}
            exit={{opacity:1, transition: {duration: 0.3}}}
          >
              <BackgroundHeader title={category} zhongwen={getZhongwenOfCategory(category)} color={ getColorOfCategory(category) || '#000000' }/>
          </motion.div>
        </AnimatePresence> }
  
        <div id="projects">
          {catContainers}
        </div>
  
      </>
    );
  }

export default Flow;