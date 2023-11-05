import { gsap } from 'gsap';
import { useState, useEffect, useRef } from 'react';

export default () => {

    const routeItem = [
      {
        app: '/assets/projects/laos/lotus.webp',
        icons: ['ico_pen', 'ico_rand', 'ico_moon']
      },
      {
        app: '/assets/projects/laos/yin.webp',
        icons: ['ico_pinyin', 'ico_rand']
      },
      {
        app: '/assets/projects/laos/fire.webp',
        icons: ['ico_pen', 'ico_english']
      },
      {
        app: '/assets/projects/laos/chakra.webp',
        icons: ['ico_pinyin', 'ico_english', 'ico_rand']
      }
    ];
  
    const Item = ({ app, icons, active=false }) => {
  
      const sectionRef = useRef();
      const [initialHeight, setInitialHeight] = useState(0);
  
      const onEnter = () => {
        if(!sectionRef.current){ return; }
        gsap.to( sectionRef.current, {height:initialHeight, duration: 0.2, ease:'easeOut'});
      }
  
      const onLeave = () => {
        if(!sectionRef.current){ return; }
        gsap.to( sectionRef.current, {height:0, duration: 0.2, ease:'easeIn'});
      }
  
      useEffect(() => {
  
          if(sectionRef){
            setInitialHeight(sectionRef.current.getBoundingClientRect().height);
            if(!active){ sectionRef.current.setAttribute('style', 'height:0'); }
          }
  
  
      },[sectionRef, active]);
  
      return (
        <>
          <img className="app" src={app} onMouseEnter={ onEnter } onMouseLeave={ onLeave } />
          <section ref={sectionRef}>
            { icons.map( icon => <span key={'ico'+icon} className={"ico "+icon}></span> )}
          </section>
        </>
      );
    }
  
    return(
      <ul id="laos_sidebar">
        { routeItem.map( (item,i) => <li key={item.app+Math.random()}><Item app={item.app} icons={item.icons} active={i===0} /><br /></li> ) }
      </ul>
    );
  }