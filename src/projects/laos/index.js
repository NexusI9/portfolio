import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Img, Gallery, Article, Body, Title, Video, Story, Space } from '../../components/article';
import './laos_sheet.scss';
import './laos_popup.scss';
import './laos_features.scss';
import './laos_options.scss';
import { gsap } from 'gsap';

import Masonry from 'react-responsive-masonry';
const FeaturesCircles = () => {

  const contentRoute = [
      {
        icon: "/assets/projects/laos/laos_logo.svg",
        title: "Hover translation",
        summary: "LAOS provides a hover-pop up translator allowing to look-up more than 110 000 mandarin words and their definitions on a simple move.",
        img: "/assets/projects/LAOS/low_hover.jpg",
      }, {
        icon: "/assets/projects/laos/lotus.png",
        title: "Personal and multitask dictionary",
        summary: "The extension also provide a personal dictionary allowing to save countless new words, common names and expressions.",
        img: "/assets/projects/LAOS/low_listselect.jpg",
      }, {
        icon: "/assets/projects/laos/yin.png",
        title: "Flashcard game !",
        summary: "For an easy entry level, flashcards are the choice to start learning new words ! Letting the mouse flowing through the cards to pair them together.",
        img: "/assets/projects/LAOS/low_flashcard.jpg",
      }, {
        icon: "/assets/projects/laos/fire.png",
        title: "Fast type mode",
        summary: "The Fast Typing mode brings a more intensive (yet efficient) learning pace.",
        img: "/assets/projects/LAOS/low_fasttype.jpg",
      }, {
        icon: "/assets/projects/laos/chakra.png",
        title: "Fill the blank",
        summary: "For the more advanced, a fill sentences mode is available using Tatoeba.org’s boundless sentences database",
        img: "/assets/projects/LAOS/low_fillblank.jpg",
      },
  ];

  const [content, setContent] = useState(contentRoute[0]);


  return(
    <>
      <section style={{flexBasis: '33%', padding: '3%', boxSizing: 'border-box'}}>
        <svg id="ft_circle" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 665.6 665.6" style={{enableBackground:'new 0 0 665.6 665.6'}} xmlSpace="preserve">

      <g id="Calque_1">
        <g id="Ellipse_6">
          <circle className="st0" cx="331.4" cy="330.9" r="329.5"/>
          <circle className="st1" cx="331.4" cy="330.9" r="327"/>
        </g>
        <g className='five tags' onMouseEnter={ () => setContent(contentRoute[4])  } >
          <g id="Ellipse_9" transform="translate(56 74)">
            <circle className="st2" cx="32.4" cy="31.9" r="33"/>
            <circle className="st1" cx="32.4" cy="31.9" r="33"/>
          </g>
          <text transform="matrix(1 0 0 1 81.4 113.9)" className="st3 st4 st5">5</text>
        </g>
      </g>
      <g id="Calque_2">
        <g id="Ellipse_13">
          <circle className="st0" cx="331.4" cy="330.9" r="256.5"/>
          <circle className="st6" cx="331.4" cy="330.9" r="254"/>
        </g>
        <g className='four tags' onMouseEnter={ () => setContent(contentRoute[3]) }>
          <g id="Ellipse_9_1_" transform="translate(440 103)">
            <circle className="st2" cx="105.4" cy="104.9" r="33"/>
            <circle className="st6" cx="105.4" cy="104.9" r="33"/>
          </g>
          <text transform="matrix(1 0 0 1 539.4 214.9)" className="st7 st4 st5">4</text>
        </g>
      </g>
      <g id="Calque_3">
        <g id="Ellipse_12">
          <circle className="st0" cx="331.4" cy="330.9" r="194.5"/>
          <circle className="st8" cx="331.4" cy="330.9" r="192"/>
        </g>

        <g className='three tags' onMouseEnter={ () => setContent(contentRoute[2]) }>
          <g id="Ellipse_9_2_" transform="translate(26 293)">
            <circle className="st2" cx="167.4" cy="166.9" r="33"/>
            <circle className="st8" cx="167.4" cy="166.9" r="33"/>
          </g>
          <text transform="matrix(1 0 0 1 187.15 467.4)" className="st9 st4 st5">3</text>
        </g>

      </g>

      <g id="Calque_4">
        <g id="Ellipse_11" transform="translate(0 17)">
          <circle className="st0" cx="332.3" cy="318" r="128.5"/>
          <circle className="st10" cx="332.3" cy="318" r="126"/>
        </g>
        <g className='two tags' onMouseEnter={ () => setContent(contentRoute[1]) }>
          <g id="Ellipse_9_3_" transform="translate(37 5)">
            <circle className="st2" cx="234.3" cy="220" r="33"/>
            <circle className="st10" cx="234.3" cy="220" r="33"/>
          </g>
          <text transform="matrix(1 0 0 1 265.3 231.5)" className="st11 st4 st5">2</text>
        </g>

      </g>
      <g id="Calque_5" className="one tags" onMouseEnter={ () => setContent(contentRoute[0]) }>
        <g id="Ellipse_9_4_" transform="translate(5 5)">
          <circle className="st2" cx="326.4" cy="325.9" r="33"/>
          <circle className="st12" cx="326.4" cy="325.9" r="33"/>
        </g>
        <text transform="matrix(1 0 0 1 324.9 338.9)" className="st13 st4 st5">1</text>
      </g>
        </svg>
      </section>
      <section style={{flexBasis: '50%', marginTop:'3%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div id="ft_circle_infobox">
            { content &&
              <>
              <AnimatePresence exitBeforeEnter>
                  <motion.section
                      key={'feature_infobox'+content.title}
                      initial={{opacity:0, y:30}}
                      animate={{opacity:1, y:0, transition:{duration:0.3}}}
                      exit={{opacity:0, transition:{duration:0.2}}}
                      className='infobox'
                  >
                    <span className='app' style={{backgroundImage:"url("+content.icon+")"}}></span>

                    <section>
                      <h4>{content.title}</h4>
                      <p className='infobox_desc'>{content.summary}</p>
                    </section>

                </motion.section>
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                <motion.img
                  key={'feature_pix'+content.title}
                  initial={{opacity:0}}
                  animate={{opacity:1, transition:{duration:0.2, delay:0.1}}}
                  exit={{opacity:0, transition:{duration:0.1}}}
                  className="window pix" src={content.img}
                />
              </AnimatePresence>
            </>
            }
        </div>
      </section>
    </>
  );
}


const KeyShapes = () => (

  <table id="keyshape">

    <tbody>
      <tr>
        <td><img src="/assets/projects/LAOS/lotus.png" /></td>
        <td><img src="/assets/projects/LAOS/yin.png" /></td>
        <td><img src="/assets/projects/LAOS/fire.png" /></td>
        <td><img src="/assets/projects/LAOS/chakra.png" /></td>
      </tr>

      <tr id="blueprint">

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/LAOS/square.svg" />
            <span className='connector'></span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle style={{fill:'#4EBAFD'}} cx="50" cy="50" r="40"/>
            </svg>
            </section>
        </td>

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/LAOS/semicircle.svg" />
            <span className='connector'></span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle style={{fill:'#FF1473'}} cx="50" cy="50" r="40"/>
            </svg>
          </section>
        </td>

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/LAOS/triangle.svg" />
            <span className='connector'></span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle style={{fill:'#FFA613'}} cx="50" cy="50" r="40"/>
            </svg>
          </section>
        </td>

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/LAOS/circle.svg" />
            <span className='connector'></span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle style={{fill:'#BF38DE'}} cx="50" cy="50" r="40"/>
            </svg>
          </section>
        </td>

      </tr>

    </tbody>

  </table>

)
const PopUp = () => (
  <div id="mock_popup">
    <section className="laos_folder">
      <section className="laos_header">
        <h1 className="laos_zhongwhen">覺得&nbsp;(觉—)</h1>
        <h1 className="laos_pinyin"><span className="laos_tone_b">jué</span> <span className="laos_tone_a">de</span></h1>
        <h1 className="laos_zhuyin"><span className="laos_tone_b">ㄐㄩㄝˊ</span> <span className="laos_tone_a">ㄉㄜ˙</span></h1>
      </section>
      <p className="laos_def">to think;&nbsp;&nbsp;to feel;&nbsp;&nbsp;</p>
    </section>

    <section className="laos_folder">
      <section className="laos_header">
        <h1 className="laos_zhongwhen">覺&nbsp;(觉)</h1>
        <h1 className="laos_pinyin"><span className="laos_tone_d">jiào</span></h1>
        <h1 className="laos_zhuyin"><span className="laos_tone_d">ㄐㄧㄠˋ</span></h1>
      </section>
      <p className="laos_def">a nap;&nbsp;&nbsp;a sleep;&nbsp;&nbsp;CL:場|场[cháng];&nbsp;&nbsp;</p></section>

      <section className="laos_folder">
        <section className="laos_header">
          <h1 className="laos_zhongwhen">覺&nbsp;(觉)</h1>
          <h1 className="laos_pinyin"><span className="laos_tone_b">jué</span></h1>
          <h1 className="laos_zhuyin"><span className="laos_tone_b">ㄐㄩㄝˊ</span></h1>
        </section>
        <p className="laos_def">to feel;&nbsp;&nbsp;to find that;&nbsp;&nbsp;thinking;&nbsp;&nbsp;awake;&nbsp;&nbsp;aware;&nbsp;&nbsp;</p>
      </section>
    </div>
);
const Charts = () => (
  <Masonry columnsCount={ window.innerWidth > window.innerHeight ? 2 : 1} gutter='20px'>
  <div className="infobox guidesheet" key='chart_1'>
    <section className="header">
      <span className='app' style={{backgroundImage: "url('/assets/projects/LAOS/laos_logo.svg')" }}></span>
      <section>
        <h4>Hover Popup</h4>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="1" style={{backgroundColor:'#ECECEC'}}>#ECECEC</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr>
        <td>Background</td>
        <td className="guide_bkg round" colSpan="1" id="guide_popup">&emsp;</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr>
        <td rowSpan="4">Typography</td>
      </tr>

      <tr className="compare">
        <td className="noto" style={{fontSize:'1.3em'}}>喜歡</td>
        <td>1.1em</td>
      </tr>

      <tr className="compare">
        <td className="noto">xǐ huan</td>
        <td>1em</td>
      </tr>

      <tr className="compare">
        <td className="noto">to like</td>
        <td>1em</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>


      <tr>
        <td rowSpan="5">Tones</td>
      </tr>

      <tr className="tone_1 compare">
        <td>tone 1</td>
        <td>#4fa2f7</td>
      </tr>

      <tr className="tone_2 compare">
        <td>tone 2</td>
        <td>#ff6a55</td>
      </tr>

      <tr className="tone_3 compare">
        <td>tone 3</td>
        <td>#70bd0e</td>
      </tr>

      <tr className="tone_4 compare">
        <td>tone 4</td>
        <td>#e54ff2</td>
      </tr>
    </tbody>
    </table>
  </div>

  <div className="infobox guidesheet" key='chart_2'>
    <section className="header">
      <span className='app' style={{backgroundImage: "url('/assets/projects/LAOS/lotus.png')" }}></span>
      <section>
        <h4>List mode</h4>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="2" style={{color:'white', backgroundColor:'#04B3FF'}}>#04B3FF</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr>
        <td>Background</td>
        <td className="guide_bkg round" colSpan="2" style={{backgroundImage:'linear-gradient(-45deg, #b3dfff 0%, #f8eaff 100%)'}}>&emsp;</td>
        <td>&emsp;</td>
        <td colSpan="2" className="guide_bkg round" style={{backgroundColor:'#222222', color:'white'}}>#222222</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr className="tspace">
        <td></td>
        <td colSpan="2"></td>
        <td></td>
        <td colSpan="2" className="darkmode begin"></td>
      </tr>

      <tr>
        <td rowSpan="4">Typography</td>
      </tr>

      <tr className="compare">
        <td className="noto" style={{fontSize:'1.3em'}}>喜歡</td>
        <td>1.1em</td>
        <td></td>
        <td className="noto white darkmode" style={{fontSize:'1.3em'}}>喜歡</td>
        <td className="white darkmode">1.1em</td>
      </tr>

      <tr className="compare">
        <td className="noto">xǐ huan</td>
        <td>1em</td>

        <td></td>

        <td className="noto white darkmode">xǐ huan</td>
        <td className="white darkmode">1em</td>
      </tr>

      <tr className="compare">
        <td className="noto">to like</td>
        <td>1em</td>

        <td></td>

        <td className="noto white darkmode">to like</td>
        <td className="white darkmode">1em</td>
      </tr>

      <tr className="tspace">
        <td></td>
        <td colSpan="2"></td>
        <td></td>
        <td colSpan="2" className="darkmode"></td>
      </tr>
      <tr className="tspace">
        <td></td>
        <td colSpan="2"></td>
        <td></td>
        <td colSpan="2" className="darkmode"></td>
      </tr>
      <tr>
        <td>Default</td>
        <td colSpan="2" className="guide_case round" style={{backgroundColor:'#FFFFFF'}}>#FFFFFF</td>
        <td></td>
        <td colSpan="2" className="darkmode"><span  className="guide_case white round" style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '100%', backgroundColor:'#888888'}}>#888888</span></td>
      </tr>

      <tr className="tspace">
        <td></td>
        <td colSpan="2"></td>
        <td></td>
        <td colSpan="2" className="darkmode"></td>
      </tr>

      <tr>
        <td>Selected</td>
        <td colSpan="2" className="guide_case round" style={{backgroundColor:'white', backgroundImage:'linear-gradient(90deg, rgba(255, 0, 115, 0.46) 0%, rgba(4, 179, 255, 0.69) 100%)' }} >&emsp;</td>
        <td></td>
        <td colSpan="2" className="darkmode"><span className="guide_case white round" style={{display: 'block', width: '100%', backgroundSize: 'contain', backgroundColor:'white', backgroundImage:'linear-gradient(90deg, rgba(255, 0, 115, 0.46) 0%, rgba(4, 179, 255, 0.69) 100%)' }}>&emsp;</span></td>
      </tr>

      <tr className="tspace">
        <td></td>
        <td colSpan="2"></td>
        <td></td>
        <td colSpan="2" className="darkmode end"></td>
      </tr>

    </tbody>
    </table>
  </div>

  <div className="infobox guidesheet" key='chart_3'>
    <section className="header">
      <span className='app' style={{backgroundImage: "url('/assets/projects/LAOS/yin.png')" }}></span>
      <section>
        <h4>Flashcards</h4>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="1" style={{backgroundColor:'#EB3467', color:'white' }}>#EB3467</td>
      </tr>

      <tr className="tspace">
        <td colSpan="2"></td>
        <td></td>
        <td colSpan="2"></td>
      </tr>

      <tr>
        <td>Background</td>
        <td className="guide_bkg round" colSpan="1" style={{backgroundImage:'linear-gradient(131deg, #61AFFF -69%, white 100%)'}}>&emsp;</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr>
        <td rowSpan="4">Typography</td>
      </tr>

      <tr className="compare">
        <td className="noto sanguin top" style={{fontSize:'1.3em'}}>喜歡</td>
        <td className="sanguin"></td>
        <td className="sanguin top">2.4em</td>
      </tr>

      <tr className="compare">
        <td className="noto sanguin bottom" style={{fontSize:'1.3em'}}>xǐ huan</td>
        <td className="sanguin"></td>
        <td className="sanguin bottom">2.4em</td>
      </tr>

      <tr className="compare">
        <td style={{fontFamily:'noto-bold', color:'black' }}>to like</td>
        <td></td>
        <td>bold / 1em</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>
      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>
      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>


      <tr className="card">
        <td>Cards</td>
        <td></td>
        <td>&emsp;</td>
        <td></td>
      </tr>

    </tbody>
    </table>
  </div>

  <div className="infobox guidesheet" key='chart_4'>
    <section className="header">
      <span className='app' style={{backgroundImage: "url('/assets/projects/LAOS/fire.png')"}}></span>
      <section>
        <h4>Fast type</h4>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" style={{backgroundColor:'#FF9600', color:'white' }}>#FF9600</td>
      </tr>

      <tr className="tspace">
        <td></td>
      </tr>

      <tr>
        <td>Background</td>
        <td className="guide_bkg round" style={{backgroundImage:'linear-gradient(0deg, #090078 0%, #8d2dfd 100%)'}}>&emsp;</td>
      </tr>

      <tr className="tspace">
        <td></td>
      </tr>

      <tr>
        <td rowSpan="4">Typography</td>
      </tr>

      <tr className="compare">
        <td className="noto" style={{fontSize:'1.3em'}}>喜歡</td>
        <td>7em</td>
      </tr>
      <tr className="compare">
        <td className="noto"  style={{fontSize:'1.3em'}}>xǐ huan</td>
        <td className="">7em</td>
      </tr>

      <tr className="compare">
        <td className="noto"> to like</td>
        <td className="">1em</td>
      </tr>

      <tr className="tspace">
        <td></td>
      </tr>

    </tbody>
    </table>
  </div>

  <div className="infobox guidesheet" key='chart_5'>
    <section className="header">
      <span className='app' style={{backgroundImage: "url('/assets/projects/LAOS/chakra.png')"}}></span>
      <section>
        <h4>Fill the blank</h4>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="1" style={{color:'white', backgroundColor:'#FF00EB'}}>#FF00EB</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr>
        <td>Background</td>
        <td className="guide_bkg round" colSpan="1" style={{backgroundImage:"linear-gradient(325deg, #ffafee 0%, #bdb1ff 100%)"}}>&emsp;</td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr className="tspace">
        <td colSpan="2"></td>
      </tr>

      <tr>
        <td rowSpan="4">Typography</td>
      </tr>

      <tr className="compare">
        <td className="noto whitebkg top" style={{fontSize:'1.5em'}}>喜歡</td>
        <td className="whitebkg"></td>
        <td className="whitebkg top">2.4em</td>
      </tr>

      <tr className="compare">
        <td className="noto whitebkg"  style={{color:'#FF00EB'}}>xǐ huan</td>
        <td className="whitebkg"></td>
        <td className="whitebkg" style={{color:'#FF00EB'}}>1em</td>
      </tr>

      <tr className="compare">
        <td className="noto whitebkg bottom">to like</td>
        <td className="whitebkg"></td>
        <td className="whitebkg bottom">1em</td>
      </tr>

      <tr className="tspace">
        <td colSpan="2"></td>
      </tr>


      <tr>
        <td>Blank areas</td>
        <td colSpan="2" className="guide_case round" style={{backgroundColor:'#FFFFFF',   boxShadow: 'inset 0px 0px 3px #444' }}>&emsp;</td>
        <td></td>
        <td></td>
      </tr>

      <tr className="tspace">
        <td colSpan="2"></td>
      </tr>

      <tr>
        <td>Word bubble</td>
        <td colSpan="2" className="guide_case round" style={{backgroundColor:'#ffffff', filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.3))' }}>&emsp;</td>
        <td></td>
        <td></td>
      </tr>

      <tr className="tspace">
        <td colSpan="2"></td>
      </tr>

    </tbody>
    </table>
  </div>
  </Masonry>
);
const Slicer = () => {


  const slicerRef = useRef();
  const barRef = useRef();
  const maskRef = useRef();

  useEffect(() => {

    const onMouseMove = (e) => {

      const width = slicerRef.current.getBoundingClientRect().width;
      const percent = (100 * (1- (e.layerX / width)))-1;

      maskRef.current.style.clipPath = "inset(0 "+percent+"% 0 0)";
      let barpercent = 100+(-1*percent);
      if(barpercent >= 100){  barpercent = 100;  }
      barRef.current.style.left = barpercent+"%";

    };

    if( slicerRef.current ){ slicerRef.current.addEventListener('mousemove', onMouseMove); }

    return () => slicerRef.current && slicerRef.current.removeEventListener('mousemove', onMouseMove);
  });


  return(
    <div id="slicer" ref={slicerRef}>
      <img src="/assets/projects/LAOS/Flashcard.jpg" />
      <img src="/assets/projects/LAOS/simplelayout.svg" ref={maskRef} />
      <span ref={barRef}></span>
    </div>
  );
}
const SideMenu = () => {

  const routeItem = [
    {
      app: '/assets/projects/LAOS/lotus.png',
      icons: ['ico_pen', 'ico_rand', 'ico_moon']
    },
    {
      app: '/assets/projects/LAOS/yin.png',
      icons: ['ico_pinyin', 'ico_rand']
    },
    {
      app: '/assets/projects/LAOS/fire.png',
      icons: ['ico_pen', 'ico_english']
    },
    {
      app: '/assets/projects/LAOS/chakra.png',
      icons: ['ico_pinyin', 'ico_english', 'ico_rand']
    }
  ];

  const Item = ({ app, icons, active=false }) => {

    const sectionRef = useRef();
    const [initialHeight, setInitialHeight] = useState(0);

    const onEnter = () => {
      if(!sectionRef.current){ return; }
      gsap.to( sectionRef.current, {height:initialHeight, duration: 0.2, ease:'easeOut'});
    }

    const onLeave = () => {
      if(!sectionRef.current){ return; }
      gsap.to( sectionRef.current, {height:0, duration: 0.2, ease:'easeIn'});
    }

    useEffect(() => {

        if(sectionRef){
          setInitialHeight(sectionRef.current.getBoundingClientRect().height);
          if(!active){ sectionRef.current.setAttribute('style', 'height:0'); }
        }


    },[sectionRef, active]);

    return (
      <>
        <img className="app" src={app} onMouseEnter={ onEnter } onMouseLeave={ onLeave } />
        <section ref={sectionRef}>
          { icons.map( icon => <span key={'ico'+icon} className={"ico "+icon}></span> )}
        </section>
      </>
    );
  }

  return(
    <ul id="laos_sidebar">
      { routeItem.map( (item,i) => <li key={item.app+Math.random()}><Item app={item.app} icons={item.icons} active={i===0} /><br /></li> ) }
    </ul>
  );
}
const LaosOptions = () => (
  <div id="laos_options">

    <div id="op_topBanner">
        <img src="/assets/projects/laos/LAOS_about.svg" />
       <section style={{fontSize: '80%', color: '#777', fontWeight: '300'}}> settings</section>
    </div>

    <label id="openLaos" className="ui">
      Open LAOS
      <input type="button"></input>
    </label>
    <br />

    <span className="sepbar"></span>

    <div className="setting_box">

    <div className="laos_setting">
      <p>Hover translation</p>
      <label className="switch">
        <input type="checkbox" name="hoverTrans" defaultChecked />
        <span className="slider ui"></span>
      </label>
    </div>

    <div className="laos_setting">
      <p>Display zhuyin</p>
      <label className="switch">
        <input type="checkbox" name="dispZhuyin" defaultChecked />
        <span className="slider ui"></span>
      </label>
    </div>

    <div className="laos_setting">
      <p>Notifications</p>
      <label className="switch">
        <input type="checkbox" name="activeNotif" />
        <span className="slider ui"></span>
      </label>
    </div>

    <div className="laos_setting ui nogap round">
      <label className="radio">
        <input defaultChecked type="radio" name="tradsimp" value="simplified" />
        <span></span>
        <p>Simplified</p>
      </label>

      <label className="radio">
        <input type="radio" name="tradsimp" value="traditional" defaultChecked />
        <span></span>
        <p>Traditional</p>
      </label>

    </div>

  </div>

    <div id="about">
      <a> about </a>
    </div>
  </div>

);

