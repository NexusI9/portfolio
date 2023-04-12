import { useRouter } from 'next/router';

const Cta = ({children, type='primary', to, onClick=() => 0, href=null }) => {
    const router = useRouter();
    const onAnchorClick = () => {
      if(to){ router.push({pathname:to},undefined,{scroll:false}); }
      onClick(); 
    }
    return(
      <a onClick={ onAnchorClick } className={`cta ${type}` } href={href} target={href && !href.includes('mailto') ? '_blank' : null}>
            {children}
      </a>
    );
  }

  export default Cta;