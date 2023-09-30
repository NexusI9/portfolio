import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cta } from '@/components/Inputs';
import { Video } from '@/components/Folio';
import viewshowreel from '@/assets/viewshowreel.svg';
import { HoverSquare } from '../Props';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  _setCategory: (e) => dispatch({ type: "CHANGE_CATEGORY", category: e }),
  _setLastAction: (e) => dispatch({ type: "SET_LAST_ACTION", state: e })
});

const VideoBanner = ({ _setCategory, _setLastAction }) => {

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
    const half = viewreelRef.current.getBoundingClientRect().width / 2

    viewreelRef.current.style.top = e.clientY - vidTop - half + 'px';
    viewreelRef.current.style.left = e.clientX - vidLeft - half + 'px';

    setHoverActive(true);

  }

  const onVideoLeave = (e) => {
    setHoverActive(false);
  }

  const onViewClick = () => {
    console.log("view");
    //document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    window.gtag('event', 'click_view_work', { event_category: 'click', event_label: 'Click on view my work' });
    _setLastAction("click");
    setTimeout( () => _setCategory("Design"), 200);
  }

  const letterVar = {
    initial: { opacity: 0 },
    animate: i => ({
      opacity: i,
      transition: { duration: 0.2 }
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }


  useEffect(() => {

    const HEIGHT = window.innerHeight * 2;

    const onScroll = () => {

      const scrollPos = window.pageYOffset;

      if (window.pageYOffset < window.innerHeight) {

        const t = 1 - scrollPos / window.innerHeight;
        const half = scrollPos / (window.innerHeight);

        setDisplayVideo(true);

        if (half <= 1.5) {
          if (name.current) {
            name.current.style.transform = `translate3d(0,0%,-${(scrollPos / 7)}px)`;
          }

          if (video.current) {
            video.current.style.transform = `translate3d(0,0%,-${(scrollPos / 5)}px)`;
          }

          if (firstplan.current) {
            firstplan.current.style.opacity = t >= 0 ? t : 0;
          }
        }

      } else {
        setDisplayVideo(false);
        if (firstplan.current?.style.opacity !== 0) {
          firstplan.current.style.opacity = 0;
        }

      }

    }


    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }

  }, []);

  return (
    <motion.section
      key='motionLetterbox'
      id="letterbox"
      ref={firstplan}
      custom={displayVideo}
      initial={{ opacity: 0 }}
      animate={(displayVideo) => {
        return {
          opacity: displayVideo ? 1 : 0,
          transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' }
        };
      }}
      exit={{ opacity: 0, transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' } }}
    >
      <motion.div id='textLetterbox' ref={name} style={{ display: displayVideo ? null : 'none' }}>
        <header>
          <h2>Nassim <br /> El Khantour</h2>
          <p>Web Design&nbsp;::&nbsp;Motion Design&nbsp;::&nbsp;Development</p>
          <h1><b>The powerful blend of Art & Code, with a French Touch.</b></h1>
        </header>
        <div className='aligncta'>
          <Cta type='primary' href='/#Design' onClick={onViewClick}><small><b>explore my work</b></small></Cta>
          <Cta type='secondary' href='/resume'><small><b>see my resume</b></small></Cta>
        </div>
      </motion.div>
      <div
        id='iframewrapper'
        ref={video}
        style={{ display: displayVideo ? 'block' : 'none', pointerEvents: displayVideo ? 'auto' : 'none' }}
      >
        <div id='viewshowreel' ref={viewreelRef} className={hoverActive ? 'active' : null}>
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666663 4.02834V35.9717C0.666663 38.4075 3.34916 39.8875 5.415 38.5617L30.5133 22.59C30.9527 22.3119 31.3147 21.9272 31.5655 21.4717C31.8163 21.0162 31.9478 20.5046 31.9478 19.9846C31.9478 19.4646 31.8163 18.953 31.5655 18.4975C31.3147 18.042 30.9527 17.6573 30.5133 17.3792L5.415 1.43834C4.94993 1.13754 4.4123 0.967842 3.85883 0.947142C3.30535 0.926443 2.75655 1.05551 2.27032 1.32073C1.78408 1.58595 1.37844 1.97748 1.0962 2.45403C0.813947 2.93058 0.665551 3.47448 0.666663 4.02834Z" />
          </svg>
          <img src={viewshowreel.src} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'inline-block' }} onMouseMove={onVideoEnter} onMouseLeave={onVideoLeave} >
          <Video title='showreel' src={'/assets/short_showreel.webm'} autoplay={true} width='100%'/>
          <Link href='/showreel'></Link>
        </div>
      </div>

      <Link onClick={onViewClick} href="/#Design" id="arrowScroll" style={{ display: displayVideo ? null : 'none' }}>
        <HoverSquare name='arrow_down' size='25px'>
          <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.69998 0.899994L9.19998 7.4L15.7 0.899995L18.3 2.19999L9.19998 11.3L0.0999798 2.19999L2.69998 0.899994Z" fill="#070812" />
          </svg>
        </HoverSquare>
      </Link>


      {/*!mobile && thumbs.map( (item,i) => <ThumbTagline key={'thmbquote'+i} {...item} />)*/}

    </motion.section>
  );
}

export default connect(null, mapDispatchToProps)(VideoBanner);