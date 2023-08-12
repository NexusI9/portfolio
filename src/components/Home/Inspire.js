import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Viewport } from '../Statics';

import can from '@/assets/inspire/inspire-can.webp';
import earth from '@/assets/inspire/inspire-earth.webp';
import head from '@/assets/inspire/inspire-head.webp';
import mobile from '@/assets/inspire/inspire-mobile.webp';


const QUOTE = [
    [
        { text: 'As a ', },
        { text: 'multi-disciplinary designer & developer,', class: 'purple' }
    ],
    [
        { text: 'my goal involves ' },
        { text: 'pushing creative boundaries', class: 'purple' },
        { text: ' to the next level,' }
    ],
    [
        { text: 'as well as ' },
        { text: 'offering memorable user experiences', class: 'purple' },
    ]
]

export default () => {

    const control = useAnimation();
    const [active, setActive] = useState();
    const [container, setContainer] = useState();
    let count = 0;

    useEffect(() => {
        if (active) {
            control.start({ opacity: 1, y: 0 });
        }
    }, [active]);

    return (
        <Viewport
            container={container}
            onEnter={() => setActive(true)}
        >
            <section ref={e => setContainer(e)} className="container inspire">
                    <h3>
                        <AnimatePresence>
                            {active && QUOTE.map((line, i) =>
                                <span key={'quoteline' + i} className='quote-line'>
                                    {
                                        line.map((segment, j) => segment.text.split('').map((char, k) => {
                                            count++;
                                            return (<motion.span
                                                key={[i, j, k, char].join('')}
                                                className={`quote-char ${segment.class || ''}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 + count / 40 } }}
                                            >
                                                {k === 0 ? ' ' + char : char}
                                            </motion.span>);
                                        }))
                                    }
                                </span>)}
                        </AnimatePresence>
                    </h3>
                    <div>
                        <AnimatePresence>
                            {[can, earth, head, mobile].map((pic, i) =>
                                <motion.img
                                    className='round'
                                    src={pic.src}
                                    key={`inspirepic${i}`}
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={control}
                                    transition={{ duration: 1, delay: i / 10, type: 'spring' }}
                                />)}
                        </AnimatePresence>
                    </div>
            </section>
        </Viewport>
    );
}