import { useEffect, useRef, useState } from "react";
import { os } from '@/lib/utils';

export default ({ 
    label = `press ${ os() === 'MAC' ? '⌘' : 'CTRL'} + mouse to start navigating the userflow`,
    src,
    className,
    style
}) => {

    const [start, setStart] = useState();
    const [active, setActive] = useState();
    const container = useRef();

    const onKeyDown = (e) => {
        console.log(e);
        if(e.keyCode === 'MetaLeft' || e.keyCode === 'ControlLeft'){
            setActive(true);
        }
    }

    const onMouseEnter = () => {
        container.current?.addEventListener('keydown', onKeyDown );
    }

    const onMouseLeave = () => {
        container.current?.removeEventListener('keydown', onKeyDown );
        setActive(false);
    }

    return (<div
        className="cartography round"
        ref={container}
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
    >
        {!active && <p className="cartography-label round">{label}</p>}
        {src && <img src={src}/>}
    </div>);


}