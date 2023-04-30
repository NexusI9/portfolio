import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect } from 'react';
import { MailAddress, SocialsIcons } from '@/components/Inputs';
import { Signature } from '@/components/Statics';
import { Spheros } from '@/components/Props';

export default function Contact({onLoad = () => 0}){

  useEffect(() => {
      onLoad();
  },[]);

  const variantContainer = {
    initial:{opacity:0},
    animate:{opacity:1, transition:{duration:0.5, type:'tween', ease:'easeOut', staggerChildren:0.2}},
    exit:{ opacity:0, transition:{duration:0.3} }
  }

  const variantTitle = {
    initial:{y:100, opacity:0},
    animate:{y:0, opacity:1, transition:{type:'tween', ease:'easeOut'}},
    exit:{y:-200, opacity:0}
  };

  const variantContact = {
    initial:{y:'100px',x:'-50%', opacity:0},
    animate:{y:'-50%',x:'-50%', opacity:1,transition:{type:'tween', ease:'easeOut'}},
    exit:{y:'-200%',x:'-50%', opacity:0}
  };


  return(
    <>    
    <Head>
      <title>Nassim El Khantour - Contact</title>
    </Head>
    <motion.div
    id='contactContainer'
    variants={variantContainer}
    initial='initial'
    animate='animate'
    exit='exit'
    > 
      {/*<Spheros />*/}
      <motion.h1 key='letsgetintouch' variants={variantTitle}>Let's get in touch!</motion.h1>

      <motion.div id='contactLinks' key='contactLinks' variants={variantContact}>
          <section>
            <h4>Connect</h4>
            <MailAddress/>
          </section>

          <section>
            <h4>Follow</h4>
            <SocialsIcons />
          </section>


      </motion.div>

      <Signature />
    </motion.div>
    </>
  );
}


