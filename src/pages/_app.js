import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { Menu, Filter, SkinProvider } from '@/components/Statics';
import { Provider } from 'react-redux';
import store from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import '@/sheets/styles.scss';


const App = ({ Component, pageProps }) => {

    const router = useRouter();

    useEffect(() =>{
        //hotjar
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3433824,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

        //GA4
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        window.gtag('js', new Date());
        window.gtag('config', 'G-6BRRN05LJJ');

    },[]);


    return (
        <>
            <Head lang='en'>
                <meta charSet="utf-8" />
                <link rel="icon" id='favicon' href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:site_name" content="The Art of Nassim El Khantour"/>
                <meta name="twitter:site_name" content="The Art of Nassim El Khantour"/>
                <meta content="Multimedia designer based in Montreal with over 5 years of experience. Expertise in motion and web design." name="description"/>
                <meta content="Nassim El Khantour - Multimedia designer" property="og:title"/>
                <meta content="Multimedia designer based in Montreal with over 5 years of experience. Expertise in motion and web design." property="og:description"/>
                <meta content="Nassim El Khantour - Multimedia designer" property="twitter:title"/>
                <meta content="Multimedia designer based in Montreal with over 5 years of experience. Expertise in motion and web design." property="twitter:description"/>
                <meta property="og:type" content="website" />
                <link rel="manifest" href="/manifest.json" />
                <title>The Art of Nassim El Khantour</title>
            </Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6BRRN05LJJ" />
            <Provider store={store}>
                <SkinProvider>
                        <main id='wrapper' >
                            <AnimatePresence mode='wait' initial={false}>
                                    <Component {...pageProps} key={router.pathname} />
                            </AnimatePresence>
                        </main>
                        <Filter />
                        <Menu />
                </SkinProvider>
            </Provider>
        </>
    );    
}

export default App;