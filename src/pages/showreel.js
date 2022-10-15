import { Video } from '../components/article';
import { HomeButton } from '../components/inputs';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function Showreel({onLoad}){

  useEffect(() => onLoad ? onLoad() : 0, []);

  return(
    <motion.div
    id='showreel'
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
    exit={{y:-80, opacity:0, transition:{duration:0.3}}}
    >
      <HomeButton />
      <Video id='502699503' playIco={false}/>
    </motion.div>
  );
}


export default Showreel;
