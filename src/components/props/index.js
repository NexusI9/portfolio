import {motion, AnimatePresence} from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import sphere_purple_1 from '../../assets/spheres/sphere_purple_1.png';

export const HoverSquare = ({children, size='100%', name='', top, left}) => {

  const [active, setActive] = useState(false);

  const variantContainer = {
    initial:{},
    animate:{transition:{duration:0.4, staggerChildren:0.1}},
    exit:{transition:{duration:0.4, staggerChildren:0.1}}
  };
  const variantChild = {
    initial:{scale:0},
    animate:{scale:1, opacity:1},
    exit:{
      scale:3,
      opacity:0,
      transition:{
        opacity: {duration:0.1},
        scale:{duration:0.4}
      }
    }
  };



  useEffect(() => {

    const onMouseMove = (e) => {
    }

    if(active){ window.addEventListener('mousemove', onMouseMove); }
    else{ window.removeEventListener('mousemove', onMouseMove); }

    return () => window.removeEventListener('mousemove', onMouseMove);
  },[active]);


  return(
    <div style={{position:'relative'}} onMouseEnter={ () => setActive(true) } onMouseLeave={ () => setActive(false) }>
      <AnimatePresence exitBeforeEnter>
        {
          active &&
          <motion.div
            className='hoverSquare'
            key={'hoverSquare'+name}
            variants={variantContainer}
            initial='initial'
            animate='animate'
            exit='exit'
            style={{top:top, left:left}}
          >
            <motion.span variants={variantChild} key={'hoverSpan1'+name} style={{width:size, height:size}}></motion.span>
            <motion.span variants={variantChild} key={'hoverSpan2'+name} style={{width:size, height:size}}></motion.span>

          </motion.div>
        }
      </AnimatePresence>
      <div className='children'>
        {children}
      </div>
    </div>
  );

}

export const PercentBar = () => {

  const [width, setWidth] = useState(0);

  useEffect( () => {

    const onScroll = () => {

      var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
      const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      setWidth(percent);

    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  return(
    <motion.span
    key='percentBar'
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.3}}}
    exit={{opacity:0, transition:{duration:0.3}}}
    id='percentBar'
    style={{width:width+'%'}}>
    </motion.span>
  );

}


export const Spheros = ({state='default'}) => {

  const setStyleUnit = ({width, left, top}) => ({
    width:`${width}vw`, 
    top:`${top}%`, 
    left: `${left}%`
  });

  const spheres = useRef([
    {
      name: 'blue_1', 
      ref: null, 
      src:sphere_purple_1, 
      style:{ 
        default:  { width:25, left:-10, top:60 },
        spread:   { width:25, left:-10, top:100 },
        about:    { width:25, left:-20, top:110 }
      }
    },
    {
      name: 'pink_1', 
      ref: null, 
      src:sphere_purple_1, 
      style:{ 
        default:  { width:25, left:70, top:-10 },
        spread:   { width:25, left:90, top:-20 },
        about:    { width:25, left:90, top: 30 },
      }
    },
    {
      name: 'purple_1', 
      ref: null, 
      src:sphere_purple_1, 
      style:{ 
        default:  { width:15, left:24, top:10 },
        spread:   { width:15, left:12, top:10 },
        about:    { width:15, left: 10, top:60}
      },
    },
    {
      name: 'purple_2', 
      ref: null, 
      src:sphere_purple_1,
      style:{ 
        default:  { width:15, left:60, top:70 },
        spread:   { width:15, left:70, top:90 },
        about:    { width:15, left:80, top:80}
      }},
  ]);
  const setInit = ({size, align}) => ({width:size*0.3 ,left:50-size*0.3/2, top:25-size*0.3/2 });
  /*const new_spheres = useRef([
    {
      name: 'pink_1', 
      ref: null, 
      src:sphere_purple_1, 
      style:{ 
        default:  {width: 35, left:90},
        spread:   { width:35, left:90, top:-20 },
        about:    { width:35, left:90, top: 30 },
      }
    },
    {
      name: 'blue_1', 
      ref: null, 
      src:sphere_purple_1, 
      style:{ 
        default:  setInit({size:25, align:'left'}),
        spread:   { width:25, left:-10, top:100 },
        about:    { width:25, left:-20, top:110 }
      }
    },
    {
      name: 'purple_1', 
      ref: null, 
      src:sphere_purple_1, 
      style:{ 
        default:  setInit({size: 15, align:'right'}),
        spread:   { width:15, left:12, top:10 },
        about:    { width:15, left: 10, top:60}
      },
    },
    {
      name: 'purple_2', 
      ref: null, 
      src:sphere_purple_1,
      style:{ 
        default:  setInit({size: 15, align:'right'}),
        spread:   { width:15, left:70, top:90 },
        about:    { width:15, left:80, top:80}
      }},

  ]);*/

  /* 
      {
      name: 'organic_2', 
      ref: null, 
      src:sphere_purple_1, 
      style:{ 
        default:  { width:35, left:25, top:70 },
        spread:   { width:35, left:25, top:100 },
        about:    { width:35, left:42, top: 120 }
      }
    },
    {name: 'blue_2', ref: null, src:sphere_blue_2, size:30, x:50, y:-20},
    {name: 'organic_1', ref: null, src:organic_1, size:25, x:30, y:50},
    {name: 'ray_1', ref: null, src:ray_1, size:25, x:25, y:50},
    {name: 'ray_2', ref: null, src:ray_1, size:15, x:70, y:5}
  */

  useEffect(() => {

    const onScroll = () => {

      const pos = window.pageYOffset / document.body.scrollHeight;
      
      spheres.current.forEach( item => {
        if(!item.ref){ return; }
        item.ref.style.transform = `translate3d(0, ${-1 * pos * (500-item.style.default.width) }px, 0)`;
      });
    }

    const refs = spheres.current.map( item => item.ref );

    const growSphere = () => new Promise( (resolve) => {
      refs.forEach( (item, index) => setTimeout( () => {
        item.classList.add('grow') 
        if(index === refs.length-1){ resolve('done'); }
      }, 100*index) ); 
    });

    onScroll();
    
    growSphere().then( () => {
        window.addEventListener('scroll', onScroll);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    }

  });

  useEffect(() => {

    spheres.current.forEach( item => {
      const { width, top, left } = setStyleUnit(item.style[state]);
      item.style.width = width;
      item.style.left = left;
      item.style.top = top;
    });

  },[state]);


  return(
    <motion.div 
    id='spheros'
    key='spheros'
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration: 0.3}}}
    exit={{opacity:0, transition:{duration:0.3}}}
    >
       { spheres.current.map( (s,index) => 
            <img 
              key={s.name} 
              alt={s.name} 
              src={s.src} 
              ref={e => spheres.current[index].ref = e } 
              style={ setStyleUnit(s.style[state]) }
            /> 
          )}
    </motion.div>
  );
}