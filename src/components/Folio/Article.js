import { useEffect, useRef } from 'react';

export default function Article({children, name, spaced, id, className, style}){

    const article = useRef(); 
  
    useEffect(() => { 
  
      const appear = () => {
       article.current.classList.add('appear');
        window.removeEventListener('scroll', onScroll);
      }
  
      const onTransitionend = (e) => {
        if(e.propertyName === 'transform'){
          //reset transform to prevent bug on fullview gallery opening
          article.current.style.transform = 'none';
          article.current.removeEventListener('transitionend', onTransitionend);
        }
      }
  
      const onScroll = () => {
        if( article.current?.getBoundingClientRect().top < window.innerHeight - window.innerHeight/4 ){ appear(); }
      }
  
  
  
      window.addEventListener('scroll', onScroll);
  
      //if first article then appear
      article.current?.addEventListener('transitionend', onTransitionend);
      if( article.current.parentNode.firstElementChild == article.current ){ appear(); }
      onScroll();
  
      return () => {
        article.current?.removeEventListener('transitionend', onTransitionend);
        window.removeEventListener('scroll', onScroll);
      }
  
    },[]);
  
    return(
      <section 
        id={id ? id : ''} 
        ref={article}
        style={ style ? style : {} } 
        className={"article " + (spaced ? 'spaced ' : ' ') + (className ? className : '')} 
        data-board-name={name || ''}>
          {children}
      </section> 
    );
  }