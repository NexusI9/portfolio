
import {motion} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

const Section = ({title, ico, content}) => {

    const [ yPos, setYPos ] = useState(0);
    const elt = useRef();
  
    useEffect(() => {
  
        let lastScroll = 0;
        let lastVelo = 0
  
        function scrollVelocity(max = 5){
  
            var velocity = lastScroll - window.pageYOffset;
            if( velocity > max){ velocity = max; }
            if( velocity < -1*max){ velocity = -1*max; }
            if( velocity == -1 || velocity == 1){ velocity=0;}
            if(velocity != lastVelo){ return velocity; }
  
            lastVelo = velocity;
            return 0;
        }
  
        const onScroll = () => {
  
          const top = elt.current.getBoundingClientRect().top;
          const height = elt.current.getBoundingClientRect().height;
          if(top < window.innerHeight && top+height > 0){ setYPos(scrollVelocity()); }
          lastScroll = window.pageYOffset;
  
        }
  
        window.addEventListener('scroll', onScroll);
  
        return () => window.removeEventListener('scroll', onScroll);
      },[elt]);
  
  
    return(
  
        <motion.div
        className='resumeSection'
        style={{transform:'translateY('+0+'%)'}}
        ref={elt}
        key={'section'+title}
        >
          <div className='sectionHeader'>
            {ico && <span className='ico'><img src={ico.src}/></span> }
            <h4>{title}</h4>
          </div>
          <div> {content} </div>
  
        </motion.div>
  
    );
}

  export default Section;