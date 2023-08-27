import { useEffect, useState, useCallback } from 'react';
import Link  from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {gsap} from 'gsap';
import { HoverSquare, ScrollDownIcon } from '../Props';
import { HomeButton, Logo } from '../Inputs';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

const mapStateToProps = (state) => ({
  _background: state.menu.background,
  _homebutton: state.menu.homebutton,
  _latestHref: state.flow.category
});


const Menu = ({_background=true, _homebutton=false, _latestHref=''}) => {

  const router = useRouter(); 

  const [active, setActive] = useState(false);
  const [children, setChildren] = useState();
  const [labelBar, setLabelBar] = useState();
  const [labelWrapper, setLabelWrapper] = useState();
  const [animationDone, setAnimationDone] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const labelNode = useCallback( node => setLabelBar(node));
  const wrapperNode = useCallback( node => setLabelWrapper(node));

  const onAnimationComplete = () => {
    setChildren(
      <motion.div id='labelContent' key='labelContent' ref={labelNode} variants={variantPanel} initial='initial' animate='animate' exit='exit'>
        {mapMenu.map(({label, link}) => 
            <motion.div 
                variants={variantLabel}  
                key={label} 
                onAnimationComplete={ () => setAnimationDone(true) }>
                  <Link onClick={ () => setActive(false) } href={link} className={router.pathname === link ? 'active' : ''}>
                    <HoverSquare size='14em' name={label}>
                      <h1>{label}</h1>
                    </HoverSquare>
                  </Link>
            </motion.div> 
        )}
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

      setScrolled(true);
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
      <nav id="menu" className={(active ? 'active' : '') +' '+ (_background ? '' : 'transparent') }>
        <div>
          <AnimatePresence mode='wait'>
            {!active && _homebutton && <HomeButton key='_homebuttonpresence' latestHref={_latestHref} /> }
            {!active && !_homebutton && <Logo location='Montreal, Canada (soon 臺北市)'/> }
          </AnimatePresence>
          <div className='topArea'>
            <div id='bars' onClick={onBarsClick} className={active ? 'active' : ''}>
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
        </div>
      </nav>

        <AnimatePresence mode='wait'>
        {active &&
          <motion.div id='menuPanel' key='menuPanel' variants={variantPanel} initial='initial' animate='animate' exit='exit'>
            <motion.div key='panelChild_1' variants={variantChild}></motion.div>
            <motion.div key='panelChild_2' variants={variantChild} ref={wrapperNode} onAnimationComplete={onAnimationComplete}>
              <div className='cacheScroll'></div>
              <AnimatePresence mode='wait'>
                {children && children}
              </AnimatePresence>
            </motion.div>
            <AnimatePresence>
              {!scrolled && window.matchMedia("(min-width: 825px)").matches && <ScrollDownIcon/>}
            </AnimatePresence>

          </motion.div>
        }
      </AnimatePresence>
    </>
    );
}

export default connect(mapStateToProps)(Menu);