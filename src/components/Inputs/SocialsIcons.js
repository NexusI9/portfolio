import { HoverSquare } from '../Props';

import behance from '../../assets/icons/behance.svg';
import instagram from '../../assets/icons/instagram.svg';
import artstation from '../../assets/icons/artstation.svg';
import twitter from '../../assets/icons/twitter.svg';
import vimeo from '../../assets/icons/vimeo.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import mailico from '../../assets/icons/mail.svg';


const SocialsIcons = ({mail=false}) => {

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

  export default SocialsIcons;