
import { motion } from 'framer-motion';
import { getCategories } from '../lib/utils';
import { Link } from 'react-router-dom';
import { ProjectThumbnails } from '../components/flow';

import { BackButton } from '../components/inputs';
import { useState } from 'react';

const variantWrapper = {
  initial:{opacity:0},
  animate:{opacity:1, transition:{ duration:0.2, staggerChildren:1} },
  exit:{opacity:0,  transition:{ duration:0.2 } }
}

const variantHeader = {
  initial:{opacity:0},
  animate:{opacity:1, transition:{ duration:0.4 }},
  exit:{y:-200, opacity:0, transition:{ duration:0.3 }}
}

const variantMapThumbnail = {
  initial:{opacity:0},
  animate:{opacity:1, transition:{delay: 0.3, duration:1}},
  exit:{opacity:0, transition:{duration:1}},
}


const Category = ({projects, category}) => {


  const [ header, setHeader ] = useState(<h2>{category}</h2>);

  const onMouseEnter = (project) => {

    //convert project into react symbol/html content
    const { title, date, desc, font } = project;
    setHeader(
      <>
        <h3 className={font || ''}>{title}</h3>
        { desc && <p>{desc}</p> }
        <p>{date}</p>
      </>
    );

  }

  const Header = ({content}) => {

    return(
      <motion.div
        className='mapHeader'
        variants={variantHeader}
        key={'header'+category}
        initial='initial'
        animate='animate'
        exit='exit'
        >
        {content}
      </motion.div>
    );
}
  const Grid = ({projects, onMouseEnter, onMouseLeave}) => (
    <motion.div
      className='mapGrid'
      key={'mapGrid'+category}
    >
      { projects.map( project =>
        <motion.div
          key={'project'+project.title}
          initial='initial'
          animate='animate'
          exit='exit'
          onMouseEnter={ () => onMouseEnter(project) }
          onMouseLeave={ () => onMouseLeave() }
        >
          <ProjectThumbnails project={project} animated={false} innerDesc={false} />
        </motion.div>
      ) }
    </motion.div>
  )


  return(
    <div className='mapCategory' >
      <Header content={header} />
      <Grid projects={projects[category]} onMouseEnter={onMouseEnter} onMouseLeave={ () =>  setHeader(<h2>{category}</h2>) } />
    </div>
  );
}

function Map({projects}){

  return(
    <>

    <motion.div
      id="map"
      key='mapWrapper'
      initial={{ opacity:0}}
      animate={{ opacity:1, transition:{duration:0.7, type:'tween', ease:'easeOut'}}}
      exit={{ opacity:0, y:'-100%', transition:{duration:0.6}}}
    >
      { getCategories(projects).map( (category,i) =>
        <motion.div
          key={'mapCategory'+i}
          initial={{opacity:0, scale:3}}
          animate={{opacity:1, scale:1, transition: {duration:0.5, type:'tween', ease:'easeOut', delay:i/5 }}}
          exit={{opacity:0, transition:{duration:0.4}}}
        >
          <Category projects={projects} category={category} />
        </motion.div>
      ) }
    </motion.div>
    </>
  );


}

export default Map;
