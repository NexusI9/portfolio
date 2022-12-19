import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { getCategories, changeHashTo } from '../../lib/utils';
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
import mailico from '../../assets/icons/mail.svg';

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

export const Logo = () => (
  <motion.div
  key='nLogo'
  initial={{opacity:0}}
  animate={{opacity:1, transition:{duration:0.3}}}
  exit={{opacity:0, transition:{duration:0.3}}}
  >
    <Link to='/' id='NLogo'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Calque_1" data-name="Calque 1">
            <rect x="44.8" y="288" width="134.2" height="224" rx="65.53"/>
            <rect x="333" width="134.2" height="224" rx="65.53"/>
            <path d="M384,256h0A128,128,0,0,1,256,128,128,128,0,0,0,128,0h0A128,128,0,0,0,0,128H0A128,128,0,0,0,128,256h0A128,128,0,0,1,256,384h0A128,128,0,0,0,384,512h0A128,128,0,0,0,512,384h0A128,128,0,0,0,384,256Z"/>
          </g>
        </g>
      </svg>
    </Link>
  </motion.div>
);

export const HomeButton = ({latestHref=''}) => (
      <motion.div
      key='homebutton'
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:0.3}}}
      exit={{opacity:0, transition:{duration:0.3}}}
      >
        <Link to={'/'+ (latestHref.length > 0 ? '#'+latestHref : latestHref )} id='homeButton'>
            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" width="34.1" height="6" viewBox="0 0 34.1 6">
              <path className="cls-1" d="M2.6,3.7H2.3l.6-.3.5-.5a1.8,1.8,0,0,0,.5-.7l.3-.6c0-.2.1-.4.1-.6H3.7a4.6,4.6,0,0,1-.8,1.9A4.5,4.5,0,0,1,1,4,3.4,3.4,0,0,1,3.2,5.5l.3.8.2.7h.6a2.9,2.9,0,0,0-.7-1.6l-.4-.5-.9-.6H35.1V3.7ZM1,4Z" transform="translate(-1 -1)"/>
            </svg>
            <HoverSquare size={'40px'} name='homeButton'>
              <small className='discrete'>home</small>
            </HoverSquare>
        </Link>
      </motion.div>
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
export const SocialsIcons = ({mail=false}) => {
  const mapSocials = [
    {
      id:'mail',
      link:'mailto:nassim.elkhantour@gmail.com',
      icon:mailico
    },
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
    }
  ];

  /*
  {
    id:'instagram',
    link:'https://www.instagram.com/nassimelkhantour/',
    icon:instagram
  }*/
  return(
    <div className='socialsIcons'>
      {
      mapSocials.map( (item,i) => !mail && i === 0 ?
         <span key='nullsocial'></span> : 
         <HoverSquare size='25px' name={'hoversquare'+item.id} key={item.id} top='-55%' left='-18%'>
            <a className='ico' href={item.link} target='_blank' rel="noreferrer" >
              <span data-social={item.id} />
            </a>
          </HoverSquare> ) 
      }
    </div>
  );

}

export const CategoryMenu = () => {
  
  const location = useLocation();
  const [active, setActive] = useState();

  const onCategoryChange = (e) => {

    let category =  (typeof e === 'string') ? e : e.detail.category();
    if(category){
      changeHashTo(category);
      setActive(category);
    }

  }

  useEffect(()=>{

    window.addEventListener('categorychange', onCategoryChange);
    return () => window.removeEventListener('categorychange', onCategoryChange);

  },[]);



  return( 
    <motion.ul 
        key='category_menu'
        id='category_menu'
        initial={{opacity:0,y:-100}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        >
            {getCategories().map( (cat,i) => 
            <li key={`categoryMenu_${cat}`}>
              <HoverSquare size='40px' name={'hoversquare'+cat} top='-65%' left='-18%'>
              <a href={`#${cat}`} onClick={ () => onCategoryChange(cat) } className={ active === cat ? 'active' : undefined }><small>{cat}</small></a>
              </HoverSquare>
                {i < getCategories().length-1 && <span className='dottySeparator'></span>}
            </li>
          )}
        </motion.ul>
    
      );

}