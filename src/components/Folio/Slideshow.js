
import '../../sheets/slideshow.scss';
import {  AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const SlideShow = ({slides, displayBar=true, duration=5, autoplay=true }) => {

    const [ currentSlide, setCurrentSlide ] = useState(0);
    const loadBar = useRef();
    useEffect(() => {
  
        const onIte = () => currentSlide >= slides.length-1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide+1);
  
        if(autoplay && loadBar.current){
          loadBar.current.addEventListener('animationiteration', onIte);
        }
  
        return () => loadBar && loadBar.current.removeEventListener('animationiteration', onIte);
  
    },[slides, autoplay, loadBar, duration,currentSlide]);
  
    return(
      <div className='slideshow'>
        <section className='slideContent'>
          <AnimatePresence>
          { slides[currentSlide] ?
            <motion.div
              key={slides[currentSlide].legend || Math.random()}
              initial={{x:-1000}}
              animate={{x:0, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
              exit={{x:1000, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
            >
              {slides[currentSlide].content}
            </motion.div> :
            <></>
          }
          </AnimatePresence>
          {autoplay && <span className='slideBar' ref={loadBar} style={{animationDuration:duration + 's'}}></span>}
        </section>
        <section className='slideDots'>{ slides.map( (_,i) => <span className={ i===currentSlide ? 'active' : ''} onClick={ () => setCurrentSlide(i) }></span>) } </section>
        <AnimatePresence>
          <motion.section
            className='slideLegend'
            key={slides[currentSlide].legend || Math.random()}
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
            exit={{opacity:0}}
          >
            <div className='plane'></div>
            <small>{ slides[currentSlide] && slides[currentSlide].legend }</small>
          </motion.section>
        </AnimatePresence>
      </div>
    )
  }



  export default SlideShow;