
import { useEffect, useState, useRef } from 'react';
import { motion, } from 'framer-motion';
import { Cta } from '@/components/Inputs';
import { Portrait } from '@/components/Portrait';
import { ResumeHeader } from '@/components/Resume';


const About = ({onEnterView = () => 0, onExitView = () => 0}) => {

  const container = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      if( container.current.getBoundingClientRect().top < window.innerHeight){ setInView(true); }
      else{ setInView(false); }
    };

    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll',onScroll);
  },[]);

  useEffect(()=>{
    if(inView){
      onEnterView();
      window.gtag('event','view_about',{event_category:'scroll', event_label:`View about section on homepage`});
    }else{
      onExitView();
    }
  },[inView, onEnterView, onExitView]);

  return(
    <motion.div 
      id='homeAbout'
      ref={container}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:-300, transition:{duration: 0.5, type:'tween', ease:'easeInOut'}}}
    >
      <div className='round'>
        <Portrait />
        <section>
          <ResumeHeader header="About me" subtitle={false} />
          <div className='aligncta'>
            <Cta href='/contact'><small><b>let's create together</b></small></Cta>
            <Cta href='/resume' type='secondary'><small><b>see my resume</b></small></Cta>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default About;