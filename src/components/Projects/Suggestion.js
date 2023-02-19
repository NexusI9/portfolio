import { ProjectThumbnails } from '../Flow';
import { motion } from 'framer-motion';
import {  getCategoryOfProject } from '../../lib/utils';

const Suggestion = ({projects, display}) =>{

  const variantContainer={
    show:{opacity:1, transition:{duration:0.8, type:"tween", ease:'easeOut', delay:0.2}},
    hide:{opacity:0, transition:{duration:0.5, type:"tween", ease:'easeOut'}},
    exit:{opacity:0, transition:{duration:0.7}}
  }

  const variantChild={
    show:{y:0, transition:{duration:0.8, type:"tween", ease:'easeOut'}},
    hide:{y:200, transition:{duration:0.5, type:"tween", ease:'easeOut',staggerChildren:0.2}},
    exit:{y:-400, transition:{duration:0.7,staggerChildren:0.2}}
  }

  return(
      <motion.div 
        id="suggest"
        key='suggestStrype'
        variants={variantContainer}
        initial='hide'
        animate={ display ? 'show' : 'hide' }
        exit='exit'
      >
        <motion.h2
          key='suggestSeeAlso'
          variants={variantChild}
        > See other { getCategoryOfProject(projects[0]).toLowerCase() }  projects 
        </motion.h2>
        <motion.section
          key='suggestSection'
          variants={variantChild}
        >
          { projects.map( (selected,i) => <ProjectThumbnails key={'suggest-'+i} project={selected} animated={true} /> ) }
        </motion.section>
      </motion.div>
    );
}

export default Suggestion;

