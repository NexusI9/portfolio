
import { cleanCategoryName, getCategories, getColorOfCategory, setFaviconColor } from '../../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-responsive-masonry';
import { useEffect, useState, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { Video } from '../article';
import { Signature } from '../statics';


const variant = {
  initial:{opacity:0},
  animate:{opacity:1, transition:{ staggerChildren:0.06 } },
  exit: {opacity:0, transition:{ delay:0.5, staggerChildren:0.06 } }
}

const mainTitleVariant={
  initial:{opacity:0},
  animate:{opacity:1, transition:{duration:0.4}},
  exit:{opacity:0, transition:{duration:0.4}},
}

const toProjectVariant = {
  initial:{opacity:0, y:200},
  animate:{opacity:1, y:0, transition:{ duration: 0.6 }},
  exit:{ y:'-200vh', opacity:0, transition:{ duration:0.4}}
}

const toMapTransition = {
  initial:{opacity:1, scale:1},
  animate:{opacity:1, scale:1, transition:{ duration: 0.6 }},
  exit:{ scale:0, opacity:0, transition:{ duration:0.2, type:'tween', ease:"backIn"}}
}

const tl = gsap.timeline({duration:1,repeat:0});
export const BackgroundHeader = ({title, color, speed=2, delay=0.04, onDone}) => {

  const TEXT_SIZE = 2.5;
  const containVariant = {
    initial:{},
    animate:{opacity:1, transition:{delay:0.1, staggerChildren:delay, duration:speed}},
    exit:{opacity:0, transition:{staggerChildren:delay, duration:speed}}
  };

  const caseVariant = {
    initial:{ y: '0em'},
    animate:{ y: (-1*TEXT_SIZE+'em')  },
    exit:{ y: (-2*TEXT_SIZE+'em') }
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
    <motion.div
      key={"mainTitle"+title}
      variants={containVariant}
      initial='initial'
      animate='animate'
      exit='exit'
      className="mainTitle backTitles"
    >
    {
    title &&
    [...title].map( (letter,i) =>
      <Case  key={'letterback_'+title+letter+i}
             letter={ letter && letter.replace(" ", "\xa0") || " " }
             color={color}
        />
    )
    }
  </motion.div>
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

        const interval = setInterval( changeIndex, 1000 );

        return () => clearInterval(interval);

    },[pictures,index]);

    return (
      <AnimatePresence>
        <motion.img
          className='thumb'
          key={pictures[index]}
          src={pictures[index]}
          initial={{opacity:0}}
          animate={{opacity:1,transition:{duration:0.2}}}
          exit={{opacity:0,transition:{duration:0.2}}}
        />
      </AnimatePresence>
    );
  }
  const thumbnail = project.thumbnail;
  const location = useLocation();

  const [ yPos, setYPos ] = useState(0);
  const [overlay, setOverlay] = useState();
  const elt = useRef();

  //video resize
  const thumbnailImg = useRef();
  const overlayCtnr = useRef();
  const videoCtnr = useRef();

  const overlayContent = () => {

        if(!project.overlay){ return; }

        switch(project.overlay.type){
          case 'picture':
            return <img className='thumb' src={project.overlay?.url} />
          break;

          case 'video':
            return <Video innerRef={videoCtnr} id={project.overlay?.url} autoplay={true} defaultQuality='540p' placeholder={thumbnail} loadIco={false} playIco={false}/>
          break;

          case 'slideshow':
            return <SlideOverlay pictures={project.overlay?.url} />
          break;

          default:
        }
  }

  useEffect(() => {

    let lastScroll = -200;
    let lastVelo = 0

    function scrollVelocity(max = 20){

        var velocity = lastScroll - window.pageYOffset;
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

      const ctnrHeight = overlayCtnr.current.getBoundingClientRect().height;
      const ctnrWidth = overlayCtnr.current.getBoundingClientRect().width;
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

    const onScroll = () => {

      const top = elt.current.getBoundingClientRect().top;
      const height = elt.current.getBoundingClientRect().height;
      if(top < window.innerHeight && top+height > 0){ setYPos(scrollVelocity()); }

      lastScroll = window.pageYOffset;

    }



    if(animated){ window.addEventListener('scroll', onScroll); }

    if(videoCtnr.current){
      scaleVideo();
      window.addEventListener('resize', scaleVideo);
    }

    return () => {
      if(animated){ window.removeEventListener('scroll', onScroll) }
      if(videoCtnr){ window.removeEventListener('resize', scaleVideo); }
    };
  },[elt, animated, overlay]);

  return(
    <Link
      to={'/project/'+project.title}
      style={{transform:'translateY('+yPos+'%)', display:'inline-block'}}
      className='linkSlider'
    >
        <motion.section
          key={'thumbnail'+project.title}
          variants={location.pathname === '/map' ? toMapTransition : variant}
          className={'projects'}
          ref={elt}
          onMouseEnter = { () => setOverlay( overlayContent ) }
          onMouseLeave = { () => setOverlay() }
          >

          <img className='move thumb gradientImg' src={thumbnail} />
          <section className='move overlay' ref={overlayCtnr}>
              <img className='thumb' ref={thumbnailImg} src={thumbnail} />
              {overlay && overlay}
          </section>

          { innerDesc &&
            <div className='project_desc'>
              <h2 className={project.font ? project.font : ''}>{project.title}</h2>
              { project.desc && <p>{project.desc}</p> }
          </div>
        }
        </motion.section>
    </Link>
  );
}

