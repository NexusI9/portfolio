import Img from './Img';
import { useState, useEffect, useRef } from 'react';
import {  AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { pictureToFullPath, filenameFromPath } from '@/lib/utils';
import { concatGalleries} from './Gallery.helper';

const Gallery = ({galleries, galleryKey}) => {

    const router = useRouter();
    const [fullview, setFullview] = useState();
  
    /*
      2 triggers to Fullview :
        - on Click
        - on load check params
    */
  
    const check_Click_Or_Params = (e=null) => {
  
      const paramGallery = router.query.gallery || (e && e.galleryKey);
      const paramPicture = router.query.picture || (e && e.picture);
  
      if( paramGallery && paramGallery === galleryKey && paramPicture){
        const convertedGallery = concatGalleries({ galleries:galleries, galleryKey:galleryKey, selectedPicture:paramPicture });
        return setFullview(<Fullview index={ convertedGallery.index } pictures={ convertedGallery.pictures } onQuit={ onQuit }/> )
      }
  
    }
  
    const onImgClick = (e) => {
      window.gtag('event','click_gallery_picture',{event_category:'click', event_label:'Click gallery picture'})
      router.push({
        pathname: router.pathname, 
        query: {...router.query, gallery:galleryKey, picture:e.name}
      });
    }
  
    const onQuit = () => {
      router.push({pathname: router.pathname });
      setFullview();
      document.querySelectorAll('body')[0].style.overflow = 'initial';
    }
  
  
    useEffect(() => check_Click_Or_Params(), [router.query.gallery]);
  
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
          enter: (direction) => {
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
          exit: (direction) => {
            return {
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0
            };
          }
        };
  
        const thumbref = useRef();
        const [centered, setCentered] = useState(true);
        const [[page, direction], setPage] = useState([pictures[index], 0]);
  
        //https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/Example.tsx:1038-1045
        const paginate = (newPage, newDirection) => {
          if(!newPage){ 
            const indexOfCurrentPic = pictures.indexOf(page);
            if(indexOfCurrentPic === 0 && newDirection === -1){ 
              newPage = pictures[pictures.length-1]; 
            }
            else if(indexOfCurrentPic === pictures.length-1 && newDirection === 1 ){ 
              newPage = pictures[0]; 
            }
            else{ 
              newPage = pictures[indexOfCurrentPic + newDirection]; 
            }
          }
  
          setPage([newPage, newDirection]);  //update page with direction
          router.push({
            pathname: router.pathname,
            query: { 
              ...router.query,
              gallery:router.query.gallery, 
              picture:filenameFromPath(newPage) 
            }
          }); //update URL
        };
  
        const swipeConfidenceThreshold = 1000;
        const swipePower = (offset, velocity) => Math.abs(offset) * velocity;
  
        const onThumbnailClick = (e) => {
          if(e.prevPic === e.newPic){ return; }
          paginate(e.newPic, pictures.indexOf(e.newPic) >  pictures.indexOf(e.prevPic) ? 1 : -1);
        }
        
        
        useEffect(() => {
  
          document.querySelector('body').style.overflow = 'hidden';
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
        },[paginate]);
        
  
  
        return(
            <motion.div
              className='fullview'
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
                        <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                          key={page}
                          src={page}
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
                  <motion.div variants={variantPic} className={'thumbnails ' + (centered ? ' center' : null)} ref={thumbref}>
                    { pictures.map(pic => <Img src={pic} key={'fullview'+pic} name={filenameFromPath(pic)} onClick={ () => onThumbnailClick({prevPic:page, newPic:pic}) } /> ) }
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
      <AnimatePresence mode='wait'>
        {fullview && fullview}
      </AnimatePresence>
      </> );
  
  }

export default Gallery;