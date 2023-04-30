import { motion } from 'framer-motion';

const Signature = () => (
  <motion.div 
  id='signature'
  key='signature'
  initial={{opacity:0, y:70}}
  animate={{opacity:1, y:0, transition:{duration:0.4, type:'tween', ease:'easeOut'}}}
  exit={{opacity:0, y: 70,  transition:{duration:0.2, type:'tween', ease:'easeOut'}}}
  >
    <small>Website designed & developed by Nassim El Khantour</small>
    <span></span>
    <small>&copy;	Nassim El Khantour {new Date().getFullYear()}</small>
  </motion.div>
);

export default Signature;
