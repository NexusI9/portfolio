import { motion } from 'framer-motion';
import { SocialsIcons, MailAddress} from '../Inputs';

const Socials = ({minify=false, direction='vertical'}) => (

    <motion.div
      id="socials"
      key='socials'
      initial={ (direction) => {
        return{
          opacity:0, 
          x: direction === 'vertical' ? 70 : 0,
          y: direction === 'vertical' ? 0 : 70
        }
      }
    }
      custom={direction}
      animate={{ opacity:1,  x:0, y:0, transition:{duration:0.4, type:'tween', ease:'easeOut'} }}
      exit={ (direction) => {
        return {
          opacity:0, 
          x: direction ==='vertical' ? 70 : 0,
          y: direction ==='vertical' ? 0 : 70,  
          transition:{duration:0.2, type:'tween', ease:'easeOut'}
        }
      }
    }
    >

      {!minify && <div><MailAddress /></div>}

      <SocialsIcons mail={minify} />
    </motion.div>

);

export default Socials;