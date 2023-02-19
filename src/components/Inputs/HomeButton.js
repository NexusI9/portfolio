import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HoverSquare } from '../Props';

const HomeButton = ({latestHref=''}) => (
    <motion.div
    key='homebutton'
    initial={{opacity:0}}
    animate={{opacity:1, transition:{duration:0.3}}}
    exit={{opacity:0, transition:{duration:0.3}}}
    onClick={ () => window.gtag('event','click_home_button',{event_category:'click', event_label:'Click on home button'})  }
    >
      <Link to={'/'+ (latestHref.length > 0 ? '#'+latestHref : latestHref )} id='homeButton'>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 26 26" >
        <path d="M17.2,6.5L10.7,13l6.5,6.5l-1.3,2.6L6.8,13l9.1-9.1L17.2,6.5z"/>
      </svg>
          <HoverSquare size={'40px'} name='homeButton'>
            <small className='discrete'>home</small>
          </HoverSquare>
      </Link>
    </motion.div>
  );


  export default HomeButton;
