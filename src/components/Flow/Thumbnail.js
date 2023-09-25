import { toProjectVariant } from './Flow.constants';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Video } from '../Folio';
import SlideOverlay from './Thumbnail.slider';
import { srcSetFromPath } from './Thumbnail.helper';
import { useDispatch } from 'react-redux';

  
const ProjectThumbnails = ({project, animated=true, innerDesc=true}) => {

    const dispatch = useDispatch();
    const { thumbnail } = project;
    const router = useRouter();
  
    const parallaxConfig = {
      zoom: 1.12,
      scale:45,
      minmax:17
    }
  
    const [ yPos, setYPos ] = useState(0);
    const [overlay, setOverlay] = useState();
    const elt = useRef();
  
    //video resize
    const thumbnailImg = useRef();
    const videoCtnr = useRef();

    const onProjectClick = () => {
      router.push({ pathname: '/project/'+project.title,  query:{} },  undefined, { scroll:false} );
      dispatch({type:'SET_LAST_ACTION', state:'click'});
    }
  
    const overlayContent = () => {
  
          if(!project.overlay){ return; }
  
          switch(project.overlay.type){
            case 'picture':
              return <img className='thumb' src={project.overlay?.url} />
  
            case 'video':
              return <Video innerRef={videoCtnr} id={project.overlay?.url} autoplay={true} defaultQuality='540p' controls={false} loadIco={false} playIco={false}/>
  
            case 'slideshow':
              return <SlideOverlay pictures={project.overlay?.url} />
  
            default:
          }
    }
  
    useEffect(() => {
  
      let lastScroll = -200;
      let lastVelo = 0
  
      function scaleVideo(){
  
        /*Video size === thumbnail natural size*/
  
        const thumbHeight = thumbnailImg.current.naturalHeight;
        const thumbWidth = thumbnailImg.current.naturalWidth;
        const thumbRatio = thumbWidth/thumbHeight;
  
        const ctnrHeight = elt.current.getBoundingClientRect().height;
        const ctnrWidth = elt.current.getBoundingClientRect().width;
        const ctnrRatio = ctnrWidth/ctnrHeight;
  
        const iframe = videoCtnr.current.querySelectorAll('iframe')[0];
  
        let newHeight, newWidth;
  
        if( ctnrRatio > 1 ){ //horizontal
            if(thumbRatio > 1){ //horizontal video
              newHeight = '100%';
              newWidth = `calc(${newHeight}*16/9)`;
            }
            else{ //vertical video
              newHeight = ctnrWidth * thumbHeight / thumbWidth + 'px';
            }
        }else{ //vertical
  
          if(thumbRatio > 1){ //horizontal video
            newHeight = ctnrHeight + 'px';
            newWidth = `calc(${newHeight}*16/9)`;
          }
          else{ //vertical video
            newHeight = ctnrWidth * thumbHeight / thumbWidth + 'px';
          }
        }
        iframe.style.height = newHeight;
        iframe.style.width = newWidth;
  
      }
  
      //let tm;
      const onScroll = () => {
        if(!elt.current){ return; }
        const { top, height, bottom }  = elt.current?.getBoundingClientRect();
        if( bottom > 0 && top < window.innerHeight  ){ 
          const decal = (top-height/2)/window.innerHeight * parallaxConfig.scale;
          //if(decal > parallaxConfig.minmax ){ decal = parallaxConfig.minmax; }
          //else if(decal < -1 * parallaxConfig.minmax ){ decal = -1 * parallaxConfig.minmax; }
          setYPos( -1 * decal ); 
        }
        lastScroll = window.pageYOffset;
      }
  
      if(animated && window.matchMedia('(hover:hover)').matches ){ window.addEventListener('scroll', onScroll); }
  
      if(videoCtnr.current){
        scaleVideo();
        window.addEventListener('resize', scaleVideo);
      }
  
      return () => {
        if(animated){ window.removeEventListener('scroll', onScroll) }
        if(videoCtnr){ window.removeEventListener('resize', scaleVideo); }
      };
    },[elt, overlay]);
  
    return(
          <motion.section
            className={'projects round'}
            ref={elt}
            onMouseEnter = { () => setOverlay( overlayContent ) }
            onMouseLeave = { () => setOverlay() }
            onClick={ onProjectClick }
            key={'thumbnail'+project.title}
            variants={toProjectVariant}
            >
  
            <div className='move overlay'>
                {<img 
                  className='thumb' 
                  {...srcSetFromPath(thumbnail)}
                  alt={`Thumbnail of ${project.title} project`}
                  />}
                {overlay && overlay}
            </div>
  
            { innerDesc &&
              <header className='project_desc'>
                <h2 className={project.font ? project.font : ''}>{project.title}</h2>
                { project.desc && <p><small><b>{project.desc}</b></small></p> }
            </header>
          }
           <img   
            className='move thumb' 
            {...srcSetFromPath(thumbnail)}
            alt={`Thumbnail of ${project.title} project`} 
            ref={thumbnailImg} 
            style={{ transform: `scale3d(${parallaxConfig.zoom},${parallaxConfig.zoom},${parallaxConfig.zoom}) translate3d(0,${ yPos }px,0)` }} />
          </motion.section>
    );
  }

export default ProjectThumbnails;