import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Article, Body, Gallery, Title, Space, Pointer, Img, Video} from '@/components/Folio';
import { gsap } from 'gsap';
import Masonry from 'react-responsive-masonry';

const FeaturesCircles = () => {

  const contentRoute = [
     {
        type:'lotus',
        icon: "/assets/projects/laos/lotus.webp",
        title: "Multitask dictionary",
        summary: "The extension also provide a personal dictionary allowing to save countless new words, common names and expressions.",
        img: "/assets/projects/laos/low_listselect.webp",
      }, {
        type:'yin',
        icon: "/assets/projects/laos/yin.webp",
        title: "Flashcard game !",
        summary: "For an easy entry level, flashcards are the choice to start learning new words ! Letting the mouse flowing through the cards to pair them together.",
        img: "/assets/projects/laos/low_flashcard.webp",
      }, {
        type:'fire',
        icon: "/assets/projects/laos/fire.webp",
        title: "Fast type mode",
        summary: "The Fast Typing mode brings a more intensive (yet efficient) learning pace.",
        img: "/assets/projects/laos/low_fasttype.webp",
      }, {
        type:'chakra',
        icon: "/assets/projects/laos/chakra.webp",
        title: "Fill the blank",
        summary: "For the more advanced, a fill sentences mode is available using Tatoeba.org’s boundless sentences database",
        img: "/assets/projects/laos/low_fillblank.webp",
      },
  ];

  const [content, setContent] = useState(contentRoute[0]);


  return(
    <>
      <section id='featuresIconContainer'>
        {contentRoute.map( (item,i) => <span key={item.type+i} onMouseEnter={ () => setContent(contentRoute[i]) } data-type={item.type}></span> ) }
      </section>
      <section style={{flexBasis: '50%', marginTop:'3%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div id="ft_circle_infobox">
            { content &&
              <>
              <AnimatePresence mode='wait'>
                  <motion.section
                      key={'feature_infobox'+content.title}
                      initial={{opacity:0, y:30}}
                      animate={{opacity:1, y:0, transition:{duration:0.3}}}
                      exit={{opacity:0, transition:{duration:0.2}}}
                      className='infobox'
                  >
                    <span className='app' style={{backgroundImage:"url("+content.icon+")"}}></span>

                    <h5>{content.title}</h5>
                    <br/>
                    <small className='infobox_desc'>{content.summary}</small>


                </motion.section>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
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
        <td><img src="/assets/projects/laos/lotus.webp" /></td>
        <td><img src="/assets/projects/laos/yin.webp" /></td>
        <td><img src="/assets/projects/laos/fire.webp" /></td>
        <td><img src="/assets/projects/laos/chakra.webp" /></td>
      </tr>

      <tr id="blueprint">

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/laos/square.svg" />
            <span className='connector'></span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle style={{fill:'#4EBAFD'}} cx="50" cy="50" r="40"/>
            </svg>
            </section>
        </td>

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/laos/semicircle.svg" />
            <span className='connector'></span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle style={{fill:'#FF1473'}} cx="50" cy="50" r="40"/>
            </svg>
          </section>
        </td>

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/laos/triangle.svg" />
            <span className='connector'></span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle style={{fill:'#FFA613'}} cx="50" cy="50" r="40"/>
            </svg>
          </section>
        </td>

        <td>
          <section className='keyexplain'>
            <span className='connector'></span>
            <img src="/assets/projects/laos/circle.svg" />
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
      <span className='app' style={{backgroundImage: "url('/assets/projects/laos/laos_logo.svg')" }}></span>
      <section>
        <h5>Hover Popup</h5>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="1" style={{backgroundColor:'#ECECEC'}}><small>#ECECEC</small></td>
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
      <span className='app' style={{backgroundImage: "url('/assets/projects/laos/lotus.webp')" }}></span>
      <section>
        <h5>List mode</h5>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="2" style={{color:'white', backgroundColor:'#04B3FF'}}><small>#04B3FF</small></td>
      </tr>

      <tr className="tspace">
        <td colSpan="3"></td>
      </tr>

      <tr>
        <td>Background</td>
        <td className="guide_bkg round" colSpan="2" style={{backgroundImage:'linear-gradient(-45deg, #b3dfff 0%, #f8eaff 100%)'}}>&emsp;</td>
        <td>&emsp;</td>
        <td colSpan="2" className="guide_bkg round" style={{backgroundColor:'#222222', color:'white'}}><small>#222222</small></td>
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
        <td colSpan="2" className="guide_case round" style={{backgroundColor:'#FFFFFF'}}><small>#FFFFFF</small></td>
        <td></td>
        <td colSpan="2" className="darkmode"><span  className="guide_case white round" style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '100%', backgroundColor:'#888888'}}><small>#888888</small></span></td>
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
      <span className='app' style={{backgroundImage: "url('/assets/projects/laos/yin.webp')" }}></span>
      <section>
        <h5>Flashcards</h5>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="1" style={{backgroundColor:'#EB3467', color:'white' }}><small>#EB3467</small></td>
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


      <tr className="laos_card">
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
      <span className='app' style={{backgroundImage: "url('/assets/projects/laos/fire.webp')"}}></span>
      <section>
        <h5>Fast type</h5>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" style={{backgroundColor:'#FF9600', color:'white' }}><small>#FF9600</small></td>
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
      <span className='app' style={{backgroundImage: "url('/assets/projects/laos/chakra.webp')"}}></span>
      <section>
        <h5>Fill the blank</h5>
      </section>
    </section>
    <table>
      <tbody>
      <tr>
        <td>Primary color</td>
        <td className="guide_prim round" colSpan="1" style={{color:'white', backgroundColor:'#FF00EB'}}><small>#FF00EB</small></td>
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
    <div id="slicer" ref={slicerRef} className='round'>
      <img src="/assets/projects/laos/flashcard.webp" />
      <img src="/assets/projects/laos/simplelayout.svg" ref={maskRef} />
      <span ref={barRef}></span>
    </div>
  );
}
const SideMenu = () => {

  const routeItem = [
    {
      app: '/assets/projects/laos/lotus.webp',
      icons: ['ico_pen', 'ico_rand', 'ico_moon']
    },
    {
      app: '/assets/projects/laos/yin.webp',
      icons: ['ico_pinyin', 'ico_rand']
    },
    {
      app: '/assets/projects/laos/fire.webp',
      icons: ['ico_pen', 'ico_english']
    },
    {
      app: '/assets/projects/laos/chakra.webp',
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
      <Video id={605841479} />
    </Article>

    <Article id="laos_tpt" spaced={true} name="What's Laos">
      <Body flexDirection='horizontal' flexAlignement='centered'>
        <section style={{flexBasis:'20%'}} className='padright'>
          <h2>It’s a translator, a personal dico and a trainer !</h2>
          <p>
            The app not only offers an elegant pop-up translator but also a personal dictionary and various exercises.<br /><br />
            It is through a process of gamification that LAOS acts as a user-friendly toolbox to learn mandarin.<br />
            By using LAOS, the user is invited to use various games for a smoother and more enjoyable learning experience.
          </p>
        </section>
        <section style={{flexBasis:'50%'}} className='stickToRight'>
          <img src='/assets/projects/laos/mockups/hero.webp' alt='board'/>
        </section>
      </Body>
    </Article>


    <Article name='The features'>
    <Title label='The features' summary="LAOS offers many features and exercises to enhance the user journey to learn mandarin. Interact with the icons to discovers them!" className='half'/>
      <Body id='laos_features' >
          <FeaturesCircles />
      </Body>
    </Article>

    <Article spaced={true} name='Four modes'>
      <Title label='4 modes, 4 worlds' summary={<>
        Each of 4 LAOS modes have been thought as distinct universes with singular dominant color, layout and mechanics, while still being anchored in the global aesthetic.
        <br /><br />
        A dynamic throwing the user in an eye-candy and reviving environment each click, preventing the interaction to become too monotonous.
        </>} className='half'/>
      <Body flexAlignement='vertical'>
        <Gallery galleries={{snapshots:[{type:'window', folder:'/laos/', pictures:['clean_list', 'clean_card','clean_type','clean_blank']}]}} galleryKey='snapshots'/>
      </Body>
      <Space type='small'/>
    </Article>


    <Article name='Inconography'>
      {/*<Title label='The Style Guide' summary={<>On top of relying on a joyful and appealing color scheme,  LAOS also dig its inspiration in East-Asia iconography.<br /> Allowing the user to choose between up to four exercises modes  symbolised by distinctive key shapes and color contrasts.</>} />
      */}
      <Body flexDirection='horizontal' style={{justifyContent:'space-between'}}>
          <div style={{flexBasis:'30%'}}>
            <h2>The Style Guide</h2>
            <p>On top of relying on a joyful and appealing color scheme,  LAOS also dig its inspiration in East-Asia iconography.<br /> Allowing the user to choose between up to four exercises modes  symbolised by distinctive key shapes and color contrasts.</p>
          </div>
          <KeyShapes />
      </Body>
    </Article>


  <Article spaced={true} name='Popup'>
    <Body id='laos_pop'>
      <section id="juede" className='body hori'>
        <div className='flexblank'></div>
        <div>
          <h1 style={{fontFamily: 'noto-reg', whiteSpace: 'nowrap', position:'relative', visibility:'hidden'}}>覺得</h1>
          <h1 style={{fontFamily: 'noto-reg', whiteSpace: 'nowrap', backgroundColor: '#b2d1ff', color:'#2f2f2f', top:0, transform: 'translate(0%, 40%)', width: 'fit-content', position:'absolute'}}>覺得</h1>
        </div>
        <div className='flexblank'></div>
      </section>
    </Body>
    <Body>
      <div className='flexblank' style={{flexBasis:'30%'}}></div>
      <div> <PopUp /> </div>
      <div>
        <h2>The popup</h2>
        <p>The popup translator also uses a dedicated color scheme in order to highlight the different tones and characters contained within the words </p>
      </div>
    </Body>
  </Article>

  <Article id='laos_typo' spaced={true} name='Font'>
    <Body style={{overflow:'hidden'}}>
    <section>
      <h2>The font</h2>
      <p>Cursive writting can be tedious for beginners to make a clear distinction between the numerous and sometimes complex mandarin characters.<br />
        As a result LAOS uses a sans-serif font to make the characters easily readable for the user.</p>
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
    <Space type='small'/>
  </Article>

  <Article id='guidesheet' spaced={true} name='Graphic chart'>
    <Body flexDirection='vertical' flexAlignement='centered'>
        <h2>The guide style</h2>
        <p className='half' style={{textAlign:'center', marginBottom:'5vh'}} >LAOS' various exercises own distrinct workspace with their own visual hierarchy to optimize and enhance the learning process for the user</p>
      <Charts />
    </Body>
  </Article>

  <Article name='Userflow' spaced={false}>
    <Body flexDirection='vertical' style={{textAlign:'center'}}>
        <h2>The userflow</h2>
        <br/><br/>
        <img className='infobox' src="/assets/projects/laos/userflow.svg"/>
    </Body>
    <Space />
  </Article>


  <Article spaced={true} name='Ergonomy' id='laos_ergonomy' className='backdrop'>
  <Title 
    label='Ergonomy first!'
    summary="For the sake of user's comfort, 
    LAOS has been designed to be as direct as possible while providing the user the right amount of settings to offer a full personal experience that fit the user wishes and preferences: such as a dark mode and other easy accessible mechanics." 
    className='half'
    />

      <Img alt='laos dark theme screenshot' src='/assets/projects/laos/mockups/dark_theme.webp' />

  </Article>


  <Article name='Navigation'>
    <Body id='laos_sidebar_main' className='flex vcenter'>
      <Pointer 
      style={{flexBasis:'50%'}} 
      title='One sidebar to control it all' 
      description={<>
          Its intuitive and ludic sidebar makes the user emphasise on learning words rather than spend energy figuring how the app works.
          </>}
      side='right'
      />
      <Img alt='laos sidebar screenshot' src='/assets/projects/laos/mockups/sidebar.webp' />
    </Body>
  </Article>


  <Article spaced={true} name='Settings'>
    <Body className='reverse vcenter'>
    <Img alt='laos options screenshot' src='/assets/projects/laos/mockups/options.webp' />
    <Pointer 
      style={{flexBasis:'50%'}} 
      title='Quick settings access' 
      description='As LAOS aims to be straightforward, avoiding nested parameters,
      the extension offers a quick setting access pannel.
      Allowing the user to quickly access and switch between the essentials settings'
      />
    </Body>
    <Space type='small'/>
  </Article>


  <Article name='Mantra' id='laos_mantra' className='backdrop'>
    <Body flexAlignement='vertical' className='centered'>
    <h2 style={{textAlign:'center'}}>Take LAOS everywhere in your pocket !</h2>
    <p className='half' style={{textAlign:'center', marginBottom: '5vh'}} ><br/>Since Google Chrome on mobile doesn’t support Web Extensions yet. 
      LAOS offers a solution to any reader who’d like to translate words on a single touch with <b>Mantra</b>. 
      The app translates any articles to an easily readable transcript in which the user can choose his reading pace, as well as translating any words
      </p>
      <div className='compress'>
        <Img alt='laos options screenshots' src='/assets/projects/laos/mockups/mantra.webp' className='compress'/>
      </div>

    </Body>
  </Article>


</>);