export default () => (
  <>

    <Article id='laos_intro' spaced={true} name='Showreel'>
      <Video id={605841479} placeholder={'/assets/thumbnails/laos2.jpg'}/>
    </Article>

    <Article id="laos_tpt" spaced={true} name="What's Laos">
      <Body flexDirection='horizontal' flexAlignement='centered'>
        <section style={{flexBasis:'30%'}}>
          <h2>It’s a translator,a personal dico and a trainer !</h2>
          <p>
            The app not only offers an elegant pop-up translator but also a personal dictionary and various exercises.<br /><br />
            It is through a process of gamification that LAOS acts as a user-friendly toolbox to learn mandarin.<br />
            By using LAOS, the user is invited to use various games for a smoother and more enjoyable learning experience.
          </p>
        </section>
        <section style={{flexBasis:'50%'}} className='stickToRight'>
          <img src='/assets/projects/laos/board_cut.png' alt='board'/>
        </section>
      </Body>
    </Article>


    <Article spaced={true} name='The features'>
      <Body title='The features' id='laos_features'>
          <FeaturesCircles />
      </Body>
    </Article>

    <Article spaced={true} name='Four modes'>
      <Title label='4 modes, 4 worlds' summary={<>
        Each of 4 LAOS modes have been thought as distinct universes with singular dominant color, layout and mechanics, while still being anchored in the global aesthetic.
        <br /><br />
        A dynamic throwing the user in an eye-candy and reviving environment each click, preventing the interaction to become too monotonous.
        </>}/>
      <Body flexAlignement='vertical'>
        <Gallery galleries={{snapshots:[{type:'window', folder:'/LAOS/', pictures:['clean_list', 'clean_card','clean_type','clean_blank']}]}} galleryKey='snapshots'/>
      </Body>
      <Space />
    </Article>


    <Article name='Inconography'>
      <Title label='The Style Guide' summary={<>On top of relying on a joyful and appealing color scheme,  LAOS also dig its inspiration in East-Asia iconography.<br /> Allowing the user to choose between up to four exercises modes  symbolised by distinctive key shapes and color contrasts.</>} />
      <Body flexDirection='vertical' flexAlignement='centered'>
          <KeyShapes />
      </Body>
    </Article>


  <Article spaced={true} name='Popup'>
    <Body id='laos_pop'>
      <section id="juede" className='body compress hori'>
        <div className='flexblank'></div>
        <div>
          <h1 style={{fontFamily: 'noto-reg', whiteSpace: 'nowrap', position:'relative', visibility:'hidden'}}>覺得</h1>
          <h1 style={{fontFamily: 'noto-reg', whiteSpace: 'nowrap', backgroundColor: '#b2d1ff', color:'#2f2f2f', top:0, transform: 'translate(0%, 40%)', width: 'fit-content', position:'absolute'}}>覺得</h1>
        </div>
        <div className='flexblank'></div>
      </section>
    </Body>
    <Body className='reverse'>
      <div className='flexblank' style={{flexBasis:'30%'}}></div>
      <div> <PopUp /> </div>
      <div className='compress'>
        <h2>The popup</h2>
        <p>The popup translator also uses a dedicated color scheme in order to highlight the different tones and characters contained within the words </p>
      </div>
    </Body>
  </Article>

  <Article id='laos_typo' spaced={false} name='Font'>
    <Body style={{overflow:'hidden'}}>
    <section>
      <h2>The font</h2>
      <p>Cursive writting can be tedious for beginners to make a clear distinction between the numerous and sometimes complex mandarin characters.<br />
        As a result LAOS uses a sans-serif font to make the characters easily readable for the user.</p>
        <br />
        <br />
      <p>Compatible with Simplified, Traditional, Roman and Zhuyin characters,
        Noto Sans is a flexible font ensuring a cohesion depending on the user wishes to learn either Traditional or Simplified.</p>
    </section>
      <section>
          <div id="laos_typo_switch">
            <img src="/assets/projects/laos/hai.svg" />
            <h1>嗨</h1>
          </div>
      </section>


    </Body>
    <Space />
  </Article>

  <Article id='guidesheet' spaced={true} name='Graphic chart'>
    <Body title='The gaphic chart' flexAlignement='centered'>
      <Charts />
    </Body>
  </Article>

  <Article name='Userflow' spaced={false}>
    <Body title='Userflow' style={{textAlign:'center'}}>
        <img src="/assets/projects/laos/user_flow_laos.svg"/>
    </Body>
    <Space />
  </Article>



  <Article spaced={true} name='Minimalism'>
    <Body title='When minimalism dismiss austerity' summary={<>LAOS aims for a minimalist environment emphasising on the essentials while still providing an engaging and colourful learning experience to the user.</>} flexDirection='vertical' id='laos_layout'>
      <Slicer />
      <div style={{display:'none'}}>
        <p>On one hand, the idea was to give the user a sense of comfort and ease through a classic and refined flat-design aesthetic and a simple layout without nested parametters. </p>
        <p>And on the other, to add visual dynamics through vibrants elements such as saturated gradients, neuemorphic icons or even animated background. </p>
      </div>
      <div style={{display:'none'}}>
        <p>As a result LAOS interface lies between a casual website with its known rules and layout; and a fully-themed, eccentric video-game interface with strong and unusual visual identities.</p>
      </div>
    </Body>

  </Article>



  <Article name='Navigation'>
    <Body id='laos_sidebar_main'>
      <div style={{flexBasis:'50%'}}>
        <h2>One sidebar to control it all</h2>
        <p>LAOS has been designed to be as direct as possible while providing the user the right amount of settings to offer a full personal experience that fit the user wishes and preferences.
          <br /><br />
          Its intuitive and ludic sidebar makes the user emphasise on learning words rather than spend energy figuring how the app works.</p>
      </div>
      <div style={{flexBasis:'50%', alignItems:'center', justifyContent:'center'}}>
        <div style={{height:'100%', margin:'auto', width:'20%'}}><SideMenu /></div>
      </div>
    </Body>
  </Article>


  <Article name='Settings'>
    <Body>
      <div>
        <h2>Quick settings access</h2>
        <p>As LAOS aims to be straightforward, avoiding nested parameters,
          the extension offers a quick setting access pannel.
          Allowing the user to quickly access and switch between the essentials settings
        </p>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>
          <LaosOptions />
      </div>

    </Body>
  </Article>


</>);
