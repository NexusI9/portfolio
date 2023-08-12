import pa from '@/assets/quotes/pa-portrait.webp';
import louhann from '@/assets/quotes/louhann-portrait.webp';
import matteo from '@/assets/quotes/matteo-portrait.webp';
import { Quote } from '../Props';

export default () => {

    const quotesMap = [
        {
            quote: <>I strongly recommend having him on your side for any tech-savvy initiative. <br/>A real wizard!!!</>,
            name:'Paul-André C.',
            job:'Associate & Business development at Celisius Communication',
            location:'Montréal, Canada',
            avatar:pa.src
        },
        {
            quote: <>An incredibly talented and versatile Creative.<br/>He consistently demonstrates a proactive approach to problem-solving, seamlessly adapting his skills to various projects and platforms.</>,
            name:'Louhann M.',
            job:'Former Journalist & Copywriter at Grazia Magazine',
            location:'Paris, France',
            avatar:louhann.src
        },
        {
            quote: <>His creations are not only aesthetically captivating, they are also designed with a great attention to detail and visual coherence.</>,
            name:'Matteo M.',
            job:'SEM Campaign Specialist & Project Manager',
            location:'Marseille, France',
            avatar:matteo.src
        },

    ];
    return (<section className="container quotes">
        <h2>We propelled projects together
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3339 36.9986L16.6506 32.6049L33.9172 49.8715L33.9172 12.3319L40.0839 12.3319L40.0839 49.8715L57.3506 32.6049L61.6672 36.9986L37.0006 61.6653L12.3339 36.9986Z"/>
            </svg>
        </h2>

        <div>
            {quotesMap.map(quote => <Quote {...quote}/>)}
        </div>

    </section>);
}