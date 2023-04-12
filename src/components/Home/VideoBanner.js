import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cta } from '@/components/Inputs';
import { Video } from '@/components/Folio';
import viewshowreel from '@/assets/viewshowreel.svg';


const VideoBanner = (onScroll) => {

    const [hoverActive, setHoverActive] = useState(false);
  
    const [displayVideo, setDisplayVideo] = useState();
    const name = useRef();
    const video = useRef();
    const viewreelRef = useRef();
    const firstplan = useRef();
  
    const onVideoEnter = (e) => {
  
      //window.gtag('event','hover_showreel',{event_category:'hover',event_label:'Hover showreel video'});
      const vidLeft = video.current.getBoundingClientRect().left;
      const vidTop = video.current.getBoundingClientRect().top;
      const half = viewreelRef.current.getBoundingClientRect().width/2
  
      viewreelRef.current.style.top =  e.clientY - vidTop - half + 'px';
      viewreelRef.current.style.left = e.clientX - vidLeft - half + 'px';
  
      setHoverActive(true);
  
    }
  
    const onVideoLeave = (e) => {
      setHoverActive(false);
    }
  
    const onViewClick = () => {
      document.getElementById('projects')?.scrollIntoView({behavior:'smooth'});
      window.gtag('event','click_view_work',{event_category:'click', event_label:'Click on view my work'});
    }
  
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
  
      const HEIGHT = window.innerHeight*2;
  
      const onScroll = () => {
  
        const scrollPos = window.pageYOffset;
        
        if( window.pageYOffset < window.innerHeight ){
  
          const t = 1-scrollPos / window.innerHeight;
          const half = scrollPos / (window.innerHeight);
  
          setDisplayVideo(true);
        
          if(half <= 1.5){
            if(name.current){
              name.current.style.transform = `translate3d(0,0%,-${(scrollPos/7)}px)`;
            }

            if( video.current ){
              video.current.style.transform = `translate3d(0,0%,-${(scrollPos/5)}px)`;
            }

            if(firstplan.current){
              firstplan.current.style.opacity = t >= 0 ? t : 0;
            }
          }
          
        }else{
          setDisplayVideo(false);
          if( firstplan.current.style.opacity !== 0 ){
            firstplan.current.style.opacity = 0;
          }
  
        }
  
      }
  
  
      onScroll();
  
      window.addEventListener('scroll', onScroll);
  
      return () => {
        window.removeEventListener('scroll', onScroll);
      }
  
    },[]);
  
    return (
      <motion.div
        key='motionLetterbox'
        id="letterbox"
        ref={firstplan}
        custom={displayVideo}
        initial={{opacity:0}}
        animate={ (displayVideo) => { 
          return { 
            opacity: displayVideo ? 1 : 0, 
            transition:{duration: 0.5, type:'tween', ease:'easeInOut'} 
          };
         }}
        exit={{opacity:0, transition:{duration: 0.5, type:'tween', ease:'easeInOut'}}}
        >
          <motion.div id='textLetterbox' ref={name} style={{display: displayVideo ? null : 'none'}}>
            <section>
                <h2>Nassim <br/> El Khantour</h2>
                <p>Web Design&nbsp;::&nbsp;Motion Design&nbsp;::&nbsp;Development</p>
                <h1><b>The powerful blend of art and code, with a French Touch.</b></h1>
            </section>
            <div className='aligncta'>
            <Cta type='primary' onClick={onViewClick}><small><b>explore my work</b></small></Cta>
            <Cta type='secondary' to='/resume'><small><b>see my resume</b></small></Cta>
            </div>
          </motion.div>
         <div
           id='iframewrapper'
           ref={video}
            style={{display: displayVideo ? 'block' : 'none', pointerEvents: displayVideo ? 'auto' : 'none'}}
          >     
                <div id='viewshowreel' ref={viewreelRef} className={hoverActive ? 'active' : null}>
                  <img src={viewshowreel.src} />
                </div>
                <div style={{position:'relative', width:'100%', height:'100%', display:'inline-block'}} onMouseMove={onVideoEnter} onMouseLeave={onVideoLeave} >
                  <Video id={502648300} autoplay={true} resize={false} playIco={false} defaultQuality='720p' controls={false} />
                  <Link href='/showreel'></Link>
                </div>
            </div>
  
              <a onClick={onViewClick} id="arrowScroll" style={{display: displayVideo ? null : 'none'}}>
                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.69998 0.899994L9.19998 7.4L15.7 0.899995L18.3 2.19999L9.19998 11.3L0.0999798 2.19999L2.69998 0.899994Z" fill="#070812"/>
                  </svg>
              </a>
  
        {/*!mobile && thumbs.map( (item,i) => <ThumbTagline key={'thmbquote'+i} {...item} />)*/}
  
      </motion.div>
    );
  }

  export default VideoBanner;