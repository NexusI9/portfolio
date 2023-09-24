import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { srcSetFromPath } from './Thumbnail.helper';

export default ({pictures}) => {
  
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
          {...srcSetFromPath(pictures[index])}
          key={pictures[index]}
          initial={{opacity:0}}
          animate={{opacity:1,transition:{duration:0.25}}}
          exit={{opacity:1,transition:{duration:0.25}}}
        />
      </AnimatePresence>
    );
  }