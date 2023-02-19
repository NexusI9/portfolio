export const variant = {
    initial:{opacity:0},
    animate:{opacity:1, transition:{ staggerChildren:0.06 } },
    exit: {opacity:0, transition:{ delay:0.5, staggerChildren:0.06 } }
  }
  
  
 export const toProjectVariant = {
    initial:{opacity:0, y:200},
    animate:{opacity:1, y:0, transition:{ duration: 0.3 }},
    exit:{ y:'-200vh', opacity:0, transition:{ duration:0.4}}
  }
  
  
 export const toMapTransition = {
    initial:{opacity:1, scale:1},
    animate:{opacity:1, scale:1, transition:{ duration: 0.6 }},
    exit:{ scale:0, opacity:0, transition:{ duration:0.2, type:'tween', ease:"backIn"}}
  }