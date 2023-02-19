import SCENE from './scene';
import { useEffect, useMemo, useRef, useState} from 'react';
import {gsap} from 'gsap';
import { motion } from 'framer-motion';

const Portrait = ({innerRef = e => e}) => {

    const container = useRef();
    const [render, setRender] = useState(false);
    const scene = useMemo( () => new SCENE({
      onLoad: () => gsap.to(innerRef.current,{opacity:1, duration:1}),
      container: container.current
    }),[] ); 
  
    useEffect(() => {
  
        const onScroll = () => {
          const { top } = container.current.getBoundingClientRect();
          setRender(top < window.innerHeight);
        }
  
        onScroll();
  
        scene.container = container.current;
        scene.init();
  
        window.addEventListener('scroll', onScroll);
  
        return () => window.removeEventListener('scroll', onScroll);
    },[scene]);
  
    useEffect(() => { 
      if( !scene ){return;}
      render ? scene.play() : scene.pause() 
    },[render]);
  
  
    return( <motion.div
      key={'threecanvas'}
      ref={e => {innerRef(e); container.current = e; }}
      initial={{y:80,opacity:0}}
      animate={{y:0, opacity:1, transition:{duration:0.8}}}
      exit={{opacity:0, transition:{duration:0.3}}}
      id="squareabout" style={{opacity:0}}>
        <h2>视觉设计师</h2>
        <h2>视觉设计师</h2>
      </motion.div> );
  }
  
  export default Portrait;