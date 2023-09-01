import { 
    getCategories, 
    getZhongwenOfCategory
  } from '../../lib/utils';
  import CategoryContainer from './CategoryContainer';
  import { useRouter } from 'next/router';
  import { motion, AnimatePresence } from 'framer-motion';
  import { useEffect, useState, useRef } from 'react';
  import BackgroundHeader from './BackgroundHeader';
  import { connect } from 'react-redux';

const mapStateToPorps = (state) => ({
  _category: state.flow.category,
  _userClick: state.flow.userClick
});

const mapDispatchToProps = (dispatch) => ({
  _onCategoryChange: (cat) => dispatch({type: 'CHANGE_CATEGORY', category:cat}),
  _setUserClick: (e) => dispatch({type:'SET_USER_CLICK', state:e})
});

const Flow = ({projects, _onCategoryChange=(e)=>0, _setUserClick=(e)=>0, _category, _userClick}) => {

    const containerRef = useRef([]);
    const categories = useRef( getCategories() );
    const [category, setCategory] = useState(_category);
    const router = useRouter();
    const location = router.asPath;
    const [displaySuper, setDisplaySuper] = useState(true);
    const userScroll = useRef(false);

    useEffect( () => {
        
      const checkViewportDiv = ({forceChange=false}) => {

        getCategories().forEach( (cat,c) => {
          if(!containerRef.current.length){ return; }
          const container = containerRef.current[c];
          const title = cat;
          const { top, bottom } = container.getBoundingClientRect();
  
          const scrollTop = window.pageYOffset;
          const windowHeight = window.innerHeight;
          
          if( 
            (scrollTop < windowHeight) || 
            ( c === containerRef.current.length-1 && bottom < window.innerHeight/3 ) 
            ){
            _onCategoryChange(" ");
          }
  
          if(
            top < window.innerHeight/4 &&
            bottom > window.innerHeight &&
            category !== title
          ){


            //window.gtag('event',`view_category_${title}`,{event_category:'scroll', event_label: `View homepage category: ${title}`});
            if(forceChange || userScroll.current){ _onCategoryChange(title); }

          }
  
  
        });
  
      }
      
      //if user clicked on "a" from categorymenu then prevent hash change from this userEffect ( give priority to categorymenu hash change )
      const onClick = ({target}) =>  {
        if( !/(path|svg)/.test(target.nodeName) ){ userScroll.current = false; }
      };
      const onMouseWheel = () => userScroll.current = true;

      const onResize = (e) => setDisplaySuper( e.matches );  
      
      checkViewportDiv({forceChange:true});
      
      window.addEventListener('scroll', checkViewportDiv);
      window.addEventListener('click', onClick);
      window.addEventListener('mousewheel', onMouseWheel);

      const mq = window.matchMedia('(min-width:800px)');
      onResize(mq);
      mq.addEventListener('change', onResize);
  
      return () => { 
        window.removeEventListener('scroll', checkViewportDiv)
        window.removeEventListener('click', onClick);
        window.addEventListener('mousewheel', onMouseWheel);
        mq.removeEventListener('change', onResize);
      };
  
    }, [_userClick]);

    useEffect(() => { setCategory(_category); },[_category]);
    useEffect(() => { setCategory(''); }, [router.pathname]);
  
    return (
      <>
      <AnimatePresence>
        {displaySuper && 
          <motion.div 
            id="categorySuper"
            key={'catsuper'+category}
            >
              <BackgroundHeader title={category} zhongwen={getZhongwenOfCategory(category)}/>
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
