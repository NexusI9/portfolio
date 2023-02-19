import { useNavigate } from 'react-router-dom';

const Cta = ({children, type='primary', to, onClick=() => 0, href=null }) => {
    const navigate = useNavigate();
    const onAnchorClick = () => {
      if(to){ navigate(to); }
      onClick(); 
    }
    return(
      <a onClick={ onAnchorClick } className={`cta ${type}` } href={href} target={href ? '_blank' : null}>
            {children}
      </a>
    );
  }

  export default Cta;