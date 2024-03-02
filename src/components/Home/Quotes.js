import pa from '@/assets/quotes/pa-portrait.webp';
import louhann from '@/assets/quotes/louhann-portrait.webp';
import matteo from '@/assets/quotes/matteo-portrait.webp';
import alex from '@/assets/quotes/alex-portrait.webp';
import nader from '@/assets/quotes/nader-portrait.webp';

import { Quote } from '../Props';
import { Viewport } from '../Statics';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { forwardRef } from 'react';

const MotionQuote = motion(forwardRef((props, ref) => <Quote {...props} innerRef={ref} />));

export default () => {

    const control = useAnimation();

    const [container, setContainer] = useState();
    const [active, setActive] = useState();

    const quotesMap = [
        [
            {
                quote: <>I strongly recommend having him on your side for any tech-savvy initiative. <br /><mark>A real wizard!!!</mark></>,
                name: 'Paul-André C.',
                job: 'Business development & Associate at Celsius Communication',
                location: 'Montréal, Canada',
                avatar: pa.src
            },
            {
                quote: <>An incredibly talented and versatile Creative.<br />He consistently demonstrates a <mark>proactive approach to problem-solving</mark>, seamlessly adapting his skills to various projects and platforms.</>,
                name: 'Louhann M.',
                job: 'Journalist & Copywriter at Grazia Magazine',
                location: 'Paris, France',
                avatar: louhann.src
            },
            {
                quote: <>With Nassim, I was able to find that <mark>perfect balance of design and functionality.</mark><br/> He was also <mark>great at coaching and collaborating</mark> with other members of the design team for the benefit of the project.</>,
                name: 'Alex B.',
                job: 'CEO & Marketing Director at MTLVibe',
                location: 'Montréal, Canada',
                avatar: alex.src
            },
        ], [
            {
                quote: <>His creations are not only aesthetically captivating, they are also designed with a <mark>great attention to detail</mark> and visual coherence.</>,
                name: 'Matteo M.',
                job: 'SEM Campaign Specialist & Project Manager',
                location: 'Marseille, France',
                avatar: matteo.src
            },
            {
                quote: <>In addition to his <mark>remarkable skill set</mark>, Nassim shines as a team player, his passion for his craft <mark>igniting the collective spirit.</mark></>,
                name: 'Nader B.M.',
                job: 'Co-Founder & Digital Strategist at Redbox Media',
                location: 'Montréal, Canada',
                avatar: nader.src
            },
        ]
    ];

    useEffect(() => {
        if (active) {
            control.start({ y: 0, opacity: 1 });
        }
    }, [active]);

    return (
        <Viewport
            container={container}
            onEnter={() => setActive(true)}
        >
            <section ref={e => setContainer(e)} className="container quotes">
                <h2>We propelled projects together
                    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3339 36.9986L16.6506 32.6049L33.9172 49.8715L33.9172 12.3319L40.0839 12.3319L40.0839 49.8715L57.3506 32.6049L61.6672 36.9986L37.0006 61.6653L12.3339 36.9986Z" />
                    </svg>
                </h2>

                <AnimatePresence>
                    {quotesMap.map((quoteGroup, i) =>
                        <div>{
                            quoteGroup.map((quote, j) =>
                                <MotionQuote
                                    key={'quote' + quote.quote + i + j}
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={control}
                                    transition={{ duration: 1.2, delay: (i+1)*j / 10, type: 'spring' }}
                                    {...quote}
                                />
                            )}
                        </div>
                    )}
                </AnimatePresence>

            </section>
        </Viewport>
    );
}