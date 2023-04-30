import { Video } from '@/components/Folio';
import { Socials } from '@/components/Statics';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  _setSkin: (e) => dispatch({type:'SWITCH_SKIN', skin:e}),
  _setHomeButton: (e) => dispatch({type:'TOGGLE_HOME_BUTTON', active:e})
})

const Showreel = ({_setSkin, _setHomeButton}) => {

  useEffect(() => { 
    _setSkin('dark');
    _setHomeButton(true);
  }, []);

  return(
    <>
        <Head>
          <title>Nassim El Khantour - Showreel</title>
        </Head>
        <motion.div
        id='showreel'
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.5, type:'tween', ease:'easeOut'}}}
        exit={{y:-80, opacity:0, transition:{duration:0.3}}}
        >
        <Video id='502699503' playIco={false} autoplay={true} forceUnmute={true} forceStop={true}/>
      </motion.div>
      <Socials minify={true}/>
    </>
  );
}


export default connect(null, mapDispatchToProps)(Showreel);