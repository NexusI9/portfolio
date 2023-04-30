import {motion} from 'framer-motion';
import { useEffect, useState  } from 'react';

const PercentBar = () => {

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

export default PercentBar;