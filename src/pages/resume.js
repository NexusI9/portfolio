
import {motion, AnimatePresence} from 'framer-motion';
import { Button, Multi } from '../components/inputs';
import { useState, useEffect, useRef, Suspense } from 'react';
import React from 'react';
import {gsap} from 'gsap';
import { Socials, Signature } from '../components/statics';
import { useSearchParams } from 'react-router-dom';
import {
  Pro,
  Skills,
  Edu,
  Lang,
  Techni,
  Commu,
  Events,
  Press,
  ResumeHeader
 } from '../components/resume';
import Masonry from 'react-responsive-masonry';

import work from '../assets/icons/case.svg';
import hat from '../assets/icons/hat.svg';
import web from '../assets/icons/web.svg';
import az from '../assets/icons/az.svg';
import group from '../assets/icons/group.svg';
import art from '../assets/icons/art.svg';
import press from '../assets/icons/press.svg';
import tools from '../assets/icons/tools.svg';

import dl from '../assets/icons/dl.svg';

import Portrait from '../components/portrait';

const slideUp = {
  initial:{y:100, opacity:0},
  animate:{y:0, opacity:1, transition:{duration:0.4, type:'tween', ease:'easeOut'}},
  exit:{y:-100, opacity:0,  transition:{duration:0.2, type:'tween', ease:'easeOut'}}
};

const popUp = {
  initial:{scale:0},
  animate:{scale:1, transition:{duration:0.3, type:'tween', ease:'easeOut'}},
  exit:{y:-100, opacity:0,  transition:{duration:0.3, type:'tween', ease:'easeIn'}}
}


const stagger = {
  initial:{opacity:0},
  animate:{opacity:1, transition:{staggerChildren:0.1}},
  exit:{opacity:1, transition:{staggerChildren:0.1}}
}

const opa = {
  initial:{opacity:0, y:20},
  animate: () => {
    return {
      opacity:1,
      y:0,
      transition:{duration:0.2}
    };
  },
  exit: () => {
    return {
      y:-20,
      opacity:0,
      transition:{duration:0.2}
    };
  },
}

const toProjectVariant = {
  initial:{opacity:0, y:200},
  animate:{opacity:1, y:0, transition:{ duration: 0.6 }},
  exit:{ y:'-200vh', opacity:0, transition:{ duration:0.4}}
}

const Section = ({title, ico, content}) => {

  const [ yPos, setYPos ] = useState(0);
  const elt = useRef();

  useEffect(() => {

      let lastScroll = 0;
      let lastVelo = 0

      function scrollVelocity(max = 5){

          var velocity = lastScroll - window.pageYOffset;
          if( velocity > max){ velocity = max; }
          if( velocity < -1*max){ velocity = -1*max; }
          if( velocity == -1 || velocity == 1){ velocity=0;}
          if(velocity != lastVelo){ return velocity; }

          lastVelo = velocity;
          return 0;
      }

      const onScroll = () => {

        const top = elt.current.getBoundingClientRect().top;
        const height = elt.current.getBoundingClientRect().height;
        if(top < window.innerHeight && top+height > 0){ setYPos(scrollVelocity()); }
        lastScroll = window.pageYOffset;

      }

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    },[elt]);


  return(

      <motion.div
      className='resumeSection'
      style={{transform:'translateY('+0+'%)'}}
      ref={elt}
      key={'section'+title}
      >
        <div className='sectionHeader'>
          {ico && <span className='ico'><img src={ico}/></span> }
          <p><b>{title}</b></p>
        </div>
        {content}

      </motion.div>

  );
}


