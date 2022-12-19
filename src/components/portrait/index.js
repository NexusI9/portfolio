import SCENE from './scene';
import { useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { motion } from 'framer-motion';


function Portrait({innerRef = e => e}){

  const container = useRef();

  useEffect(() => {

      const scene = new SCENE({
        onLoad: () => gsap.to(innerRef.current,{opacity:1, duration:1}),
        container: container.current
      });
      scene.init();

  },[]);



  return( <motion.div
    key={'threecanvas'}
    ref={e => {innerRef(e); container.current = e; }}
    initial={{y:80,opacity:0}}
    animate={{y:0, opacity:1, transition:{duration:0.8}}}
    exit={{opacity:0, transition:{duration:0.3}}}
    id="squareabout" style={{opacity:0}}>
    </motion.div> );
}

export default Portrait;
