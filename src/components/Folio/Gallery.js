import Img from './Img';
import { useState, useEffect } from 'react';
import {  AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { pictureToFullPath } from '@/lib/utils';
import { concatGalleries} from './Gallery.helper';
import Fullview from './Fullview';

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
        return setFullview(<Fullview index={ convertedGallery.index } pictures={ convertedGallery.pictures } onQuit={() =>  setFullview()}/> )
      }
  
    }
  
    const onImgClick = (e) => {
      window.gtag('event','click_gallery_picture',{event_category:'click', event_label:'Click gallery picture'})
      router.push({
        pathname: router.pathname, 
        query: {...router.query, gallery:galleryKey, picture:e.name}
      },undefined,{scroll:false});
    }
  
  
    useEffect(() => check_Click_Or_Params(), [router.query.gallery]);
  
  
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
  
      function gen({type, folder, pictures, extension='webp'}){
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