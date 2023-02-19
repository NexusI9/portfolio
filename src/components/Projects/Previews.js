
import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { smoothScroll } from '../../lib/utils';
import { gsap } from 'gsap';
import Board from './Board';

const Previews = ({wrapperRef, active, onProgress, onLoad = (e) => e, project, onScroll = (e) => e }) => {

  const bar = useRef();
  const [canvasPreview, setCanvasPreview] = useState();
  const [activeCanvas, setActiveCanvas] = useState();
  const [lastCanvas,setLastCanvas] = useState();

  const onBoardClick = (cnv) => {
    setActiveCanvas(cnv);
    onScroll(true);
    smoothScroll(cnv.offsetTop).then( () => onScroll(false) );
  }


  useEffect( () => {

    let canvasArray = null;
    const child_elements = wrapperRef.current.children;

    async function getPreviews(nodes){

      const config = (node) => Object.assign({
        backgroundColor: null, //(project && project.skin === 'dark') ? '#0e0e0e' : '#f3f3f3'
        logging:false,
        scale:window.devicePixelRatio/8,
        height: (getHeight(node) > window.innerHeight) ? window.innerHeight : getHeight(node),
        width: window.innerWidth
      });

      const getHeight = (node) => node.nodeName == 'IMG' ? node.height : node.offsetHeight;
      nodes = [...nodes];
      if(nodes && nodes.length > 0){

          const arrayPromise = [];
          for( const i in nodes){

            const node = nodes[i];

            if( node.getAttribute('class') && node.getAttribute('class').match('ignore') ){ continue; }
            const genCanvas = await html2canvas( node, config(node) );

            arrayPromise.push({
                title: node.getAttribute('data-board-name') || 'board '+i,
                canvas: genCanvas.toDataURL(),
                offsetTop:node.getBoundingClientRect().top,
                height: node.getBoundingClientRect().height
            });

            if(onProgress){
              onProgress({
                index:i,
                total:nodes.length,
                percent:(i*100)/(nodes.length-1)
              });
            }

          }

          canvasArray = await Promise.all(arrayPromise).then(result => result);

      }else{
        console.log('no child were found in the wrapper');
      }

      return canvasArray;

    }

    if( !lastCanvas && active){  setLastCanvas(active); }

    //so we can get the doms elements

    if( !canvasPreview && child_elements ){
      setTimeout( () => {
        getPreviews(child_elements).then( canvasObject => {
              setCanvasPreview( canvasObject );
              setActiveCanvas( canvasObject[0] );
              onLoad(canvasObject);
        });
      }, 20);

    }

    setActiveCanvas(active);

  },[wrapperRef, active, project]);


  return(
    <div className='projectPreview' ref={bar}>
      { canvasPreview && canvasPreview.map( (cnv,i) =>
        <Board
          key={'canvas_'+i}
          src={cnv.canvas}
          title={cnv.title}
          offsetTop={cnv.offsetTop}
          onClick={ (e) => onBoardClick(e) }
          active={ activeCanvas && activeCanvas.title === cnv.title }
          onActive={ (e) => { return gsap.to(bar.current, {scrollTop:e.top - bar.current.getBoundingClientRect().width/2 - e.height, duration:0.8}) } }
          />
      ) }
    </div>
  );
}

export default Previews;
