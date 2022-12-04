import '../../sheets/gallery.scss';
import '../../sheets/slideshow.scss';
import { useState, useEffect, useRef } from 'react';
import {  AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { concatGalleries, pictureToFullPath, filenameFromPath } from '../../lib/utils';
import play from '../../assets/play.svg';
import play_white from '../../assets/play_white.svg';
import { Dotty } from '../loader';

//Gallery & Medias

export const Img = ({src, name, alt, className='', id, style, onClick, boardName}) => (
  <section onClick={ () => onClick && name ? onClick({src, alt, className, id, style, name}) : 0 } className={className + ' imgWrapper round ' + (onClick ? 'picLink' : '')} style={style || {}} data-board-name={boardName || ''}><img src={src} alt={alt || 'picture'} className={className || ''} id={id || ''} /><span></span></section>
);

export const Gallery = ({galleries, galleryKey}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [fullview, setFullview] = useState();

  /*
    2 triggers to Fullview :
      - on Click
      - on load check params
  */

  const check_Click_Or_Params = (e=null) => {

    const paramGallery = searchParams.get('gallery') || (e && e.galleryKey);
    const paramPicture = searchParams.get('picture') || (e && e.picture);

    if( paramGallery && paramGallery === galleryKey && paramPicture){
      const convertedGallery = concatGalleries({ galleries:galleries, galleryKey:galleryKey, selectedPicture:paramPicture });
      return setFullview(<Fullview index={ convertedGallery.index } pictures={ convertedGallery.pictures } onQuit={ onQuit }/> )
    }

  }

  const onImgClick = (e) => {
    setSearchParams({gallery:galleryKey, picture:e.name});
  }

  const onQuit = () => {
    setSearchParams();
    setFullview();
    document.querySelectorAll('body')[0].style.overflow = 'initial';
  }


  useEffect(() => check_Click_Or_Params(), [searchParams.get('gallery')]);

  //Fullview

  const Fullview = ({index, pictures, onQuit}) => {

      /* variants */
      const variantContainer = {
        initial:{opacity:0},
        animate:{opacity:1, transition:{duration:0.3, type:'tween', ease:'easeOut', staggerChildren:0.2, delayChildren:0.4}},
        exit:{opacity:0, transition:{duration:0.3}}
      }
      const variantPic = {
        initial:{opacity:0, y:80},
        animate:{opacity:1, y:0, transition:{duration:0.4, type:'tween', ease:'easeOut'}},
        exit:{opacity:0, transition:{duration:0.3}}
      }

      const variants = {
        enter: (direction: number) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction: number) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          };
        }
      };

      const thumbref = useRef();
      const [centered, setCentered] = useState(true);

      const [currentPic, setCurrentPic] = useState(pictures[index]);
      const [direction, setDirection] = useState(0);

      const paginate = (newPage: string, newDirection: number) => {
        if(newPage){ setCurrentPic(newPage); }
        else{
          const indexOfCurrentPic = pictures.indexOf(currentPic);
          if(indexOfCurrentPic === 0 && newDirection === -1){
            setCurrentPic(pictures[pictures.length-1]);
          }else if(indexOfCurrentPic === pictures.length-1 && newDirection === 1 ){
            setCurrentPic(pictures[0]);
          }else{
            setCurrentPic(pictures[indexOfCurrentPic + newDirection]);
          }
        }
        setDirection(newDirection);
      };

      const swipeConfidenceThreshold = 1000;
      const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
      };

      const onThumbnailClick = (e) => {
        if(e.prevPic === e.newPic){ return; }
        setSearchParams({ gallery:searchParams.get('gallery'), picture:filenameFromPath(e.newPic) });
        paginate(e.newPic, pictures.indexOf(e.newPic) >  pictures.indexOf(e.prevPic) ? 1 : -1);
      }

      useEffect(() => {

        document.querySelectorAll('body')[0].style.overflow = 'hidden';
        if(thumbref.current.getBoundingClientRect().width > window.innerWidth){ setCentered(false); }

        const onKeyDown = (e) => {
          switch (e.key) {
            case "ArrowRight":
              paginate(null, 1);
            break;
            case "ArrowLeft":
              paginate(null, -1);
            break;

            default:

          }
        }
        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
      },[index, pictures, thumbref, paginate, searchParams.get('picture')]);


      return(
          <motion.div
            className='fullview'
            data-html2canvas-ignore
            variants={variantContainer}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            { pictures &&
              <>
                <div className='fullview_bkg' onClick={ () => onQuit ? onQuit() : 0 } ></div>
                <div className='close' onClick={ () => onQuit ? onQuit() : 0 }>
                  <span></span>
                  <span></span>
                </div>
                <motion.div variants={variantPic} className='mainframe'>
                      <AnimatePresence>
                      <motion.img
                        key={currentPic}
                        src={currentPic}
                        variants={variants}
                        custom={direction}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        alt='fullframe picture'
                        transition={{
                          x: { type: "spring", stiffness: 500, damping: 50 },
                          opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);
                          if (swipe < -swipeConfidenceThreshold) { paginate(null, 1); }
                          else if (swipe > swipeConfidenceThreshold) { paginate(null, -1); }
                        }}
                      />
                      </AnimatePresence>
                </motion.div>
                {pictures.length > 0 &&
                <motion.div variants={variantPic} className={'thumbnails' + (centered ? ' center' : '')} ref={thumbref}>
                  { pictures.map(pic => <Img src={pic} key={'fullview'+pic} name={filenameFromPath(pic)} onClick={ () => onThumbnailClick({prevPic:currentPic, newPic:pic}) } /> ) }
                </motion.div>
              }
              </>
            }
          </motion.div>
      );
  }

  //layouts
  const BaseLayout = ({pictures, fullpath}) => (
    <div className='gallery base'>
      { pictures.map( (img, i) => i === 0 ? <div className='master' key={img+i}><Img onClick={ e => onImgClick(e) } name={img} src={fullpath(img)} /></div> : <Img  onClick={ e => onImgClick(e) } name={img} key={img+i} src={fullpath(img)} /> ) }
    </div>
  );

  const SplitLayout = ({pictures, fullpath}) => (
    <div className='gallery split' > { pictures.map( img => <Img onClick={ e => onImgClick(e) } name={img} key={img} src={fullpath(img)}/> )  } </div>
  );

  const InvertedBaseLayout = ({pictures, fullpath}) => (
    <div className='gallery base'>
      { pictures.map( (img, i) => i === pictures.length-1 ? <div className='master' key={img}><Img onClick={ e => onImgClick(e) } name={img} src={fullpath(img)} /></div> : <Img onClick={ e => onImgClick(e) } name={img} key={img} src={fullpath(img)} /> ) }
    </div>
  );

  const WindowLayout = ({pictures, fullpath}) => (
    <div className='gallery window'> { pictures.map( img => <Img onClick={ e => onImgClick(e) } name={img} key={img} src={fullpath(img)} /> )} </div>
  );

  const ColumnLayout = ({pictures, fullpath}) => (
    <div className='gallery column'>{ pictures.map( img => <Img galleries={galleries} key={img} src={fullpath(img)} /> )} </div>
  );

  //utils
 function generateGallery(galleries){

    function gen({type, folder, pictures, extension='jpg'}){
        const fullpath = (picture) => pictureToFullPath({folder, picture, extension});
        switch(type){
            case 'base':
              return <BaseLayout key={pictures[0]} pictures={pictures} fullpath={fullpath}/>

            case 'split':
              return <SplitLayout key={pictures[0]} pictures={pictures} fullpath={fullpath}/>

            case 'invertedbase':
              return <InvertedBaseLayout key={pictures[0]} pictures={pictures} fullpath={fullpath}/>

            case 'window':
              return <WindowLayout key={pictures[0]} pictures={pictures} fullpath={fullpath}/>

            case 'column':
              return <ColumnLayout key={pictures[0]} pictures={pictures} fullpath={fullpath}/>
        }
    }

    return galleries.map( gallery => gen( gallery ) ) || <></>;
  }

  return ( <>
    {generateGallery(galleries[galleryKey])}
    <AnimatePresence exitBeforeEnter>
      {fullview && fullview}
    </AnimatePresence>
    </> );

}

