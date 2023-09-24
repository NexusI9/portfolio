import { useRouter } from 'next/router';
import Link from 'next/link';

const Cta = ({ children, type = 'primary', onClick = () => 0, href, newTab=false }) => {
  const router = useRouter();
  const onAnchorClick = () => {
    //if(href){ router.push({pathname:href},undefined,{scroll:false}); }
    onClick();
  }
  return (<>
    {href && <Link onClick={onClick} className={`cta ${type}`} href={href} target={newTab && '_blank' || null}>
      {children}
    </Link>}
  </>);
}

export default Cta;