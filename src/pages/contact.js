import Head from 'next/head';
import { ContactLayout } from '@/components/Layout';
import { Signature } from '@/components/Statics';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Contact() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch({type:'SWITCH_SKIN',skin:'default'});
  },[]);

  return (
    <>
      <Head>
        <title>Contact | Nassim El Khantour</title>
      </Head>
      <ContactLayout />
      <Signature />
    </>
  );
}


