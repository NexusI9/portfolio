import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect } from 'react';
import { MailAddress, SocialsIcons, ContactForm } from '@/components/Inputs';
import { Signature } from '@/components/Statics';
import { Spheros } from '@/components/Props';

export default function Contact(){


  const variantContainer = {
    initial:{opacity:0},
    animate:{opacity:1, transition:{duration:0.5, type:'tween', ease:'easeOut', staggerChildren:0.2}},
    exit:{ opacity:0, transition:{duration:0.3} }
  }


  const variantContact = {
    initial:{y:'100px', opacity:0},
    animate:{y:'0', opacity:1,transition:{duration: 0.3, type:'tween', ease:'easeOut'}},
    exit:{y:'-200%', opacity:0, transition:{duration: 0.3, type:'tween', ease:'easeOut'}}
  };


  return(
    <>    
    <Head>
      <title>Nassim El Khantour - Contact</title>
    </Head>
    <motion.div
    id='contactContainer'
    className='container'
    variants={variantContainer}
    initial='initial'
    animate='animate'
    exit='exit'
    > 
      {/*<Spheros />*/}

      <motion.div id='contactLinks' key='contactLinks' variants={variantContact}>
          <div>
            <h1 key='letsgetintouch'>Let's get in touch!</h1>
            <h2>Interested in working with me, or simply want to say hi? Feel free to reach out using the form or my email below. </h2>
          </div>

          <div>
            <section>
              <h5>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9996 18.3332L9.69335 17.0499L14.8267 11.9165H3.66626V10.0832H14.8267L9.69335 4.94984L10.9996 3.6665L18.333 10.9998L10.9996 18.3332Z" fill="#182449"/>
              </svg>
              Connect
              </h5>
              <MailAddress/>
            </section>

            <section>
              <h5>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9996 18.3332L9.69335 17.0499L14.8267 11.9165H3.66626V10.0832H14.8267L9.69335 4.94984L10.9996 3.6665L18.333 10.9998L10.9996 18.3332Z" fill="#182449"/>
                </svg>
                Follow
              </h5>
              <SocialsIcons />
            </section>
          </div>
      </motion.div>

      <ContactForm />

      <Signature />
    </motion.div>
    </>
  );
}


