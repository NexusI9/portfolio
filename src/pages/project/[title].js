
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  getRandomProject,
  getProjects
} from '@/lib/utils';
import { Suggestion, Content, Header } from '@/components/Projects';
import { PercentBar } from '@/components/Props';
import { Socials, Signature } from '@/components/Statics';
import { useEffect, useState, useRef } from 'react';
import { Loader } from '@/components/Loader';
import {motion, AnimatePresence} from 'framer-motion';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';

const mapDispatchToProps = (dispatch) => ({
  _setHomeButton: (e) => dispatch({type: 'TOGGLE_BACK_BUTTON', active:e}),
  _setSkin: (e) => dispatch({type:'SWITCH_SKIN', skin:e}),
});

//can't add dynamically imports
const projectsList = {
  ACAB: dynamic( () => import('../../projects/acab') )
};


function Project({_setHomeButton, _setSkin, ...props}){

  const {project} = props;
  const Index = project && projectsList['ACAB'];

  //elements
  const suggestions = useRef();

  //project content
  const [projectContainer, setProjectContainer]= useState();

  //css / transitions
  const [loadComplete, setLoadComplete] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);

  const [whiteMenu, setWhiteMenu] = useState(true);
  const [displayHeader, setDisplayHeader] = useState(true);



  const handleLoadComplete = () => {
    setLoadComplete(true); 
    _setHomeButton(true);
    suggestions.current = getRandomProject({ number:3, project:project });
  }

  useEffect( () => { 

    _setHomeButton(false); 
    //project
    const {title} = project;
    if(title){
      setLoadComplete(false); 
    }

  },[project.title]);


  useEffect( () => {

    if(!project){return; }
    
    const onScroll = () => {
    
      const scrollPos = window.pageYOffset;
      //sidebar & suggestion

      if( scrollPos > projectContainer?.offsetHeight - 400 ){ setShowSideBar(false); }
      else{ setShowSideBar(true); }

      if(!projectContainer){return;}

      if(projectContainer.getBoundingClientRect().top > 0){
        setWhiteMenu(true);
        setDisplayHeader(true); 
      }else{
        setWhiteMenu(false);
        if( !window.matchMedia('(max-width:425px)').matches ){ setDisplayHeader(false); }
      }

    }


    window.addEventListener('scroll', onScroll);
    _setSkin(project.skin);
    onScroll();


  return () => window.removeEventListener('scroll', onScroll);
    
  },[project, projectContainer]);

  useEffect( () => {

        const menu = document.querySelector('#menu');
        if(whiteMenu){ menu.classList.add('white'); }
        else{ menu.classList.remove('white'); }

        return () => {
          menu.classList.remove('white');
        };

  }, [whiteMenu]);

  
  return(
    <>
      <Head>
        <title>{`${project.title} by Nassim El Khantour`}</title>
      </Head>

      <AnimatePresence mode='wait'> 
          { (!loadComplete && project) && <Loader 
              key={'LOADER' + project.title } 
              title={project.title}
              background={project.banner}
              font={project.font}
              onLoadComplete={handleLoadComplete}
              /> 
          }
        </AnimatePresence>

        <AnimatePresence mode='wait'> 
          { (loadComplete && project && displayHeader) &&  <Header project={project} />}  
        </AnimatePresence>
        <AnimatePresence mode='wait'> 
        { project &&
          <>
            <motion.div 
              id='project'
              key={ 'projectContainer' + project.title }
              exit={{opacity:0, transition:{duration:0.3}}}
            > 
                {showSideBar && <PercentBar />}
                { project && <Content innerRef={ (e) => setProjectContainer(e) } ><Index/></Content>}
            </motion.div>

            {suggestions.current && <Suggestion projects={suggestions.current} display={!showSideBar} /> }
            <Signature />
            <Socials minify={true}/>
          </>
        }
        </AnimatePresence> 
    </>);

}

export default connect(null, mapDispatchToProps)(Project);


// Generates `/movies/1` and `/movies/2`
export async function getStaticPaths() {
  const projects = getProjects();

  return {
    paths: projects.map( ({title}) => ({ params: { title: title.toString() } }) ),
    fallback: false, // can also be true or 'blocking'
  }
}


// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({params}) {

  const projects = getProjects();
  const project = projects.filter( ({title}) => title.toString() == params.title.toString())[0];

  return {
    props: {project:project} // Passed to the page component as props
  }
}