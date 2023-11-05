import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default () => {

    const contentRoute = [
       {
          type:'lotus',
          icon: "/assets/projects/laos/lotus.webp",
          title: "Multitask dictionary",
          summary: "The extension also provide a personal dictionary allowing to save countless new words, common names and expressions.",
          img: "/assets/projects/laos/screenshots/list.webp",
        }, {
          type:'yin',
          icon: "/assets/projects/laos/yin.webp",
          title: "Flashcard game",
          summary: "For an easy entry level, flashcards are the choice to start learning new words ! Letting the mouse flowing through the cards to pair them together.",
          img: "/assets/projects/laos/screenshots/cards.webp",
        }, {
          type:'fire',
          icon: "/assets/projects/laos/fire.webp",
          title: "Fast type mode",
          summary: "The Fast Typing mode brings a more intensive (yet efficient) learning pace.",
          img: "/assets/projects/laos/screenshots/flash.webp",
        }, {
          type:'chakra',
          icon: "/assets/projects/laos/chakra.webp",
          title: "Fill the blank",
          summary: "For the more advanced, a fill sentences mode is available using Tatoeba.org’s boundless sentences database",
          img: "/assets/projects/laos/screenshots/fill.webp",
        },
    ];
  
    const [content, setContent] = useState(contentRoute[0]);
  
  
    return(
      <>
        <section id='features-icons-container'>
          {contentRoute.map( (item,i) => <span key={item.type+i} onMouseEnter={ () => setContent(contentRoute[i]) } data-type={item.type}></span> ) }
        </section>
        <section className='features-description'>
          <div id="ft_circle_infobox">
              { content &&
                <>
                <AnimatePresence mode='wait'>
                    <motion.section
                        key={'feature_infobox'+content.title}
                        initial={{opacity:0, y:30}}
                        animate={{opacity:1, y:0, transition:{duration:0.3}}}
                        exit={{opacity:0, transition:{duration:0.2}}}
                        className='infobox'
                    >
                      <span className='app' style={{backgroundImage:"url("+content.icon+")"}}></span>
  
                      <h5>{content.title}</h5>
                      <br/>
                      <small className='infobox_desc'>{content.summary}</small>
  
  
                  </motion.section>
                </AnimatePresence>
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={'feature_pix'+content.title}
                    initial={{opacity:0}}
                    animate={{opacity:1, transition:{duration:0.2, delay:0.1}}}
                    exit={{opacity:0, transition:{duration:0.1}}}
                    className="window pix" src={content.img}
                  />
                </AnimatePresence>
              </>
              }
          </div>
        </section>
      </>
    );
  }