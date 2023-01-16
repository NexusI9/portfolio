
import { useParams } from 'react-router-dom';
import {
  getProjectFromTitle,
  getColorFromProject,
  getCategoryOfProject,
  getCustomColorFromProject,
  getRandomProject,
  getSkinFromProject
} from '../lib/utils';
import { Suggestion, Header, Content } from '../components/projects';
import { PercentBar } from '../components/props';
import { useEffect, useState, useRef } from 'react';
import Loader from '../components/loader';
import {motion, AnimatePresence} from 'framer-motion';
import { gsap } from 'gsap';
import zhConvertor from 'zhconvertor';


function Project({onLoad=()=> 0, onLoadFinish=()=>0}){

  const {title} = useParams();

  //elements
  const [project, setProject] = useState();
  const [suggestions, setSuggestions] = useState();

  //project content
  const [htmlContent, setHtmlContent ] = useState();

  const [projectContainer, setProjectContainer]= useState();
  const imgBanner = useRef();

  //css / transitions
  const [unlash, setUnlash] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);

  const [percent, setPercent] = useState(0);
  const [percentAnim, startPercentAnim ] = useState(false);

  const [whiteMenu, setWhiteMenu] = useState(true);
  const [displayHeader, setDisplayHeader] = useState(true);


  useEffect( () => {

    //events
    const onScroll = () => {
        
        const scrollPos = window.pageYOffset;
        //sidebar & suggestion
        if( scrollPos > projectContainer?.offsetHeight - 400 ){ setShowSideBar(false); }
        else{ setShowSideBar(true); }

        if(!projectContainer){return;}
        if(projectContainer.getBoundingClientRect().top > 0){
          setWhiteMenu(true);
          setDisplayHeader(true); 
          if(imgBanner.current){
            imgBanner.current.style.transform = `translateY(-${scrollPos/6}px)`;
          }
        }else{
          setWhiteMenu(false);
          if( !window.matchMedia('(max-width:425px)').matches ){ setDisplayHeader(false); }
        }

    }

    //core
    const init = () => {

      document.title = 'Nassim El Khantour - '+ project.title;

      window.addEventListener('scroll', onScroll);

      onScroll();

      const Index = require('../projects/'+project.folder).default;
      setHtmlContent(<Index />);
    }

    //project
    const currentProject = getProjectFromTitle(title);
    const data = {
      project: currentProject,
      color: getColorFromProject(currentProject),
      category:getCategoryOfProject(currentProject),
      skin: getSkinFromProject(currentProject),
      customColor: getCustomColorFromProject(currentProject)
    }

    setProject(data.project);
    setSuggestions( getRandomProject({ number:3, project:data.project, category:data.category }) );

    //window.scrollTo(0,0);
    const menu = document.querySelector('#menu');

    if(whiteMenu){ menu.classList.add('white'); }
    else{  menu.classList.remove('white'); }

  if(percentAnim){
      const fakepercent = {percent:0};
      gsap.to(fakepercent, {
        percent:100,
        duration: 0.7,
        onUpdate: () => setPercent(fakepercent.percent),
        onComplete: () => { setUnlash(true); onLoadFinish(); }
      } );
    }

    if(project){ init(); }
    if(projectContainer){ onScroll(); }
    onLoad(data);

    return () => {
      window.removeEventListener('scroll', onScroll);
      menu.classList.remove('white');
    };


  },[title, project, percentAnim, whiteMenu, projectContainer]);


  return(
    <>
      <AnimatePresence exitBeforeEnter>
        {!unlash && <Loader key={'LOADER' + title} percent={ percent } onLoad={ () => startPercentAnim(true) } /> }
      </AnimatePresence>

      {unlash && project && displayHeader && <motion.div
        id='project_banner'
        key={'projectBanner' + title}
        initial={{opacity:1}}
        animate={{opacity:1, transition:{duration:0.3}}}
        exit={{opacity:0, transition:{duration:0.3}}}
        >
        <img alt='project banner' ref={imgBanner} src={process.env.PUBLIC_URL+(project.banner || project.thumbnail)}/>
        <h1>{ zhConvertor.t2s( project.title) }</h1>
        <div>
          <section>
                { project.desc && 
                  <div>
                    <h5>Summary</h5>
                    <small>{project.desc || ' '}</small>
                  </div>
                }

            {project.category && <div>
                <h5>Category</h5>
                <section className='project_category' >{project.category.map( (item,i) => <small key={'cat'+item}>{ i < project.category.length-1 ? <>{item}<span className='dottySeparator'></span></> : item}</small> )}</section>
              </div>
            }
            <br/>
            <small>{project.date}</small>
          </section>
          <section>
          <h5>About the project</h5>
          <p className='project_long_desc'>{project.longdesc || ''}</p>
          </section>

        </div>
      </motion.div> }
      {
        unlash &&
        <>
          <motion.div id='project'
            key={'projectContainer' + title}
            exit={{opacity:0, transition:{duration:0.3}}}
            >
              <AnimatePresence exitBeforeEnter>{showSideBar && <PercentBar /> }</AnimatePresence>
              { htmlContent && <Content innerRef={ (e) => setProjectContainer(e) } >{htmlContent}</Content> }
          </motion.div>
          <Suggestion projects={suggestions} display={!showSideBar} />
        </>
      }
    </>
  );

}

export default Project;
