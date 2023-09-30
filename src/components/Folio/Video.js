import { useState, useEffect, useRef } from 'react';
import { Dotty } from '../Loader';
import play from '@/assets/play.svg';

const Video = ({
  id,
  src,
  width = '100%',
  title = '',
  autoplay = false,
  style = {},
  defaultQuality,
  placeholder,
  loadIco,
  playIco,
  innerRef,
  pending = false,
  controls = true,
  forceUnmute = false,
  forceStop = false
}) => {

  const [hideVid, setHideVid] = useState(pending);
  const vimeoContainer = useRef();

  const Placeholder = ({ placeholder = null, playIco = true, loadIco = false, style = {} }) => (
    <div className='iframePlaceholder' style={style}>
      {placeholder ?
        <img className='picPlaceholder' src={placeholder} />
        :
        <div className='loadIco'> <Dotty /> </div>}
      {playIco && <img className='playIco round' src={play.src} />}
    </div>
  );


  return (
    <div className='vimeo round' onClick={() => setHideVid(false)} ref={innerRef || vimeoContainer}>
      {id &&
        <>
          <Placeholder placeholder={placeholder} playIcon={!autoplay} style={style} loadIco={loadIco} playIco={playIco} />
          {!hideVid && <iframe
            title={title}
            src={`https://player.vimeo.com/video/${id}?h=583d0b23c9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=${(autoplay || pending) ? 1 : 0}&loop=${(autoplay && !forceStop) ? 1 : 0}&title=0&byline=0&portrait=1&muted=${forceUnmute || pending || (!forceUnmute && !autoplay) ? 0 : 1}&autopause=0&controls=${(controls ? '1' : '0')}${defaultQuality ? ('&amp;quality=' + defaultQuality) : ''}`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={style}></iframe>
          }
        </>
      }
      {src &&
        <video width={width || '100%'} autoPlay={autoplay} muted={true} loop={true}>
          <source src={src} type='video/webm' />
        </video>}
    </div>
  );
}

export default Video;