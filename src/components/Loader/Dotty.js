import { useRef, useEffect } from 'react';

const Dotty = ({ introComplete }) => {

    const alpha = useRef();
    const beta = useRef();
    const delta = useRef();
    const gamma = useRef();
  
    useEffect(() => {
  
        var iteration = 0;
        const onAnimationEnd = (e) => {
          iteration++;
          return iteration === 1 && introComplete ? introComplete(true) : 0;
        }
        alpha.current.addEventListener('animationiteration', onAnimationEnd);
  
        return () => alpha.current && alpha.current.removeEventListener('animationiteration', onAnimationEnd)
  
  
    }, [alpha, beta, delta, gamma, introComplete]);
  
    return(
      <div className="looper">
        <span ref={alpha}></span>
        <span ref={beta}></span>
        <span ref={delta}></span>
        <span ref={gamma}></span>
      </div>
    );
  
  }

export default Dotty;
