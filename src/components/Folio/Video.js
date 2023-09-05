import { useState, useEffect, useRef } from 'react';
import { Dotty } from '../Loader';
import play from '../../assets/play.svg';

const Video = ({id, title='', onLoad, autoplay=false, style={}, defaultQuality, placeholder, loadIco, playIco, innerRef, resize=true, pending=false, controls=true, forceUnmute=false, forceStop=false }) => {

    const [thumbnail, setThumbnail] = useState();
    const [ height, setHeight ] = useState({});
    const [hideVid, setHideVid] = useState(pending);
    const vimeoContainer = useRef();
  
    const Placeholder = ({placeholder=null, playIco=true, loadIco=false, style={}}) => (
      <div className='iframePlaceholder' style={style}>
        { placeholder ? 
          <img className='picPlaceholder' src={placeholder} /> 
          :
          <div className='loadIco'> <Dotty /> </div> }
        { playIco && <img className='playIco round' src={play.src}/>}
      </div>
    );
  
    useEffect(() => {
  
      //getVimeoThumbnail("https://player.vimeo.com/video/"+id).then( thumbnails => setThumbnail(thumbnails[2]) );
  
      const onResize = () => {
        setHeight({height:vimeoContainer.current?.getBoundingClientRect().width * 9 / 16+'px'});
      };
  
  
      if(vimeoContainer && resize){
        onResize();
        window.addEventListener('resize', onResize);
      }
  
      return () => vimeoContainer ? window.removeEventListener('resize', onResize) : 0;
    },[id, vimeoContainer]);
  
    return(
      <div className='vimeo round' onClick={ () => setHideVid(false)  } ref={innerRef || vimeoContainer} style={height}>
        {  <Placeholder placeholder={placeholder} playIcon={!autoplay} style={style} loadIco={loadIco} playIco={playIco}/> }
        { !hideVid && <iframe title={title} src={`https://player.vimeo.com/video/${id}?h=583d0b23c9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=${ (autoplay || pending)  ? 1 : 0}&loop=${ (autoplay && !forceStop) ? 1 : 0}&title=0&byline=0&portrait=1&muted=${ forceUnmute || pending || (!forceUnmute && !autoplay) ? 0 : 1}&autopause=0&controls=${ (controls ? '1' : '0') }${ defaultQuality ? ('&amp;quality='+defaultQuality) : '' }` } frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={style}></iframe> }
        </div>
    );
  }

  export default Video;