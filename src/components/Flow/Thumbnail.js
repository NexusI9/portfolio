import { toProjectVariant } from './Flow.constants';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Video } from '../Folio';
import SlideOverlay from './Thumbnail.slider';
import { srcSetFromPath } from './Thumbnail.helper';
import { useDispatch } from 'react-redux';


const ProjectThumbnails = ({ project, animated = true, innerDesc = true }) => {

  const dispatch = useDispatch();
  const { thumbnail } = project;
  const router = useRouter();

  const parallaxConfig = {
    zoom: 1.12,
    scale: 45,
    minmax: 17
  }

  const [yPos, setYPos] = useState(0);
  const [overlay, setOverlay] = useState();
  const elt = useRef();

  const onProjectClick = () => {
    router.push({ pathname: '/project/' + project.title, query: {} }, undefined, { scroll: false });
    dispatch({ type: 'SET_LAST_ACTION', state: 'click' });
  }

  const overlayContent = () => {

    if (!project.overlay) { return; }

    switch (project.overlay.type) {
      case 'picture':
        return <img className='thumb' src={project.overlay?.url} />

      case 'video':
        return <Video src={project.overlay?.url} width='450' autoplay={true} />

      case 'slideshow':
        return <SlideOverlay pictures={project.overlay?.url} />

      default:
    }
  }

  useEffect(() => {

    let lastScroll = -200;

    //let tm;
    const onScroll = () => {
      if (!elt.current) { return; }
      const { top, height, bottom } = elt.current?.getBoundingClientRect();
      if (bottom > 0 && top < window.innerHeight) {
        const decal = (top - height / 2) / window.innerHeight * parallaxConfig.scale;
        //if(decal > parallaxConfig.minmax ){ decal = parallaxConfig.minmax; }
        //else if(decal < -1 * parallaxConfig.minmax ){ decal = -1 * parallaxConfig.minmax; }
        setYPos(-1 * decal);
      }
      lastScroll = window.pageYOffset;
    }

    if (animated && window.matchMedia('(hover:hover)').matches) { window.addEventListener('scroll', onScroll); }

    return () => {
      if (animated) { window.removeEventListener('scroll', onScroll) }
    };
  }, [elt, overlay]);

  return (
    <motion.article
      className={'projects round'}
      ref={elt}
      onMouseEnter={() => setOverlay(overlayContent)}
      onMouseLeave={() => setOverlay()}
      onClick={onProjectClick}
      key={'thumbnail' + project.title}
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

      {innerDesc &&
        <div className='project-desc'>
          <header>
            <h2 className={project.font ? project.font : ''}>{project.title}</h2>
            {project.desc && <p><small>{project.desc}</small></p>}
          </header>
        </div>
      }
      <img
        className='move thumb'
        {...srcSetFromPath(thumbnail)}
        alt={`Thumbnail of ${project.title} project`}
        style={{ transform: `scale3d(${parallaxConfig.zoom},${parallaxConfig.zoom},${parallaxConfig.zoom}) translate3d(0,${yPos}px,0)` }} />
    </motion.article>
  );
}

export default ProjectThumbnails;