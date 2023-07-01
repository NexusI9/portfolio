import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import can from '@/assets/inspire/inspire-can.webp';
import earth from '@/assets/inspire/inspire-earth.webp';
import head from '@/assets/inspire/inspire-head.webp';
import mobile from '@/assets/inspire/inspire-mobile.webp';


export default () => {

    const [active, setActive] = useState();
    const ref = useRef();

    useEffect( () => {
        
        const onScroll = () => {
            if(ref.current?.getBoundingClientRect().top < window.innerHeight * 1/3){ 
                setActive(true);
                window.removeEventListener('scroll', onScroll)
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },[]);

    return (
        <section ref={ref} className="container inspire">
            <h3>As a <strong>multi-disciplinary designer & developer</strong>, <wbr />
                my goal involves <strong>pushing creative boundaries</strong> to the next level, <wbr />
                as well as <strong>offering memorable user experiences</strong>
            </h3>
            <div>
                <AnimatePresence>
                    {active && [can, earth, head, mobile].map((pic, i) => 
                        <motion.img 
                            className='round' 
                            src={pic.src} 
                            key={`inspirepic${i}`} 
                            initial={{opacity:0, y:200}}
                            animate={{opacity:1, y:0, transition:{duration:0.6, delay: i/10}}}
                        />)}
                </AnimatePresence>
            </div>
        </section>

    );
}