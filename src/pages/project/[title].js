
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  getProjectFromTitle,
  getCategoryOfProject,
  getRandomProject,
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

function Project({_setHomeButton, _setSkin}){

  const router = useRouter();

  //elements
  const [project, setProject] = useState();
  const [headerTitle, setHeaderTitle]=useState('');
  const suggestions = useRef();

  //project content
  const [htmlContent, setHtmlContent ] = useState();
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
    setProject(undefined);

    //project
    const {title} = router.query;
    if(title){
      const currentProject = getProjectFromTitle(title);
      if(!currentProject){ return router.push('/'); }
      const data = {
        project: currentProject,
        color: currentProject.color,
        category:getCategoryOfProject(currentProject),
        skin: currentProject.skin
      }

      setLoadComplete(false); 
      setProject(data.project);
      setHeaderTitle(data.project.title + ' on Nassim El Khantour');
    }

  },[router.query.title]);


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

    const Index = dynamic(() => import('../../projects/'+project.folder));
    window.addEventListener('scroll', onScroll);
    _setSkin(project.skin);
    onScroll();
    setHtmlContent(<Index />);


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
        <title>{headerTitle}</title>
      </Head>

      <AnimatePresence mode='wait'> 
          { (!loadComplete && project) &&  <Loader 
              key={'LOADER' + project.title} 
              title={project.title}
              background={project.banner}
              font={project.font}
              onLoadComplete={handleLoadComplete}
              /> 
          }
        </AnimatePresence>

        <AnimatePresence mode='wait'> 
          {loadComplete && project && displayHeader &&  <Header project={project} />}  
        </AnimatePresence>

        <AnimatePresence mode='wait'> 
        {project && loadComplete &&
          <>
            <motion.div 
              id='project'
              key={ 'projectContainer' + project.title }
              exit={{opacity:0, transition:{duration:0.3}}}
            > 
                {showSideBar && <PercentBar />}
                {htmlContent && <Content innerRef={ (e) => setProjectContainer(e) } >{htmlContent}</Content>}
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
