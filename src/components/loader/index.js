import { motion } from 'framer-motion';
import { gsap, Elastic } from 'gsap';
import { useLocation, useParams } from 'react-router-dom';
import { getPageTitleFromLocation, getProjectFromTitle } from '../../lib/utils';
import { useRef, useEffect } from 'react';
import zhConvertor from 'zhconvertor';

export const Dotty = ({ introComplete }) => {

  const alpha = useRef();
  const beta = useRef();
  const delta = useRef();
  const gamma = useRef();

  useEffect(() => {

      var iteration = 0;
      const onAnimationEnd = (e) => {
        iteration++;
        return iteration === 1 && introComplete ? introComplete(true) : 0;
      }
      alpha.current.addEventListener('animationiteration', onAnimationEnd);

      return () => alpha.current && alpha.current.removeEventListener('animationiteration', onAnimationEnd)


  }, [alpha, beta, delta, gamma, introComplete]);

  return(
    <div className="looper">
      <span ref={alpha}></span>
      <span ref={beta}></span>
      <span ref={delta}></span>
      <span ref={gamma}></span>
    </div>
  );

}


function Loader({title, onLoad, percent=0}){

  const location = useLocation();
  const pageTitle = getPageTitleFromLocation(location);
  const label = useRef();
  const project = getProjectFromTitle(pageTitle);


  useEffect( () => {



    let labelFontSize =  parseInt(window.getComputedStyle(label.current, null).getPropertyValue('font-size'));

    const resizeToFit = () => {
      const labelWidth =  label.current.getBoundingClientRect().width;
      const labelHeight =  label.current.getBoundingClientRect().height;
      if(
        (window.innerWidth > window.innerHeight &&
        labelWidth > window.innerWidth) //Desktop mode
        ||
        (window.innerWidth < window.innerHeight &&
        labelHeight > window.innerHeight) //Mobile mode
      ){
        labelFontSize -= 150;
        label.current.style.fontSize = labelFontSize + 'px';
        resizeToFit();
      }
    }

    if(percent == 0){ resizeToFit(); }
    gsap.to(label.current, {
      'background-position-y': `${(50 - (percent*50/100))}vh`, 
      'background-color': percent > 80 ? `rgb(255, 255, 255, ${percent/100})` : null,
      duration:percent > 80 ? 0.5 : 0.3, 
      ease:"easeOut"
    });


  },[percent]);

  const variantPlane={
    initial:{y:'100%'},
    animate:{y:0,transition:{duration:0.3}},
    exit:{y:'-100%', transition:{delay:0.3, duration:0.3}},
  }

  const variantPlaneTwo={
    initial:{y:'100%'},
    animate:{y:0,transition:{duration:0.3}},
    exit:{y:'-100%', transition:{delay:0.5, duration:0.3}},
  }

  const variantFrame={
    initial:{opacity:0},
    animate:{opacity:1, transition:{delay:0.7, duration:1, type:"tween", ease:"easeOut"}},
    exit:{opacity:0, transition:{duration:0.3}}
  }

  const variantWrapper={
    initial:{},
    animate:{transition:{duration:0.4, staggerChildren:0.2}},
    exit:{transition:{duration:0.4, staggerChildren:0.2}}
  }

  return(
      <motion.div
      key='loaderPage'
      id="loaderPage"
      variants={variantWrapper}
      initial='initial'
      animate='animate'
      exit='exit'
      >
        <motion.div key='frameLoadDiv' id="frameWrapper" variants={variantFrame} >
          <motion.div key='underframe' exit={{scale:3, opacity:0, transition:{duration:0.3}}} id="underFrame">
            <Dotty introComplete={ (e) => onLoad ? onLoad(e) : 0 }/>
          </motion.div>
          <motion.h2 key='projectNameLabel' exit={{scale:0.3, opacity:0, transition:{duration:0.2}}} ref={label} className={ project && project.font }>{ zhConvertor.t2s(pageTitle) }</motion.h2>
          <motion.small id='loaderPercent' exit={{scale:3, opacity:0, transition:{duration:0.3}}} key='percentsmall'>{Math.ceil(percent)}%</motion.small>
        </motion.div>

        <motion.span className='backPlanes' key='backPlane1' variants={variantPlaneTwo}></motion.span>
        <motion.span className='backPlanes' key='backPlane2' variants={variantPlane}><img alt='loader background' src={project?.banner}/></motion.span>


      </motion.div>
  );
}

export default Loader;
