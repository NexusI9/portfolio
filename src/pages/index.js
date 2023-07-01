import { useRouter } from 'next/router';
import { Flow } from '@/components/Flow';
import { useEffect, useState } from 'react';
import {  AnimatePresence } from 'framer-motion';
import { Socials,Signature } from '@/components/Statics';
import { CategoryMenu } from '@/components/Inputs';
import { About, VideoBanner } from '@/components/Home';
import { connect } from 'react-redux';
import { ContactLayout } from '@/components/Layout';


const mapDispatchToProps = (dispatch) => ({
  _setHomeButton: () => dispatch({type: 'TOGGLE_BACK_BUTTON', active:false}),
  _setSkin: (e) => dispatch({type:'SWITCH_SKIN', skin:e}),
});

const Home = ({_setHomeButton, _setSkin}) => {

  const [social, setSocial] = useState(false);
  const [catMenu, displayCatMenu] = useState();
  const [aboveTheFold, setAboveTheFold] = useState(true);
  const [aboutView, setAboutView] = useState(false);
  const [spherePos, setSpherePos] = useState('default');
  const router = useRouter();

  useEffect( () => {
    if(!router){return;}
    
    let hash = router.pathname;
    hash = hash.split('#')[1];

    if(hash && hash.length){
      document.querySelector(decodeURI(hash))?.scrollIntoView({behavior:'auto'})
    }

  },[router]); //check hash on mount

  useEffect(() => {

    const onMatchMedia = e => displayCatMenu(!e.matches);
    const onScroll = () => {
      if( window.pageYOffset > window.innerHeight ){
        setSocial(true);
        setAboveTheFold(false);
      }else{
        setSocial(false)
        setAboveTheFold(true);
      }
    }

    onScroll();

    window.addEventListener('scroll', onScroll);

    const mq = window.matchMedia('(max-width:525px)');
    onMatchMedia(mq);
    mq.addEventListener('change', onMatchMedia);

    _setHomeButton(false);
    _setSkin('default');

    return () =>{ 
      mq.removeEventListener('change', onMatchMedia);
      window.removeEventListener('scroll', onScroll);
    };


  },[]);

  useEffect( () => {
      //set Spheros positions depending on above the fold or if about is in view
      if(aboveTheFold){ setSpherePos('default'); }
      else if( !aboutView ){ setSpherePos('spread'); }
      else if( aboutView){ setSpherePos('about'); }

  }, [aboveTheFold, aboutView]);


  return(
    <>
      { /*<Spheros state={ spherePos } />*/ }
      { catMenu && <CategoryMenu /> }
      <VideoBanner />
      <Flow />
      <About onEnterView={ () => setAboutView(true) } onExitView={ () => setAboutView(false) }/>
      <ContactLayout />
      <Signature />
      <AnimatePresence mode='wait'>
        {social && <Socials minify={true}/>}
      </AnimatePresence>
    </>
  );

}


export default connect(null, mapDispatchToProps)(Home);