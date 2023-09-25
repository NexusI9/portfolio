import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
const MotionLink = motion(Link);

const Logo = ({ location = 'Taipei, Taiwan' }) => {

  const dispatch = useDispatch();

  return(
  <MotionLink
    href='/'
    id='NLogo'
    key='nLogo'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.3 } }}
    exit={{ opacity: 0, transition: { duration: 0.3 } }}
    onClick={ () => {
      dispatch({type:'SET_LAST_ACTION', state:"click"});
      dispatch({type:'CHANGE_CATEGORY', state:" "});
  }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Calque_1" data-name="Calque 1">
          <rect x="44.8" y="288" width="134.2" height="224" rx="65.53" />
          <rect x="333" width="134.2" height="224" rx="65.53" />
          <path d="M384,256h0A128,128,0,0,1,256,128,128,128,0,0,0,128,0h0A128,128,0,0,0,0,128H0A128,128,0,0,0,128,256h0A128,128,0,0,1,256,384h0A128,128,0,0,0,384,512h0A128,128,0,0,0,512,384h0A128,128,0,0,0,384,256Z" />
        </g>
      </g>
    </svg>
    {location && <p>
      <b>Nassim El Khantour</b>
      <br/>
      {location}
    </p>
    }
  </MotionLink>
);

};

export default Logo;