import downArrow from '../assets/arrowScroll_1.svg';
import { Link, useLocation } from 'react-router-dom';
import { Flow } from '../components/flow';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Socials } from '../components/statics';
import { Video } from '../components/article';
import { HoverSquare } from '../components/props';

import viewshowreel from '../assets/viewshowreel.svg';

const ThumbTagline = ({src, pos, speed}) => {

    const thumb = useRef();
    useEffect(() => {

  
      const onScroll = () => thumb.current.style.transform = `translate3d(0,0, ${200-pos.z - window.pageYOffset*speed}px )`;
    
      
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);

    }, []);
    
    return(
      <div className='taglineImg round' ref={ thumb }  style={{left:pos.x+'%', top:pos.y+'%'}}>
        <img src={src} /> 
      </div>
    );

};

const VideoBanner = (onScroll) => {

  const [opacity, setOpacity] = useState(1);
  const [mobile, setMobile] = useState(0);

  const [displayVideo, setDisplayVideo] = useState(true);
  const name = useRef();
  const quote = useRef();
  const video = useRef();
  const firstplan = useRef();

  const letterVar = {
    initial: { opacity: 0 },
    animate: i => ({
      opacity:i,
      transition:{duration:0.2}
    }),
    exit:{
      opacity:0,
      transition:{duration:0.2}
    }
  }

  const thumbs = [
    { 
      src: '/assets/thumbnails/echo_overlay.jpg',
      pos: {x:80, y:100, z:90 },
      speed:0.5,
    },
    { 
      src: '/assets/thumbnails/aciddesign/comet.jpg',
      pos: { x:200, y:10, z:40},
      speed:0.8,
    },
    { 
      src: '/assets/thumbnails/aero_overlay.jpg',
      pos: { x:-10, y:20, z:50 },
      speed:0.2
    },
    { 
      src: '/assets/thumbnails/cyber_overlay.jpg',
      pos: { x:-8, y:50, z:100 },
      speed:0.3
    },
    { 
      src: '/assets/thumbnails/harvester.jpg',
      pos: { x:100, y:20, z:90 },
      speed:0.2
    },
    { 
      src: '/assets/thumbnails/acab.jpg',
      pos: { x:50, y:-20, z:100 },
      speed:0.4
    }

  ];

  useEffect(() => {

    
    const HEIGHT = window.innerHeight*2;

    document.title = 'The Art of Nassim El Khantour';

    const onResize = () => {

      if(window.innerWidth < 525){ setMobile(true); }
      else{ setMobile(false); }

    }

    const onScroll = () => {

      const scrollPos = window.pageYOffset;
      if( window.pageYOffset < HEIGHT - 500 ){

        const t = 1-scrollPos / window.innerHeight;
        const half = scrollPos / (window.innerHeight/3);
        
        setOpacity(1);
        setDisplayVideo(true);
      
        if(half <= 1.5){
          name.current.style.transform = `translate3d(0,0%,-${(scrollPos/15)}px)`;
          video.current.style.transform = `translate3d(0,0%,-${(scrollPos/3)}px)`;
          firstplan.current.style.opacity = half;
        }



        quote.current.style.transform = `translate3d(0,0%,${( (mobile ? 100 : 200)-scrollPos/3)}px)`;
        
      }else{
        setOpacity(0);
        setDisplayVideo(false);
      }

    }

    onResize();



    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    }

  },[]);
  return (
    <>
    <motion.div
      key='motionLetterbox'
      id="letterbox"
      variants={letterVar}
      initial='initial'
      custom = {opacity}
      animate='animate'
      exit='exit'
      >
       <div
         id='iframewrapper'
         ref={video}
          style={{display: displayVideo ? 'block' : 'none', pointerEvents: displayVideo ? 'auto' : 'none'}}
        >
              <img src={viewshowreel} id='viewshowreel' />
              <div style={{position:'relative', width:'100%', height:'100%', display:'inline-block'}}>
                <Video id={629250987} autoplay={true} resize={false} playIco={false} defaultQuality='540p' placeholder={'/assets/thumbnails/showreel.jpg'} />
                <Link to='/showreel'>{/*<Button label="view the showreel"/>*/}</Link>
              </div>
          </div>
          <motion.div id='textLetterbox'>

              <h2 ref={name}>Nassim <br/> El Khantour</h2>
              <a href="#projects" id="arrowScroll">
                <HoverSquare size='35px' name='arrowScroll'>
                  <img src={downArrow} />
                </HoverSquare>
              </a>
          </motion.div>

        <span id="firstplan" ref={firstplan}></span>

      {!mobile && thumbs.map( (item,i) => <ThumbTagline key={'thmbquote'+i} {...item} />)}

      <h1 id="tagline" ref={quote}>
        <span>Where art & code </span> 
        <span>shape world</span>
      </h1>
    </motion.div>
   </>
  );
}



function Home({projects, onLoad = () => 0, onBelowTheFold = () => 0, onAboveTheFold = () => 0, onCategoryChange=() => 0}){

  const [social, setSocial] = useState(false);
  const [aboveTheFold, setAboveTheFold] = useState(true);
  const {hash} = useLocation();

  useEffect( () => hash && document.querySelector(decodeURI(hash))?.scrollIntoView(),[]);

  useEffect(() => {

    const onScroll = () => {
      if( window.pageYOffset > window.innerHeight*2 ){
        setSocial(true);
         setAboveTheFold(false);
      }else{
        setSocial(false)
        setAboveTheFold(true);
      }
    }
    onLoad();
    onScroll();

    if(aboveTheFold){ onAboveTheFold(); }
    else{ onBelowTheFold(); }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);


  },[aboveTheFold]);

  return(
    <>
      <VideoBanner />
      <Flow projects={projects} onCategoryChange={onCategoryChange}/>
      <AnimatePresence exitBeforeEnter>
        {social && <Socials minify={true}/>}
      </AnimatePresence>
    </>
  );

}

export default Home;
