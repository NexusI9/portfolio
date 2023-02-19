import { useState, useEffect, useRef  } from "react";
import { motion } from 'framer-motion';
import { default as Masonry } from 'react-responsive-masonry';
import { variant } from './Flow.constants';
import { getProjectsOfCategory, cleanCategoryName } from '../../lib/utils';
import ProjectThumbnails from "./ProjectThumbnails";

const CategoryContainer = ({projects ,category, innerRef}) => {

    const [columnsCount, setColumnsCount] = useState(2);
    const [display, setDisplay] = useState(false);
    const container = useRef(); 
  
    useEffect(()=>{
  
        const onScroll = () => {
          const {top} = container.current.getBoundingClientRect();
          if(top < window.innerHeight - 200){ 
            setDisplay(true);
            window.removeEventListener('scroll', onScroll);
          }
        };
  
        const checkSize = (e) => e.matches ? setColumnsCount(1) : setColumnsCount(2);
        const mq = window.matchMedia('(max-width: 500px)');
        checkSize(mq);
        mq.addEventListener("change", checkSize);
  
        onScroll();
        if(window.matchMedia('(min-width:525px)').matches){  window.addEventListener('scroll', onScroll); }
        else{ setDisplay(true); }
  
        return () => {
          mq.removeEventListener("change", checkSize);
          window.removeEventListener('scroll', onScroll);
        }
  
    },[]);
    return(
  
        <motion.div
          ref={ e => { container.current=e; return innerRef(e); } }
          key={'wrapp_cat'+category}
          variants={variant}
          initial='initial'
          animate='animate'
          exit='exit'
          id={cleanCategoryName(category)}
          className="cat">
            <Masonry columnsCount={ columnsCount } gutter='20px'>
                { display && getProjectsOfCategory(category).map( (project,c) => <ProjectThumbnails key={project.title} project={project} animated={true} /> ) }
            </Masonry>
        </motion.div>
  
    );
  }

  export default CategoryContainer;