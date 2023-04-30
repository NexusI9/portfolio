import { useEffect, useRef } from 'react';

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

export default ThumbTagline;