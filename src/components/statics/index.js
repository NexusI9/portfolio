import { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {gsap} from 'gsap';
import { HoverSquare } from '../props';
import { SocialsIcons, MailAddress, HomeButton, Logo } from '../inputs';
import { act } from 'react-dom/test-utils';


const WindowIco = () => (
  <NavLink to='/map' activeclassname='active'>
    <div id="windowIco">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </NavLink>
);

export const OldMenu = ({projects}) => (
    <div id="menu">
      <div className='topArea'>
        <WindowIco />
        <ul>
          <NavLink to='/' activeclassname="active"><li><p>work</p></li></NavLink>
          <NavLink to='/resume' activeclassname="active"><li><p>resume</p></li></NavLink>
        </ul>
      </div>
    </div>
  );

export const Menu = ({homebutton=false, latestHref='', categories=true}) => {

  const [active, setActive] = useState(false);
  const [children, setChildren] = useState();
  const [labelBar, setLabelBar] = useState();
  const [labelWrapper, setLabelWrapper] = useState();
  const [animationDone, setAnimationDone] = useState(false);

  const labelNode = useCallback( node => setLabelBar(node));
  const wrapperNode = useCallback( node => setLabelWrapper(node));

  const onAnimationComplete = () => {
    setChildren(
      <motion.div id='labelContent' key='labelContent' ref={labelNode} variants={variantPanel} initial='initial' animate='animate' exit='exit'>
        {mapMenu.map(item => <motion.div variants={variantLabel}  key={item.label} onAnimationComplete={ () => setAnimationDone(true) }><NavLink onClick={ () => setActive(false) } to={item.link} activeclassname="surligneur"><HoverSquare size='14em' name={item.label}><h1>{item.label}</h1></HoverSquare></NavLink></motion.div> )}
      </motion.div>
    );
  };

  const onBarsClick = () => {
    setActive(!active);
    if(!active){
      window.gtag('event','open_sticky_menu',{event_category:'click', event_label:'Open sticky menu'});
    }else{
      window.gtag('event','close_sticky_menu',{event_category:'click', event_label:'Close on sticky menu'});
    }
  }

  useEffect(() => {

    let initMargin;
    const onScroll = () => {
      if(labelBar && labelWrapper){

        const
        barWidth = labelBar.getBoundingClientRect().width/2,
        scrollHeight = labelWrapper.getBoundingClientRect().height,
        scrollPos = labelWrapper.scrollTop,
        percent = Math.abs( ((scrollHeight - scrollPos) / scrollHeight) - 1 ),
        decal = (barWidth)*percent;

        gsap.to(labelBar, 0.6, {
          transform: `translateX(${ -1 * ((decal > barWidth) ? barWidth : decal) }px) translateY(-50%)`,
          overwrite:true
        });

      }
    }

    const onResize = () => {
      if(labelWrapper && labelBar && animationDone && window.innerWidth > 500){
        initMargin = labelBar.getBoundingClientRect().x;
        labelWrapper.removeEventListener('scroll', onScroll);
        labelWrapper.addEventListener('scroll', onScroll);
      }else{
        labelWrapper?.removeEventListener('scroll', onScroll);
      }
    }


    onResize();
    window.addEventListener('resize', onResize);

    if(!active){
      //reset on close
      setAnimationDone(false);
      setLabelBar();
      setLabelWrapper();
    }

    return () => {
          labelWrapper?.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onResize);
    }

  },[labelBar, labelWrapper, animationDone, active]);
  const variantPanel={
    initial:{},
    animate:{transition:{staggerChildren:0.2}},
    exit:{transition:{staggerChildren:0.2}}
  }

  const variantChild={
    initial:{x:'100%'},
    animate:{x:0,transition:{duration:0.3, type:'tween', ease:'easeOut', staggerChildren:0.2}},
    exit:{x:'100%'}
  }

  const variantLabel={
    initial:{y:50, opacity:0},
    animate:{y:0, opacity:1, transition:{delay:0.2, duration:0.6, type:'tween', ease:'easeOut'}},
    exit:{y:-100, opacity:0 }
  }

  const mapMenu = [
    {label:'work', link:'/'},
    {label:'resume', link:'/resume'},
    {label:'contact', link:'/contact'},
  ];

  return(
    <>
      <nav id="menu" className={active ? 'active' : null}>
        <AnimatePresence exitBeforeEnter>
        {!active && homebutton && <HomeButton key='homebuttonpresence' latestHref={latestHref} /> }
        {!active && !homebutton && <Logo/> }
        </AnimatePresence>
        <div className='topArea'>
          <div id='bars' onClick={onBarsClick} className={active ? 'active' : null}>
            <section className='default'>
              <span></span>
              <span></span>
            </section>
            <section className='close'>
              <span></span>
              <span></span>
            </section>
          </div>
        </div>
      </nav>

        <AnimatePresence exitBeforeEnter>
        {active &&
          <motion.div id='menuPanel' key='menuPanel' variants={variantPanel} initial='initial' animate='animate' exit='exit'>
            <motion.div key='panelChild_1' variants={variantChild}></motion.div>
            <motion.div key='panelChild_2' variants={variantChild} ref={wrapperNode} onAnimationComplete={onAnimationComplete}>
              <div className='cacheScroll'></div>
              <AnimatePresence exitBeforeEnter>
                {children && children}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>
    );
}


export const Filter = () => (
  <svg style={{display:'none'}} data='image/svg+xml;' xmlns='http://www.w3.org/2000/svg'>
    <filter id="b" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="0 1 0 0 0
                  0 1 0 0 0
                  0 1 1 1 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>

    <filter id="r" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="1 1 1 0 0
                  0 1 0 0 0
                  0 1 0 0 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>

    <filter id="p" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="1 0 0 0.3 0
                  1 0 0 0 0
                  1 1 0 0.3 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>

    <filter id="o" colorInterpolationFilters="sRGB" x="0" y="0" height="100%" width="100%">
          <feColorMatrix type="matrix"
          values="1 0 0 0.7 0
                  1 0 0 0.4 0
                  1 0 0 0 0
                  0 0 0 1 0">
          </feColorMatrix>
    </filter>
  </svg>
);


export const Socials = ({minify=false, direction='vertical'}) => (

    <motion.div
      id="socials"
      key='socials'
      initial={ (direction) => {
        return{
          opacity:0, 
          x: direction === 'vertical' ? 70 : 0,
          y: direction === 'vertical' ? 0 : 70
        }
      }
    }
      custom={direction}
      animate={{ opacity:1,  x:0, y:0, transition:{duration:0.4, type:'tween', ease:'easeOut'} }}
      exit={ (direction) => {
        return {
          opacity:0, 
          x: direction ==='vertical' ? 70 : 0,
          y: direction ==='vertical' ? 0 : 70,  
          transition:{duration:0.2, type:'tween', ease:'easeOut'}
        }
      }
    }
    >

      {!minify && <div><MailAddress /></div>}

      <SocialsIcons mail={minify} />
    </motion.div>

);

export const Signature = () => (
  <motion.div 
  id='signature'
  key='signature'
  initial={{opacity:0, y:70}}
  animate={{opacity:1, y:0, transition:{duration:0.4, type:'tween', ease:'easeOut'}}}
  exit={{opacity:0, y: 70,  transition:{duration:0.2, type:'tween', ease:'easeOut'}}}
  >
    <small>Website designed & developed by Nassim El Khantour</small>
    <span></span>
    <small>&copy;	Nassim El Khantour {new Date().getFullYear()}</small>
  </motion.div>
)
