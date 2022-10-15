import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { HoverSquare } from '../props';
import arrowHome from '../../assets/arrowHome.svg';
import arrowHomeWhite from '../../assets/arrowHome_white.svg';

import behance from '../../assets/icons/behance.svg';
import instagram from '../../assets/icons/instagram.svg';
import artstation from '../../assets/icons/artstation.svg';
import twitter from '../../assets/icons/twitter.svg';
import vimeo from '../../assets/icons/vimeo.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import linkedin from '../../assets/icons/linkedin.svg';

export const BackButton = () => (

  <Link to='/'>
    <motion.div
    id='backButton'
    initial={{x:-200, opacity:0}}
    animate={{x:0, opacity:1, transition:{duration:0.9, type:'tween', ease:'easeOut', delay:0.3}}}
    exit={{y:-200, opacity:0, transition:{duration:0.4}}}
    >
      <></>
      <small>back to homepage</small>
    </motion.div>
  </Link>

);

export const Button = ({type="checkbox", innerRef, name, onClick, label, ico, id, active=false, href, target=''}) => (
  <>
    <input type={type} name={name} id={id} defaultChecked={active} />
    <label ref={innerRef} htmlFor={id} className='cube' onClick={ () => onClick ? onClick({name,label,ico,id,type}) : 0 }>
        {ico ?
        <div className='label'>
          <span className='ico'><img src={ico} /></span>
          { href ?
            <a href={href} target={target}>
            <small>{label}</small>
            </a> :
            <small>{label}</small>
          }

        </div>
        :
        <small>{label}</small>
      }

    </label>
  </>
)

export const HomeButton = () => (
  <Link to='/' id='homeButton'>
      <img src={ (document.querySelectorAll('body')[0].getAttribute('data-skin') !== 'default') ? arrowHomeWhite : arrowHome }/>
      <HoverSquare size={'40px'} name='homeButton'>
        <small className='discrete'>home</small>
      </HoverSquare>
  </Link>
);

export const Multi = ({eng, fr, zh, language}) => {
  const [content, setContent] = useState(eng);

  useEffect(() => {

      switch (language) {
        case 'english':
          setContent(eng);
        break;

        case 'french':
          setContent(fr);
        break;

        case 'zhongwen':
          setContent(<span className='zhg'>{zh}</span>);
        break;

        default:
          setContent(eng)

      }


  },[language,eng,fr,zh]);
  return( <>{content}</> );
}

export const ViewShowreel = ({container}) => {

  const dot = useRef();

  useEffect(() => {

    const onMousemove = (e) => {
        if(dot){
          const size = dot.current.getBoundingClientRect().width;
          gsap.to(dot.current,{transform:'translate('+(e.pageX-(size/2))+'px,'+(e.pageY-(size/2))+'px)', duration:0.3, ease:'Power1.eastOut'})
          //dot.current.style.transform = 'translate('+e.pageX+'px,'+e.pageY+'px)';
        }
    };


    container.addEventListener('mousemove',onMousemove);

    return () => container.removeEventListener('mousemove', onMousemove);

  },[dot,container]);

  return(
    <motion.div
      id='viewShowreel'
      ref={dot}
      key='viewShowreel'
      initial={{scale:0}}
      animate={{scale:1, transition:{duration:0.2}}}
      exit={{scale:0, transition:{duration:0.2}}}
    >
      <Link to='/showreel'></Link>
    </motion.div>
  );
}

export const MailAddress = () => ( <a className='discrete surligneur' href="mailto:nassim.elkhantour@gmail.com"><small>nassim.elkhantour@gmail.com</small></a> );
export const SocialsIcons = () => {
  const mapSocials = [
    {
      id:'behance',
      link:'https://www.behance.net/elkhantour/',
      icon:behance
    },
    {
      id:'artstation',
      link:'https://www.artstation.com/elkhantour/',
      icon:artstation
    },
    {
      id:'vimeo',
      link:'https://vimeo.com/elkhantour/',
      icon:vimeo
    },
    {
      id:'twitter',
      link:'https://twitter.com/nassimelkh',
      icon:twitter
    },
    {
      id:'pinterest',
      link:'https://www.pinterest.fr/nassimelkhantour/',
      icon:pinterest
    },
    {
      id:'linkedin',
      link:'https://www.linkedin.com/in/nassimelkhantour/',
      icon:linkedin
    },
    {
      id:'instagram',
      link:'https://www.instagram.com/nassimelkhantour/',
      icon:instagram
    }
  ];
  return(
    <div className='socialsIcons'>
      {mapSocials.map( item => <HoverSquare size='25px' name={'hoversquare'+item.id} key={item.id} top='-25%' left='-20%'><a className='ico' href={item.link} target='_blank' rel="noreferrer" ><img src={item.icon} /></a></HoverSquare> )}

    </div>
  );

}
