import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef, Fragment } from 'react';
import { gsap } from 'gsap';
import { getCategories, changeHashTo, setFaviconColor, getColorOfCategory } from '../../lib/utils';
import { HoverSquare } from '../props';


import behance from '../../assets/icons/behance.svg';
import instagram from '../../assets/icons/instagram.svg';
import artstation from '../../assets/icons/artstation.svg';
import twitter from '../../assets/icons/twitter.svg';
import vimeo from '../../assets/icons/vimeo.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import mailico from '../../assets/icons/mail.svg';

import leftside from '../../assets/catmenu_left.svg';
import rightside from '../../assets/catmenu_right.svg';

export const BackButton = () => (

  <Link to='/'>
    <motion.div
    id='backButton'
    initial={{x:-200, opacity:0}}
    animate={{x:0, opacity:1, transition:{duration:0.9, type:'tween', ease:'easeOut', delay:0.3}}}
    exit={{y:-200, opacity:0, transition:{duration:0.4}}}
    >
      <small>back to homepage</small>
    </motion.div>
  </Link>

);

export const Button = ({type="checkbox", innerRef, name, onClick, label, ico, id, active=false, href, target=''}) => (
  <>
    <input type={type} name={name} id={id} defaultChecked={active} />
    <label ref={innerRef} htmlFor={id} className='cta' onClick={ () => onClick ? onClick({name,label,ico,id,type}) : 0 }>
        {ico ?
        <div className='label'>
          { typeof ico === 'string' ? <span className='ico'><img src={ico} /></span> : ico }
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

export const Cta = ({children, type='primary', to, onClick=() => 0 }) => {
  const navigate = useNavigate();
  const onAnchorClick = () => {
    if(to){ navigate(to); }
    onClick(); 
  }
  return(
    <a onClick={ onAnchorClick } className={`cta ${type}` }>
          {children}
    </a>
  );
}

export const HomeButton = ({latestHref=''}) => (
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

  const onSocialClick = (item) => {
    window.gtag('event',`click_social_${item}`,{event_category:'click', event_label:`Click on social icon: ${item}`});
  };

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
            <a className='ico' href={item.link} target='_blank' rel="noreferrer" onClick={ () => onSocialClick(item.id) }>
              <span data-social={item.id} />
            </a>
          </HoverSquare> ) 
      }
    </div>
  );

}

export const CategoryMenu = () => {
  

  const [active, setActive] = useState();
  const lastInteraction = useRef();

  const updateColor = (category) => {
    //switch body attribute for CSS change to take effects
    const color = getColorOfCategory(category);
    //const favicon = document.getElementById('favicon');
    document.querySelector("body").setAttribute('data-theme',color);
    //setFaviconColor(favicon,color);
  }

  const goToCategory = (cat) => { //listen to click change, so we store the new category in ref and set it active in Scroll event listener below
    lastInteraction.current = 'click';
    setActive(cat);
    changeHashTo(cat); 
    updateColor(cat);
    document.getElementById(cat)?.scrollIntoView({behavior:'smooth'});
  }

  const onCategoryChange = (e) => { //listen to global category change (on scroll)
    const category = (typeof e === 'string') ? e : e.detail.category();
    if(category && lastInteraction.current != 'click'){
      changeHashTo(category); 
      setActive(category);
      updateColor(category);
    }

  }
  
  const onCategoryClick = (e) => {
    goToCategory(e);
    window.gtag('event',`click_menu_category_${e}`,{event_category:'click', event_label:`Click on category menu: ${e}`});
  }

  useEffect(()=>{

    let scrollTimeout;
    const onScroll = () => {
      //only setActive when scroll is done;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() =>  { 
        lastInteraction.current = null;
      }, 100);
    }

    

    window.addEventListener('scroll', onScroll);
    window.addEventListener('categorychange', onCategoryChange);

    return () =>{ 
      window.removeEventListener('categorychange', onCategoryChange); 
      window.removeEventListener('scroll', onScroll);
    }

  },[]);



  return( 
    <motion.div 
        key='category_menu'
        id='category_menu'
        initial={{opacity:0,y:-100}}
        animate={{opacity:1, y:0, transition:{type:'spring', stiffness: 100} }}
        exit={{opacity:0, y:-100, transition:{type:'spring', stiffness: 100} }}
        >
          <ul>
              {getCategories().map( (cat,i) => 
              <Fragment key={`categoryMenu_${cat}`}>
                <li>
                  <a onClick={ () => onCategoryClick(cat) } className={ active === cat ? 'active' : undefined }>
                    <small className='cacheBold'><b>{cat}</b></small>
                    <small>{cat}</small>
                    </a>
                </li>
                {i < getCategories().length-1 && <span className='lineSeparator'></span>}
              </Fragment>
          )}
           </ul>
        </motion.div>
    
      );

}