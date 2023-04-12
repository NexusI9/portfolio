import Link from 'next/link';
import { motion } from 'framer-motion';

const BackButton = () => (

    <Link href='/'>
      <motion.div
      id='backButton'
      initial={{x:-200, opacity:0}}
      animate={{x:0, opacity:1, transition:{duration:0.9, type:'tween', ease:'easeOut', delay:0.3}}}
      exit={{y:-200, opacity:0, transition:{duration:0.4}}}
      >
        <small>back to homepage</small>
      </motion.div>
    </Link>
  
  );

  export default BackButton;
