
import { 
  cleanCategoryName, 
  getCategories, 
  getColorOfCategory, 
  changeHashTo, 
  getProjectsOfCategory,
  getZhongwenOfCategory
} from '../../lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-responsive-masonry';
import { useEffect, useState, useRef } from 'react';
import { Video } from '../article';


const variant = {
  initial:{opacity:0},
  animate:{opacity:1, transition:{ staggerChildren:0.06 } },
  exit: {opacity:0, transition:{ delay:0.5, staggerChildren:0.06 } }
}


const toProjectVariant = {
  initial:{opacity:0, y:200},
  animate:{opacity:1, y:0, transition:{ duration: 0.3 }},
  exit:{ y:'-200vh', opacity:0, transition:{ duration:0.4}}
}


const toMapTransition = {
  initial:{opacity:1, scale:1},
  animate:{opacity:1, scale:1, transition:{ duration: 0.6 }},
  exit:{ scale:0, opacity:0, transition:{ duration:0.2, type:'tween', ease:"backIn"}}
}


export const BackgroundHeader = ({title="", zhongwen="", color, speed=1, delay=0.02}) => {

  const TEXT_SIZE = 2;
  const containVariant = {
    initial:{},
    animate:{transition:{staggerChildren:delay, duration:speed}},
    exit:{transition:{staggerChildren:delay, duration:speed}}
  };

  const caseVariant = {
    initial:{ opacity:0, y: '0em'},
    animate:{ opacity:1, y: (-1*TEXT_SIZE+'em'), transition:{duration:speed/2,  type:'spring', stiffness: 100, damping:20} },
    exit:{ opacity:0, y: (-2*TEXT_SIZE+'em'), transition:{duration:speed/4, type:'tween'}  }
  };

  const zhongVariant = {
    initial:{ opacity:0, y: '0em'},
    animate:{ opacity:1, y: (-1*TEXT_SIZE+'em'), transition:{duration:speed/2,  type:'spring', stiffness: 100, damping:20} },
    exit:{ opacity:0, y: (-1.5*TEXT_SIZE+'em'), transition:{duration:speed/4, type:'tween'}  }
  };
  

  const Case = ({letter='', color}) => (
    <motion.section
    className='case'
    variants={caseVariant}
    >
      <h2></h2>
      <h2 data-color={color}>{letter}</h2>
      <h2></h2>
    </motion.section>
  );

  return (
    <>
       <motion.div 
       id='zhongwenName'
       key={"zhongwenName"+title}
       variants={zhongVariant}
       initial='initial'
       animate='animate'
       exit='exit'
       >
        {[...zhongwen].map( (letter,i) => <h2 key={`zhongwen${i}`}>{letter}</h2> )}
      </motion.div>
      <motion.div
        key={"mainTitle"+title}
        variants={containVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        className="mainTitle"
      >
        {
        title &&
        [...title].map( (letter,i) =>
          <Case  key={'letterback_'+title+letter+i}
                letter={ letter && letter.replace(" ", "\xa0") || " " }
                color={color}
            />
        )}
    </motion.div>
  </>
);
}


export const ProjectThumbnails = ({project, variant=toProjectVariant, animated=true, innerDesc=true}) => {

  const SlideOverlay = ({pictures}) => {

    const [index,setIndex] = useState(0);

    useEffect(() => {

        const changeIndex = () => {
            let currentIndex = index;
            if( index === pictures.length-1 ){ return setIndex(0); }
            currentIndex++;
            setIndex(currentIndex);
        };

        const interval = setInterval( changeIndex, 700 );

        return () => clearInterval(interval);

    },[pictures,index]);

    return (
      <AnimatePresence initial={ !(index === 0) }>
        <motion.img
          className='thumb'
          key={pictures[index]}
          src={pictures[index]}
          initial={{opacity:0}}
          animate={{opacity:1,transition:{duration:0.25}}}
          exit={{opacity:1,transition:{duration:0.25}}}
        />
      </AnimatePresence>
    );
  }
  const { thumbnail } = project;
  const navigate = useNavigate();

  const parallaxConfig = {
    zoom: 1.12,
    scale:45,
    minmax:17
  }

  const [ yPos, setYPos ] = useState(0);
  const [overlay, setOverlay] = useState();
  const elt = useRef();

  //video resize
  const thumbnailImg = useRef();
  const videoCtnr = useRef();

  const overlayContent = () => {

        if(!project.overlay){ return; }

        switch(project.overlay.type){
          case 'picture':
            return <img className='thumb' src={project.overlay?.url} />

          case 'video':
            return <Video innerRef={videoCtnr} id={project.overlay?.url} autoplay={true} defaultQuality='540p' placeholder={thumbnail} controls={false} loadIco={false} playIco={false}/>

          case 'slideshow':
            return <SlideOverlay pictures={project.overlay?.url} />

          default:
        }
  }

  useEffect(() => {

    let lastScroll = -200;
    let lastVelo = 0

    function scrollVelocity(max = 20){

        let velocity = lastScroll - window.pageYOffset;
        if( velocity > max){ velocity = max; }
        if( velocity < -1*max){ velocity = -1*max; }
        if( velocity == -1 || velocity == 1){ velocity=0;}
        if(velocity != lastVelo){ return velocity; }

        lastVelo = velocity;
        return 0;
    }

    function scaleVideo(){

      /*Video size === thumbnail natural size*/

      const thumbHeight = thumbnailImg.current.naturalHeight;
      const thumbWidth = thumbnailImg.current.naturalWidth;
      const thumbRatio = thumbWidth/thumbHeight;

      const ctnrHeight = elt.current.getBoundingClientRect().height;
      const ctnrWidth = elt.current.getBoundingClientRect().width;
      const ctnrRatio = ctnrWidth/ctnrHeight;

      const iframe = videoCtnr.current.querySelectorAll('iframe')[0];

      let newHeight, newWidth;

      if( ctnrRatio > 1 ){ //horizontal
          if(thumbRatio > 1){ //horizontal video
            newHeight = '100%';
            newWidth = `calc(${newHeight}*16/9)`;
          }
          else{ //vertical video
            newHeight = ctnrWidth * thumbHeight / thumbWidth + 'px';
          }
      }else{ //vertical

        if(thumbRatio > 1){ //horizontal video
          newHeight = ctnrHeight + 'px';
          newWidth = `calc(${newHeight}*16/9)`;
        }
        else{ //vertical video
          newHeight = ctnrWidth * thumbHeight / thumbWidth + 'px';
        }
      }
      iframe.style.height = newHeight;
      iframe.style.width = newWidth;

    }

    //let tm;
    const onScroll = () => {
      const { top, height, bottom }  = elt.current?.getBoundingClientRect();
      if( bottom > 0 && top < window.innerHeight  ){ 
        const decal = (top-height/2)/window.innerHeight * parallaxConfig.scale;
        //if(decal > parallaxConfig.minmax ){ decal = parallaxConfig.minmax; }
        //else if(decal < -1 * parallaxConfig.minmax ){ decal = -1 * parallaxConfig.minmax; }
        setYPos( -1 * decal ); 
      }
      lastScroll = window.pageYOffset;
    }

    if(animated && window.matchMedia('(hover:hover)').matches ){ window.addEventListener('scroll', onScroll); }

    if(videoCtnr.current){
      scaleVideo();
      window.addEventListener('resize', scaleVideo);
    }

    return () => {
      if(animated){ window.removeEventListener('scroll', onScroll) }
      if(videoCtnr){ window.removeEventListener('resize', scaleVideo); }
    };
  },[elt, overlay]);

  return(
        <motion.section
          className={'projects round'}
          ref={elt}
          onMouseEnter = { () => setOverlay( overlayContent ) }
          onMouseLeave = { () => setOverlay() }
          onClick={ () => navigate('/project/'+project.title) }
          key={'thumbnail'+project.title}
          variants={variant}
          >

          <section className='move overlay'>
              {<img className='thumb' src={thumbnail} />}
              {overlay && overlay}
          </section>

          { innerDesc &&
            <div className='project_desc'>
              <h2 className={project.font ? project.font : ''}>{project.title}</h2>
              { project.desc && <p><small><b>{project.desc}</b></small></p> }
          </div>
        }
         <img className='move thumb' src={thumbnail}  ref={thumbnailImg} style={{ transform: `scale3d(${parallaxConfig.zoom},${parallaxConfig.zoom},${parallaxConfig.zoom}) translate3d(0,${ yPos }px,0)` }} />
        </motion.section>
  );
}

const CategoryContainer = ({projects ,category, innerRef}) => {

  const [columnsCount, setColumnsCount] = useState(2);
  const [display, setDisplay] = useState(false);
  const container = useRef(); 

  useEffect(()=>{

      const onScroll = () => {
        const {top} = container.current.getBoundingClientRect();
        if(top < window.innerHeight - 200){ 
          setDisplay(true);
          window.removeEventListener('scroll', onScroll);
        }
      };

      const checkSize = (e) => e.matches ? setColumnsCount(1) : setColumnsCount(2);
      const mq = window.matchMedia('(max-width: 500px)');
      checkSize(mq);
      mq.addEventListener("change", checkSize);

      onScroll();
      if(window.matchMedia('(min-width:525px)').matches){  window.addEventListener('scroll', onScroll); }
      else{ setDisplay(true); }

      return () => {
        mq.removeEventListener("change", checkSize);
        window.removeEventListener('scroll', onScroll);
      }

  },[]);
  return(

      <motion.div
        ref={ e => { container.current=e; return innerRef(e); } }
        key={'wrapp_cat'+category}
        variants={variant}
        initial='initial'
        animate='animate'
        exit='exit'
        id={cleanCategoryName(category)}
        className="cat">
          <Masonry columnsCount={ columnsCount } gutter='20px'>
              { /* category === 'Design' && c === 0 */ }
              { display && getProjectsOfCategory(category).map( (project,c) => <ProjectThumbnails key={project.title} project={project} animated={true} /> ) }
          </Masonry>
      </motion.div>

  );
}

export const Flow = ({projects, onCategoryChange=()=>0}) => {

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
