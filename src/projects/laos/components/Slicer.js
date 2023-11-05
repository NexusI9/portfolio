import { useEffect, useRef } from "react";
export default () => {


    const slicerRef = useRef();
    const barRef = useRef();
    const maskRef = useRef();
  
    useEffect(() => {
  
      const onMouseMove = (e) => {
  
        const width = slicerRef.current.getBoundingClientRect().width;
        const percent = (100 * (1- (e.layerX / width)))-1;
  
        maskRef.current.style.clipPath = "inset(0 "+percent+"% 0 0)";
        let barpercent = 100+(-1*percent);
        if(barpercent >= 100){  barpercent = 100;  }
        barRef.current.style.left = barpercent+"%";
  
      };
  
      if( slicerRef.current ){ slicerRef.current.addEventListener('mousemove', onMouseMove); }
  
      return () => slicerRef.current && slicerRef.current.removeEventListener('mousemove', onMouseMove);
    });
  
  
    return(
      <div id="slicer" ref={slicerRef} className='round'>
        <img src="/assets/projects/laos/flashcard.webp" />
        <img src="/assets/projects/laos/simplelayout.svg" ref={maskRef} />
        <span ref={barRef}></span>
      </div>
    );
  }