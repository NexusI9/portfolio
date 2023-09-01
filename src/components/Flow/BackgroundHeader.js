import { motion } from 'framer-motion';

const BackgroundHeader = ({title="", zhongwen="", speed=1, delay=0.02}) => {

    const TEXT_SIZE = 2;
    const containVariant = {
      initial:{},
      animate:{transition:{staggerChildren:delay, duration:speed}},
      exit:{transition:{staggerChildren:delay, duration:speed}}
    };
  
    const caseVariant = {
      initial:{ opacity:0, y: '0em'},
      animate:{ opacity:1, y: (-1*TEXT_SIZE+'em'), transition:{duration:speed/2,  type:'spring', stiffness: 100, damping:20} },
      exit:{ opacity:0, y: (-2*TEXT_SIZE+'em'), transition:{duration:speed/4, type:'tween'}  }
    };
  
    const zhongVariant = {
      initial:{ opacity:0, y: '0em'},
      animate:{ opacity:1, y: (-1*6+'vh'), transition:{duration:speed/2,  type:'spring', stiffness: 100, damping:20} },
      exit:{ opacity:0, y: (-1.5*6+'vh'), transition:{duration:speed/4, type:'tween'}  }
    };
  
    return (
      <>
        <motion.div 
         id='zhongwenName'
         key={"zhongwenName"+title}
         variants={zhongVariant}
         initial='initial'
         animate='animate'
         exit='exit'
         >
          {[...zhongwen].map( (letter,i) => <h2 key={`zhongwen${i}`}>{letter}</h2> )}
        </motion.div>
        <motion.div
          key={"mainTitle"}
          variants={containVariant}
          initial='initial'
          animate='animate'
          exit='exit'
          className="mainTitle"
        >
          {
          [...title].map( (letter,i) =>
            <motion.section
              key={letter+i+'subletter'}
              className='case'
              variants={caseVariant}
              > 
                <h2></h2>
                <h2>{letter}</h2>
                <h2></h2>
            </motion.section>
          )}
        </motion.div>
    </>
  );
  }

export default BackgroundHeader;