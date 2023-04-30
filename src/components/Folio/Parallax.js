import { useEffect, useRef } from 'react';

const Parallax = ({src='/', step=20, initStep=50}) => {

    const img = useRef();
    const container = useRef();
  
    useEffect(()=>{
  
      const onScroll = () => {
  
        const {top, height} = container.current.getBoundingClientRect();
        const {innerHeight} = window;
        const velocity = (top-height)/innerHeight * step;
        
        if(top < innerHeight && top > -1*height){
          img.current.style.transform = `translate3d(0,-${initStep+velocity}%,0)`;
        }
  
  
      }
  
      img.current.style.transform = 'translate3d(0,-'+initStep+'%,0)';
  
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    },[]);
  
    return(
      <div className='parallax' ref={container}>
        <img src={src} ref={img} />
      </div>
    );
  }


  export default Parallax;