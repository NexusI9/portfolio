import downArrow from '../assets/arrowScroll_1.svg';
import { Link } from 'react-router-dom';
import { Flow } from '../components/flow';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dotty } from '../components/loader';
import { ViewShowreel, Button } from '../components/inputs';
import { gsap } from 'gsap';
import { Socials } from '../components/statics';
import { Video } from '../components/article';
import { HoverSquare } from '../components/props';


const VideoBanner = (onScroll) => {

  const [opacity, setOpacity] = useState(1);

  const [bubble, setBubble] = useState();
  const [displayVideo, setDisplayVideo] = useState(true);
  const container = useRef();
  const name = useRef();
  const quote = useRef();
  const video = useRef();
  const textArea = useRef();

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

  useEffect(() => {

    const onScroll = () => {
      const scrollPos = window.pageYOffset;
      if( window.pageYOffset < window.innerHeight ){
        setOpacity(1-scrollPos / window.innerHeight);
        setDisplayVideo(true);

        name.current.style.transform = 'translateY(-'+(scrollPos/10)+'%) ';
        quote.current.style.transform = 'translateY(-'+(scrollPos/6)+'%)';
        video.current.style.transform = 'translateY(-'+(scrollPos/30)+'%) ';
      }
      else if( window.pageYOffset > window.innerHeight ){
        setOpacity(0);
        setDisplayVideo(false);


      }

    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);

  },[name, quote, video]);
  return (
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
          style={{display: displayVideo ? 'block' : 'none', pointerEvents: displayVideo ? 'auto' : 'none'}}
        >
          <div ref={video} style={{position:'relative', width:'100%', height:'100%', display:'inline-block'}}>
            <Video id={629250987} autoplay={true} resize={false} playIco={false} placeholder={'/assets/thumbnails/showreel.jpg'} />
            <Link to='/showreel'>{/*<Button label="view the showreel"/>*/}</Link>
          </div>
      </div>
      <motion.div id='textLetterbox'>

          <section ref={textArea}>
            <h2 ref={name}>Nassim El Khantour</h2>
            <h1 ref={quote}>&#187; Where art & code <br/> shape worlds<span></span></h1>
          </section>
          <a href="#projects" id="arrowScroll">
            <HoverSquare size='35px' name='arrowScroll'>
              <img src={downArrow} />
            </HoverSquare>
          </a>
      </motion.div>
    </motion.div>
  );
}



function Home({projects, onLoad = () => 0, onBelowTheFold = () => 0, onAboveTheFold = () => 0}){

  const [social, setSocial] = useState(false);
  const [aboveTheFold, setAboveTheFold] = useState(true);
  useEffect(() => {

    const onScroll = () => {
      if( window.pageYOffset > window.innerHeight ){
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
      <Flow projects={projects}/>
      <AnimatePresence exitBeforeEnter>
        {social && <Socials/>}
      </AnimatePresence>
    </>
  );

}

export default Home;
