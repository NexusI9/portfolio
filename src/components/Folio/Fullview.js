import Img from './Img';
import { useState, useEffect, useRef } from 'react';
import {  AnimatePresence, motion } from 'framer-motion';
import {  filenameFromPath } from '@/lib/utils';
import { useRouter } from 'next/router';
  
const Fullview = ({index, pictures, onQuit=()=>0}) => {
  
        const router = useRouter();
        const handleOnQuit = () => {
            onQuit();
            router.push({
                pathname: router.pathname, 
                query:{title: router.query.title}
            },undefined,{scroll:false});
        }

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
  
          return () => { 
                window.removeEventListener('keydown', onKeyDown);
                document.querySelector('body').style.overflow = null;
            }
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
                  <div className='fullview_bkg' onClick={ handleOnQuit } ></div>
                  <div className='close' onClick={ handleOnQuit }>
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

    export default Fullview;