function Resume({onLoad=()=>0}){

  const [language, setLanguage] = useState();
  const [dlUrl, setDlUrl] = useState();
  const [hide, setHide] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const banner = useRef();
  const portrait = useRef();
   const paragraphs = [
     <>
       &emsp; Nassim is a french author based in Montréal (Canada).<br />
       His diverse skills allows him the expand his practice through many domains,
       may it be web development, illustration, but also motion design and animation.
     </>,
     <>
      Tension between binary and infinite, fiction and reality, innate and programmed;
      Nassim’s work is a glance about the human nature, and how it has been, is, and may be influenced by the technological matter that has infected our civilization for the last decades.
     </>,
     <>
       His animator and development proficiencies allowed the artist to take part in many cultural events
       as a visual artist and video jockey for soundsystems, associations and music bands either during festivals or in clubs. <br />
       Such practices also allowed him to be part of broader experimental performances.
     </>
   ];


   const changeLang = (lang) => {

      window.gtag('event',`click_resume_language_${lang}`,{event_category:'click', event_label:`Switch resume language to ${lang}`});
     setLanguage(lang);

     switch(lang){
        case 'english':
           setSearchParams({lang:'eng'});
        break;

        case 'french':
          setSearchParams({lang:'fr'});
        break;

        case 'zhongwen':
          setSearchParams({lang:'zhg'});
        break;

        default:
          setSearchParams({lang:'eng'});
     }
   };

   const listRoute = [
     {
       id:'professional',
       name:<Multi eng='Professional experiences' fr='Expériences professionnelles' zh='工作經驗' language={language}/>,
       ico:work,
       content: <Pro language={language} />
     },{
       id:'education',
       name:<Multi eng='Education' fr='Formation' zh='教育背景' language={language}/>,
       ico:hat,
       content: <Edu language={language}/>
     },{
       id:'technicals',
       name:<Multi eng='Technicals' fr='Technique' zh='技術技能' language={language}/>,
       ico:web,
       content: <Techni />
     },{
       id:'languages',
       name:<Multi eng='Languages' fr='Langues' zh='語言能力' language={language}/>,
       ico:az,
       content: <Lang language={language}/>
     },{
       id:'community',
       name:<Multi eng='Community services' fr='Vie associative' zh='社區服務' language={language}/>,
       ico:group,
       content: <Commu language={language} />
     },{
       id:'performances',
       name:<Multi eng='Performances & exhibitions' fr='Performances & expositions' zh='表演藝術與藝術展' language={language}/>,
       ico:art,
       content: <Events language={language}/>
     },{
       id:'press',
       name:<Multi eng='Press & curated work' fr='Presse & curation' zh='報界' language={language}/>,
       ico:press,
       content: <Press language={language}/>
     },{
       id:'related skills',
       name:<Multi eng='Related skills' fr='Compétences annexes' zh='附加技能' language={language}/>,
       ico:tools,
       content: <Skills language={language}/>
     }
   ];



   useEffect( () => {

     const langParam = searchParams.get('lang');


     switch(langParam){
        case 'eng':
          document.title = 'Nassim El Khantour - Resume (english)';
          setLanguage('english');
          setDlUrl(process.env.PUBLIC_URL+'/assets/pdf/Resume-Nassim_El_Khantour.pdf');
        break;

        case 'fr':
          document.title = 'Nassim El Khantour - Resume (français)';
          setLanguage('french');
          setDlUrl(process.env.PUBLIC_URL+'/assets/pdf/CV-Nassim_El_Khantour.pdf');
        break;

        case 'zhg':
          document.title = 'Nassim El Khantour - Resume (中文)';
          setLanguage('zhongwen');
          setDlUrl(process.env.PUBLIC_URL+'/assets/pdf/簡歷-Nassim_El_Khantour.pdf');
        break;

        default:
          document.title = 'Nassim El Khantour - Resume (english)';
          setLanguage('english');
          setDlUrl(process.env.PUBLIC_URL+'/assets/pdf/Resume-Nassim_El_Khantour.pdf');
     }
     

     onLoad();

   },[searchParams]);

   useEffect( () => {
    window.scrollTo({top:0,behavior:'smooth'});
   }, []);
  

  return(
    <>

    <motion.div
      id='resumeSettings'
      key='buttonWrappResume'
      variants={stagger}
      initial='initial'
      animate='animate'
      exit='exit'
      >
      <section>
        {
          language &&
          <>
            <motion.span key='buttonEng' variants={popUp}><Button label='ENG' id='radioEng' type='radio' name='language' active={ language === 'english' } onClick={ () => changeLang('english') }/></motion.span>
            <motion.span key='buttonFr' variants={popUp}><Button label='FR' id='radioFr' type='radio' name='language' active={ language === 'french' } onClick={ () => changeLang('french') }/></motion.span>
            <motion.span key='buttonZh' variants={popUp}><Button label='中文' id='radioZhg' type='radio' name='language' active={ language === 'zhongwen' } onClick={ () => changeLang('zhongwen') }/></motion.span>
          </>
        }
      </section>

      <section>
        <motion.span key='buttonDl' variants={popUp}>
          <Button 
          label={<Multi eng='Download PDF' fr='Télécharger le PDF' zh='下載PDF' language={language} />} 
          ico={
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1875 10.375H10.8125C10.9285 10.375 11.0398 10.4211 11.1219 10.5031C11.2039 10.5852 11.25 10.6965 11.25 10.8125C11.25 10.9285 11.2039 11.0398 11.1219 11.1219C11.0398 11.2039 10.9285 11.25 10.8125 11.25H1.1875C1.07147 11.25 0.960188 11.2039 0.878141 11.1219C0.796094 11.0398 0.75 10.9285 0.75 10.8125C0.75 10.6965 0.796094 10.5852 0.878141 10.5031C0.960188 10.4211 1.07147 10.375 1.1875 10.375ZM6.4375 6.9065L9.668 3.67512L10.2866 4.29375L5.95625 8.625L1.625 4.29375L2.24363 3.67512L5.5625 6.994V0.75H6.4375V6.9065Z"/>
            </svg>
            } 
          type='button'
          name='download' 
          href={dlUrl} 
          target='_blank'
          />
        </motion.span>
      </section>

    </motion.div>


    <Portrait innerRef={e => portrait.current = e}/>

    <AnimatePresence exitBeforeEnter>
      <motion.div id='resumeWrapper'
      variants={slideUp}
      initial='initial'
      animate='animate'
      exit='exit'
      key={'resumeWrapper'+language} >
        <ResumeHeader {...language} innerRef={ e => banner.current = e}/>
        <div id="resume">
            <div>
                { listRoute.map( (item,i) => i%2 === 0 && <Section key={'section'+item.id} title={item.name} ico={item.ico} content={item.content}/> ) }
            </div>
           <div>
               { listRoute.map( (item,i) => i%2 !== 0 && <Section key={'section'+item.id} title={item.name} ico={item.ico} content={item.content}/> ) }
           </div>
        </div>
      </motion.div>
    </AnimatePresence>

    <Socials minify={true}/>
  </>
);

}

export default Resume;