export const Article = ({children, name, spaced, id, className, style}) => ( <div id={id ? id : ''} style={ style ? style : {} } className={"article " + (spaced ? 'spaced ' : ' ') + (className ? className : '')} data-board-name={name || ''}>{children}</div> );

export const Title = ({label, summary,id, className, style}) => (
  <section id={id || ''} className={"header compress "+ (className || '')} style={style || {}}>
    <h2>{label}</h2>
    <p>{summary}</p>
  </section>
);

export const Body = ({flexDirection, flexAlignement, children, title, summary, id='', className, style={}}) => (
  <>
    {title && <Title label={title} summary={summary} />}
    <section {...id} className={"body compress " + (flexDirection || '')+' '+ (flexAlignement || '')+' '+(className||'')} style={style}>{children}</section>
  </>
);


export const Video = ({id, onLoad, autoplay=false, style={}, defaultQuality, placeholder, loadIco, playIco, innerRef, resize=true, pending=false }) => {

  const [thumbnail, setThumbnail] = useState();
  const [ height, setHeight ] = useState({});
  const [hideVid, setHideVid] = useState(pending);
  const vimeoContainer = useRef();

  const Placeholder = ({placeholder, playIco=true, loadIco=false, style={}}) => (
    <div className='iframePlaceholder' style={style}>
      { placeholder ? <img className='picPlaceholder' src={process.env.PUBLIC_URL+placeholder} /> : <section></section> }
      { playIco && <img className='playIco round' src={play}/>}
      { loadIco && <div className='loadIco'> <Dotty /> </div> }
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
      { <Placeholder placeholder={ placeholder ? placeholder : thumbnail} playIcon={!autoplay} style={style} loadIco={loadIco} playIco={playIco}/> }
      { !hideVid && <iframe src={"https://player.vimeo.com/video/"+id+"?h=583d0b23c9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay="+((autoplay && !hideVid) ? 1 : 0)+"&loop=1&title=0&byline=0&portrait=1&muted=1&autopause=0&controls="+(autoplay ? 0 : 1)+ (defaultQuality ? ('&amp;quality='+defaultQuality) : '') } frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={style}></iframe> }
      </div>
  );
}

