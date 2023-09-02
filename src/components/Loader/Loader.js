import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useRef, useEffect, useState } from 'react';
import zhConvertor from 'zhconvertor';
import Dotty from './Dotty';
import {
  variantPlane,
  variantPlaneTwo,
  variantFrame,
  variantWrapper
} from './Loader.variants';

import { useRouter } from 'next/router';

export default ({ title, background, font, onLoadComplete = () => 0, children, req }) => {

  const router = useRouter();
  const label = useRef();
  const [startAnim, setStartAnim] = useState(false);
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [direct, setDirect] = useState(false);


  //check if user direct access
  useEffect(() => {
    console.log(router.beforePopState());
    setDirect(!document.referrer.length)

  }, [router]);

  //start gradient animation
  useEffect(() => {

    if (!startAnim) { return; }
    window.scrollTo(0, 0);
    const fakepercent = { percent: 0 };
    gsap.to(fakepercent, {
      percent: 100,
      duration: 0.4,
      onUpdate: () => setPercent(fakepercent.percent),
      onComplete: () => setComplete(true)
    });


  }, [startAnim]);

  //update on percent changes
  useEffect(() => {

    let labelFontSize = parseInt(window.getComputedStyle(label.current, null).getPropertyValue('font-size'));

    const resizeToFit = () => {
      const labelWidth = label.current.getBoundingClientRect().width;
      const labelHeight = label.current.getBoundingClientRect().height;
      if (
        (window.innerWidth > window.innerHeight &&
          labelWidth > window.innerWidth) //Desktop mode
        ||
        (window.innerWidth < window.innerHeight &&
          labelHeight > window.innerHeight) //Mobile mode
      ) {
        labelFontSize -= 150;
        label.current.style.fontSize = labelFontSize + 'px';
        resizeToFit();
      }
    }

    if (percent == 0) { resizeToFit(); }
    gsap.to(label.current, {
      'background-position-y': `${(50 - (percent * 50 / 100))}vh`,
      'background-color': percent > 80 ? `rgb(255, 255, 255, ${percent / 100})` : null,
      duration: percent > 80 ? 0.5 : 0.3,
      ease: "easeOut"
    });


  }, [percent]);



  return (
    <>
      {startAnim && children}
      <AnimatePresence mode='wait'>
        {!complete && <motion.div
          key='loaderPage'
          id="loaderPage"
          variants={variantWrapper}
          initial={!direct && 'initial'}
          animate='animate'
          exit='exit'
        >
          <motion.div key='frameLoadDiv' id="frameWrapper" variants={variantFrame} >
            <motion.div key='underframe' exit={{ scale: 3, opacity: 0, transition: { duration: 0.3 } }} id="underFrame">
              <Dotty introComplete={() => setStartAnim(true)} />
            </motion.div>
            <motion.h2 key='projectNameLabel' exit={{ scale: 0.3, opacity: 0, transition: { duration: 0.2 } }} ref={label} className={font}>{zhConvertor.t2s(title)}</motion.h2>
            <motion.small id='loaderPercent' exit={{ scale: 3, opacity: 0, transition: { duration: 0.3 } }} key='percentsmall'>{Math.ceil(percent)}%</motion.small>
          </motion.div>

          <motion.span className='backPlanes' key='backPlane1' variants={variantPlaneTwo}></motion.span>
          <motion.span className='backPlanes' key='backPlane2' variants={variantPlane}><img alt='loader background' src={background} /></motion.span>


        </motion.div>
        }
      </AnimatePresence>
    </>
  );
};