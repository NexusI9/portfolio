import {motion, AnimatePresence} from 'framer-motion';
import { useEffect, useState } from 'react';

export const HoverSquare = ({children, size='100%', name='', top, left}) => {

  const [active, setActive] = useState(false);

  const variantContainer = {
    initial:{},
    animate:{transition:{duration:0.4, staggerChildren:0.1}},
    exit:{transition:{duration:0.4, staggerChildren:0.1}}
  };
  const variantChild = {
    initial:{scale:0},
    animate:{scale:1, opacity:1},
    exit:{
      scale:3,
      opacity:0,
      transition:{
        opacity: {duration:0.1},
        scale:{duration:0.4}
      }
    }
  };



  useEffect(() => {

    const onMouseMove = (e) => {
    }

    if(active){ window.addEventListener('mousemove', onMouseMove); }
    else{ window.removeEventListener('mousemove', onMouseMove); }

    return () => window.removeEventListener('mousemove', onMouseMove);
  },[active]);


  return(
    <div style={{position:'relative'}} onMouseEnter={ () => setActive(true) } onMouseLeave={ () => setActive(false) }>
      <AnimatePresence exitBeforeEnter>
        {
          active &&
          <motion.div
            className='hoverSquare'
            key={'hoverSquare'+name}
            variants={variantContainer}
            initial='initial'
            animate='animate'
            exit='exit'
            style={{top:top, left:left}}
          >
            <motion.span variants={variantChild} key={'hoverSpan1'+name} style={{width:size, height:size}}></motion.span>
            <motion.span variants={variantChild} key={'hoverSpan2'+name} style={{width:size, height:size}}></motion.span>

          </motion.div>
        }
      </AnimatePresence>
      <div className='children'>
        {children}
      </div>
    </div>
  );

}

export const PercentBar = () => {

  const [width, setWidth] = useState(0);

  useEffect( () => {

    const onScroll = () => {

      var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
      const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      setWidth(percent);

    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  return(
    <motion.span
    key='percentBar'
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.3}}}
    exit={{opacity:0, transition:{duration:0.3}}}
    id='percentBar'
    style={{width:width+'%'}}>
    </motion.span>
  );

}