export const Space = ({type, hideMobile}) => (<div className={(type == 'small' ? 's' : '')+"blank"+(hideMobile ? 'mobile' :'')}></div>);


export const Story = ({paragraphs, dark=false}) => (
    <div class={'story' + (dark ? ' dark' : '') }>
      <h2><span></span> The Story </h2>
      <section>{paragraphs.map( p => <p key={'story'+Math.random()}>{p}</p>)}
    </section></div>
);


export const SlideShow = ({slides, displayBar=true, duration=5, autoplay=true }) => {

  const [ currentSlide, setCurrentSlide ] = useState(0);
  const loadBar = useRef();
  useEffect(() => {

      const onIte = () => currentSlide >= slides.length-1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide+1);

      if(autoplay && loadBar.current){
        loadBar.current.addEventListener('animationiteration', onIte);
      }

      return () => loadBar && loadBar.current.removeEventListener('animationiteration', onIte);

  },[slides, autoplay, loadBar, duration,currentSlide]);

  return(
    <div className='slideshow'>
      <section className='slideContent'>
        <AnimatePresence>
        { slides[currentSlide] ?
          <motion.div
            key={slides[currentSlide].legend || Math.random()}
            initial={{x:-1000}}
            animate={{x:0, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
            exit={{x:1000, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
          >
            {slides[currentSlide].content}
          </motion.div> :
          <></>
        }
        </AnimatePresence>
        {autoplay && <span className='slideBar' ref={loadBar} style={{animationDuration:duration + 's'}}></span>}
      </section>
      <section className='slideDots'>{ slides.map( (_,i) => <span className={ i===currentSlide ? 'active' : ''} onClick={ () => setCurrentSlide(i) }></span>) } </section>
      <AnimatePresence>
        <motion.section
          className='slideLegend'
          key={slides[currentSlide].legend || Math.random()}
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
          exit={{opacity:0}}
        >
          <div className='plane'></div>
          <small>{ slides[currentSlide] && slides[currentSlide].legend }</small>
        </motion.section>
      </AnimatePresence>
    </div>
  )
}


export const Pointer = ({side='left', barwidth='50%', title='', description='', style={} }) => (
  <div className={'pointer'} style={style} data-side={side}>
    {side === 'left' && <span></span>}
    <h5>{title}</h5>
    {side === 'right' && <span></span>}
    {side === 'left' && <br />}
    <small>{description}</small>
    {side === 'right' && <br />}
  </div>
)
