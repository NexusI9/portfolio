
import {motion, AnimatePresence} from 'framer-motion';
import { Button, Multi, Cta } from '@/components/Inputs';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { Socials } from '@/components/Statics';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Pro,
  Skills,
  Edu,
  Lang,
  Techni,
  Commu,
  Events,
  Press,
  Section,
  ResumeHeader
 } from '@/components/Resume';

import work from '@/assets/icons/case.svg';
import hat from '@/assets/icons/hat.svg';
import web from '@/assets/icons/web.svg';
import az from '@/assets/icons/az.svg';
import group from '@/assets/icons/group.svg';
import art from '@/assets/icons/art.svg';
import press from '@/assets/icons/press.svg';
import tools from '@/assets/icons/tools.svg';

import { Portrait } from '@/components/Portrait';

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



function Resume(){

  const [language, setLanguage] = useState();
  const [dlUrl, setDlUrl] = useState();
  const [hide, setHide] = useState(false);
  const [headTitle, setHeadtitle] = useState('Nassim El Khantour - Resume (english)');

  const router = useRouter();

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

        case 'french':
          router.push({
            pathname:router.pathname,
            query:{lang:'fr'}
           });
        break;

        case 'zhongwen':
          router.push({
            pathname:router.pathname,
            query:{lang:'zhg'}
           });
        break;

        case 'english':

        default:
          router.push({
            pathname:router.pathname,
            query:{lang:'eng'}
          });
     }
   };

   const listRoute = [
     {
       id:'professional',
       name:<Multi eng='Professional experiences' fr='Expériences professionn&shy;elles' zh='工作經驗' language={language}/>,
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
       content: <Techni language={language}/>
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

     const langParam = router.query.lang;


     switch(langParam){
        case 'eng':
          setHeadtitle('Nassim El Khantour - Resume (english)');
          setLanguage('english');
          setDlUrl('/assets/pdf/Resume-Nassim_El_Khantour.pdf');
        break;

        case 'fr':
          setHeadtitle('Nassim El Khantour - Resume (français)');
          setLanguage('french');
          setDlUrl('/assets/pdf/CV-Nassim_El_Khantour.pdf');
        break;

        case 'zhg':
          setHeadtitle('Nassim El Khantour - Resume (中文)');
          setLanguage('zhongwen');
          setDlUrl('/assets/pdf/簡歷-Nassim_El_Khantour.pdf');
        break;

        default:
          setHeadtitle('Nassim El Khantour - Resume (english)');
          setLanguage('english');
          setDlUrl('/assets/pdf/Resume-Nassim_El_Khantour.pdf');
     }

   },[router]);

   useEffect( () => {
    window.scrollTo({top:0,behavior:'smooth'});
   }, []);
  

  return(
    <>  
    <Head>
      <title>{headTitle}</title>
    </Head>
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
            <motion.small key='langLabel' variants={popUp} className='discrete light'>Language: </motion.small>
            <motion.span key='buttonEng' variants={popUp}><Button label='ENG' id='radioEng' type='radio' name='language' active={ language === 'english' } onClick={ () => changeLang('english') }/></motion.span>
            <motion.span key='buttonFr' variants={popUp}><Button label='FR' id='radioFr' type='radio' name='language' active={ language === 'french' } onClick={ () => changeLang('french') }/></motion.span>
            <motion.span key='buttonZh' variants={popUp}><Button label='中文' id='radioZhg' type='radio' name='language' active={ language === 'zhongwen' } onClick={ () => changeLang('zhongwen') }/></motion.span>
          </>
          }
      </section>

      <section>

        <motion.span key='letsWerk' variants={popUp} id="dlresume">
            <Cta to='/contact' type='primary'>
              <small>Let's work together</small>
            </Cta> 
        </motion.span>
        <motion.span key='buttonDl' variants={popUp} id="dlresume">
          <Cta href={dlUrl} type='secondary'>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.1875 10.375H10.8125C10.9285 10.375 11.0398 10.4211 11.1219 10.5031C11.2039 10.5852 11.25 10.6965 11.25 10.8125C11.25 10.9285 11.2039 11.0398 11.1219 11.1219C11.0398 11.2039 10.9285 11.25 10.8125 11.25H1.1875C1.07147 11.25 0.960188 11.2039 0.878141 11.1219C0.796094 11.0398 0.75 10.9285 0.75 10.8125C0.75 10.6965 0.796094 10.5852 0.878141 10.5031C0.960188 10.4211 1.07147 10.375 1.1875 10.375ZM6.4375 6.9065L9.668 3.67512L10.2866 4.29375L5.95625 8.625L1.625 4.29375L2.24363 3.67512L5.5625 6.994V0.75H6.4375V6.9065Z"/>
            </svg>
            <small>
              <Multi eng='Download PDF' fr='Télécharger le PDF' zh='下載PDF' language={language} />
            </small>
          </Cta> 
        </motion.span>

      </section>

    </motion.div>


    <Portrait innerRef={e => portrait.current = e}/>

    <AnimatePresence mode='wait'>
      <motion.div id='resumeWrapper'
      variants={slideUp}
      initial='initial'
      animate='animate'
      exit='exit'
      key={'resumeWrapper'+language} >
        <ResumeHeader language={language} innerRef={ e => banner.current = e}/>
        <div id="resume">
            { listRoute.map( ({id, name, ico, content}) => <Section key={'section'+id} title={name} ico={ico} content={content}/> ) }
        </div>
      </motion.div>
    </AnimatePresence>

    <Socials minify={true}/>
  </>
);

}

export default Resume;
