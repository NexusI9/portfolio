
import { useParams } from 'react-router-dom';
import {
  getProjectFromTitle,
  getColorFromProject,
  getCategoryOfProject,
  getCustomColorFromProject,
  getRandomProject,
  getSkinFromProject,
  isMobile
} from '../lib/utils';
import { Suggestion, Header, Content, Previews } from '../components/projects';
import { PercentBar } from '../components/props';
import { useEffect, useState, useRef } from 'react';
import Loader from '../components/loader';
import {motion, AnimatePresence} from 'framer-motion';
import '../sheets/projects_sheet.scss';


function Project({onLoad}){

  const {title} = useParams();

  //elements
  const [project, setProject] = useState();
  const [category, setCategory] = useState();
  const [suggestions, setSuggestions] = useState();

  //project content
  const [htmlContent, setHtmlContent ] = useState();
  const [sidePanel, setSidePanel ] = useState(true);

  const [canvasLoaded, setCanvasLoaded] = useState();
  const [ canvas, setCanvas ] = useState();
  const [ activeCanvas, setActiveCanvas ] = useState();

  const projectContainer = useRef();

  //css / transitions
  const [unlash, setUnlash] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);

  const [percent, setPercent] = useState(0);

  const isScrolling = useRef(false);

  useEffect( () => {

    //window.scrollTo(0,0);

    const onScroll = () => {

        const scrollPos = window.pageYOffset;
        //sidebar & suggestion
        if( window.pageYOffset > projectContainer.current.offsetHeight - 400 ){ setShowSideBar(false); }
        else{ setShowSideBar(true); }

        //current div
        if(canvas && !isScrolling.current){
          //console.log(activeCanvas);
          canvas.forEach( cnv => {
            if(
              (scrollPos + 200 > cnv.offsetTop) &&
              (scrollPos < cnv.offsetTop + cnv.height) ){
                setActiveCanvas(cnv);
              }
          });
        }

    }
    const onResize = () => {
      if(window.innerWidth >= 825){
        setSidePanel(true);
      }
      else{
        setSidePanel(false);
        setCanvasLoaded(true);
      }
    }

    const init = () => {
      window.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onResize);

      onResize();

      const Index = require('../projects/'+project.folder).default;
      setHtmlContent(<Index />);
    }

    const currentProject = getProjectFromTitle(title);
    const data = {
      project: currentProject,
      color: getColorFromProject(currentProject),
      category:getCategoryOfProject(currentProject),
      skin: getSkinFromProject(currentProject),
      customColor: getCustomColorFromProject(currentProject)
    }

    setProject(data.project);
    setCategory(data.category);
    setSuggestions( getRandomProject({ number:3, project:data.project, category:data.category }) );


    if(unlash){ init(); }
    if(onLoad){ onLoad(data); }


    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };

  },[unlash, title, canvas, activeCanvas, percent]);

  return(
    <>
      <AnimatePresence exitBeforeEnter>
        { (!canvasLoaded || !htmlContent) && <Loader key={'LOADER' + title} onLoad={ (e) => setUnlash(e) } percent={ percent } /> }
      </AnimatePresence>
      {
        unlash &&
        <>
          <motion.div id='project'
            key={'projectContainer' + title}
            exit={{opacity:0, transition:{duration:0.3}}}
            >
              <AnimatePresence exitBeforeEnter>{showSideBar && <PercentBar /> }</AnimatePresence> 
              { htmlContent && <Content innerRef={projectContainer} >{htmlContent}</Content> }
              { htmlContent && sidePanel &&
                <div id='sidePanel' style={{opacity: showSideBar ? 1 : 0, pointerEvents: showSideBar ? 'auto' : 'none' }}>
                  <Header project={project}/>
                  <Previews wrapperRef={projectContainer} onLoad={ e => { setCanvasLoaded(true); setCanvas(e); } } active={activeCanvas} project={project} onScroll={ e => isScrolling.current = e } onProgress={ e => setPercent(e.percent) }/>
              </div>
              }
          </motion.div>
          <Suggestion projects={suggestions} display={!showSideBar} />
        </>
      }
    </>
  );

}

export default Project;
