
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
import { gsap } from 'gsap';


function Project({onLoad= e => e}){

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
  const [percentAnim, startPercentAnim ] = useState(false);

  const [whiteMenu, setWhiteMenu] = useState(true);

  const isScrolling = useRef(false);

  useEffect( () => {

    const onScroll = () => {

        const scrollPos = window.pageYOffset;
        //sidebar & suggestion
        if( window.pageYOffset > projectContainer.current.offsetHeight - 400 ){ setShowSideBar(false); }
        else{ setShowSideBar(true); }

        if(projectContainer.current.getBoundingClientRect().top > 0){
          setWhiteMenu(true);
        }else{
          setWhiteMenu(false);
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

    //window.scrollTo(0,0);
    const menu = document.querySelector('#menu');

    if(whiteMenu){ menu.classList.add('white'); }
    else{  menu.classList.remove('white'); }

    if(percentAnim){
      const fakepercent = {percent:0};
      gsap.to(fakepercent, {
        percent:100,
        duration: 1,
        onUpdate: () => setPercent(fakepercent.percent),
        onComplete: () => setUnlash(true)
      } );
    }


    if(project){ init(); }
    onLoad(data);


    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      menu.classList.remove('white');
    };

  },[title, project, percentAnim, whiteMenu]);

  return(
    <>
      <AnimatePresence exitBeforeEnter>
        {!unlash && <Loader key={'LOADER' + title} percent={ percent } onLoad={ () => startPercentAnim(true) } /> }
      </AnimatePresence>

      {unlash && project && whiteMenu && <motion.div
        id='project_banner'
        key={'projectBanner' + title}
        exit={{opacity:0, transition:{duration:0.3}}}
        >
        <img alt='project banner' src={process.env.PUBLIC_URL+project.thumbnail}/>
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
        <br/>
        <p>{project.date}</p>
      </motion.div> }
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
