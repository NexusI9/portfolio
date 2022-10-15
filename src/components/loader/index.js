import { motion } from 'framer-motion';
import { gsap, Elastic } from 'gsap';
import { useLocation, useParams } from 'react-router-dom';
import { getPageTitleFromLocation, getProjectFromTitle } from '../../lib/utils';
import { useRef, useEffect } from 'react';


export const Dotty = ({ introComplete }) => {

  const alpha = useRef();
  const beta = useRef();
  const delta = useRef();
  const gamma = useRef();

  useEffect(() => {

      const elastEaseIn = Elastic.easeIn.config(2, 0.75);
      const elastEaseOut = Elastic.easeOut.config(2, 0.75);

      const speed = 0.4;
      const recover_speed = 0.2;

      function intro(){

        const dottyAppear = gsap.timeline({ delay: 1, onComplete: () => introComplete ? introComplete(true) : 0 });
        dottyAppear.to([alpha.current, beta.current,gamma.current, delta.current] , {scale:0, duration:0});
        dottyAppear.to(alpha.current, {scale:1, duration:speed/2, ease:elastEaseOut});
        dottyAppear.to(beta.current, {scale:1, duration:speed/2, ease:elastEaseOut});
        dottyAppear.to(delta.current, {scale:1, duration:speed/2, ease:elastEaseOut });
        dottyAppear.to(gamma.current, {scale:1, duration:speed/2, ease:elastEaseOut });

        return dottyAppear;
      }
      function loop(){

        const dottyAnim = gsap.timeline({ repeat:-1 });
        //phase 1 : remove
        dottyAnim.to(alpha.current, {x:'100%', borderRadius:0, duration:speed, ease: elastEaseIn});
        dottyAnim.to(alpha.current, {visibility:'hidden', borderRadius:'100%', x:0, y:'100%', duration:0});

        dottyAnim.to(beta.current, {y:'100%', borderRadius:'100%', duration:speed, ease: elastEaseIn});
        dottyAnim.to(beta.current, {visibility:'hidden', borderRadius:0, y:0, x:'-100%', duration:0});

        dottyAnim.to(gamma.current, {x:'-100%', borderRadius:0, duration:speed, ease: elastEaseIn});
        dottyAnim.to(gamma.current, {visibility:'hidden', borderRadius:'100%', x:0, y:'-100%', duration:0});

        dottyAnim.to(delta.current, {y:'-100%', borderRadius:'100%', rotate:180,duration:speed*1.5, ease: Elastic.easeInOut.config(4, 0.75)});
        //phase 2 : recover

        dottyAnim.to(alpha.current, {visibility:'visible', x:0, y:0, duration:0});
        dottyAnim.to(delta.current, {visibility:'hidden', y:0, x:'100%', borderRadius:0,duration:0});
        // v
        dottyAnim.to(beta.current, {visibility:'visible', x:0, y:0, duration:recover_speed, ease:elastEaseOut});
        dottyAnim.to(gamma.current, {visibility:'visible', x:0, y:0, duration:recover_speed, ease:elastEaseOut});
        dottyAnim.to(delta.current, {visibility:'visible', x:0, y:0, duration:recover_speed, ease:elastEaseOut});

        return dottyAnim;
      }
      const master = gsap.timeline();

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

const MainFrame = ({percent}) => {

  const frame = useRef();
  const cache = useRef();
  const bar = useRef();

  useEffect(() => {


      /*const startAnim  = gsap.timeline();
      startAnim.to(frame.current, {scaleY:0, scaleX:0, duration:0 });
      startAnim.to(frame.current, {scaleY:1, scaleX:0.02, duration:0.3, ease: "easeIn" });
      startAnim.to(frame.current, {scaleX:1, scaleY:1, duration:0.4, ease: Elastic.easeOut.config(1, 0.5), onComplete: () => frame.current ? frame.current.style.animationName = 'sinScale' : 0 } );
      startAnim.to(cache.current, {scale:0.97, duration:0.8, ease: Elastic.easeOut.config(1, 0.3) } );
      startAnim.to(bar.current, {width:"400%", duration:0.8, ease: "easeOut" } );
      */

  }, [frame]);

  return(
      <svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" id="loadFrame" style={{display:'none'}}>
        <defs>
        </defs>
        <rect width='100%' height='100%' id='frameCache'/>
        <clipPath id='frameClip'>
          <rect width='100%' height='144%' />
        </clipPath>
      </svg>

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
        labelFontSize -= 10;
        label.current.style.fontSize = labelFontSize + 'px';
        resizeToFit();
      }
    }

    if(percent == 0){ resizeToFit(); }

    gsap.to(label.current, {'background-position-y': (50 - (percent*50/100))+'vh', duration:0.3, ease:"easeOut"});

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
          <motion.h2 key='projectNameLabel' exit={{scale:0.3, opacity:0, transition:{duration:0.2}}} ref={label} className={ project && project.font }>{pageTitle}</motion.h2>
          <motion.small id='loaderPercent' exit={{scale:3, opacity:0, transition:{duration:0.3}}} key='percentsmall'>{Math.ceil(percent)}%</motion.small>
        </motion.div>

        <motion.span className='backPlanes' key='backPlane1' variants={variantPlaneTwo}></motion.span>
        <motion.span className='backPlanes' key='backPlane2' variants={variantPlane}></motion.span>


      </motion.div>
  );
}

export default Loader;