const CategoryContainer = ({projects ,category, innerRef}) => {

  const [columnsCount, setColumnsCount] = useState(2);

  useEffect(()=>{

      const checkSize = () => window.innerWidth > 500 ? setColumnsCount(2) : setColumnsCount(1);

      checkSize();

      window.addEventListener('resize', checkSize);

      return () => window.removeEventListener('resize', checkSize);
  },[]);
  return(

      <motion.div
        ref={innerRef}
        key={'wrapp_cat'+category}
        variants={variant}
        initial='initial'
        animate='animate'
        exit='exit'
        id={"project_"+cleanCategoryName(category)}
        className="cat">
          <Masonry columnsCount={ columnsCount } gutter='20px'>
              { projects[category].map( project => <ProjectThumbnails key={project.title} project={project} /> ) }
          </Masonry>
      </motion.div>

  );
}

export const Flow = ({projects}) => {

  const containerRef = useRef([]);
  const catContainers = getCategories(projects).map( (cat,c) => <CategoryContainer key={'CategoryContainer_'+c} category={cat} projects={projects} innerRef={el => containerRef.current[c] = el }/> );
  const navigate = useNavigate();
  const [category, setCategory] = useState();

  useEffect( () => {

    const setBodyTheme = (color) => {
      //switch body attribute for CSS change to take effects
      document.querySelector("body").setAttribute('data-theme',color);
    }

    const favicon = document.getElementById('favicon');
    const checkViewportDiv = () => {

      catContainers.forEach( (cat,c) => {

        const container = containerRef.current[c];
        const title = cat.props.category;
        const { height, top, bottom } = container.getBoundingClientRect();

        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;

        if( scrollTop < windowHeight ){ return setCategory(" "); }

        if(
          top < window.innerHeight/4 &&
          bottom > window.innerHeight &&
          category !== title
        ){
          const catColor = getColorOfCategory(title);
          setBodyTheme( catColor );
          setFaviconColor(favicon,catColor);
          /*navigate('/#'+title);*/
          return setCategory(title);

        }


      });

    }

    window.addEventListener('scroll', checkViewportDiv);
    return () => window.removeEventListener('scroll', checkViewportDiv);

  }, [containerRef, category]);

  return (
    <>

      <AnimatePresence >
        <BackgroundHeader key={'bkg'+category} title={category} color={ getColorOfCategory(category) || '#000000' }/>
      </AnimatePresence>

      <div id="projects">
        {catContainers}
        <Signature />
      </div>

    </>
  );
}
