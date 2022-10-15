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

        //name.current.style.transform = 'translateY(-'+(scrollPos/10)+'%)';
        //quote.current.style.transform = 'translateY(-'+(scrollPos/20)+'%)';
        textArea.current.style.transform = 'translateY(-'+(scrollPos/20)+'%)';
      }
      else if( window.pageYOffset > window.innerHeight ){
        setOpacity(0);
        setDisplayVideo(false);
      }

    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);

  },[name, quote, textArea]);
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
          <Video id={629250987} autoplay={true} resize={false} playIco={false}/>
      </div>
      <motion.div id='textLetterbox'>

          <section ref={textArea}>
            <h5 ref={name}>Nassim El Khantour</h5>
            <h2 ref={quote}>Where art & code shape worlds</h2>
            <Link to='/showreel'><Button label="view the showreel"/></Link>
          </section>
          <a href="#projects" id="arrowScroll">
            <HoverSquare size='45px' name='arrowScroll'>
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
