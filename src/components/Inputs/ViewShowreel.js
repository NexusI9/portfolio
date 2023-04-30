import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ViewShowreel = ({container}) => {

    const dot = useRef();
  
    useEffect(() => {
  
      const onMousemove = (e) => {
          if(dot){
            const size = dot.current.getBoundingClientRect().width;
            gsap.to(dot.current,{transform:'translate('+(e.pageX-(size/2))+'px,'+(e.pageY-(size/2))+'px)', duration:0.3, ease:'Power1.eastOut'})
            //dot.current.style.transform = 'translate('+e.pageX+'px,'+e.pageY+'px)';
          }
      };
  
  
      container.addEventListener('mousemove',onMousemove);
  
      return () => container.removeEventListener('mousemove', onMousemove);
  
    },[dot,container]);
  
    return(
      <motion.div
        id='viewShowreel'
        ref={dot}
        key='viewShowreel'
        initial={{scale:0}}
        animate={{scale:1, transition:{duration:0.2}}}
        exit={{scale:0, transition:{duration:0.2}}}
      >
        <Link href='/showreel'></Link>
      </motion.div>
    );
  }

export default ViewShowreel;