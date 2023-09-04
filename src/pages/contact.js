import Head from 'next/head';
import { ContactLayout } from '@/components/Layout';
import { Signature } from '@/components/Statics';

export default function Contact() {

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


