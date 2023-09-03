import { useRef, useState } from "react";
import { os } from '@/lib/utils';

const CONFIG = {
    scale: {
        max:2.3,
        min:1,
        speed:0.2
    },

}

//store transform values & output style string
const STORE = { 
    scale: 0, 
    x: 0, 
    y: 0,
    update: (transform) => { 
        const self = STORE;
        //store new value
        Object.keys(transform).map( key => STORE[key] = transform[key]); 
        //update DOM transform
        return `scale3d(${self.scale},${self.scale},${self.scale}) translate3d(${self.x}px,${self.y}px,0)`;
    }
};

export default ({
    label = `to start navigating the userflow`,
    src,
    zoom = 1.4
}) => {

    const [active, setActive] = useState();
    const container = useRef();
    const picture = useRef();

    const lockHTML = (lock = true) => {
        const html = document.querySelector('html');

        if (lock) {
            html.style.overflow = 'hidden';
            html.style.height = '100%';
        } else {
            html.style.overflow = null;
            html.style.height = null;
        }
    }


    //--Mouse related events
    const onMouseMove = (e) => {
        console.log(STORE.x)
        const boundary = container.current.getBoundingClientRect();

        if (picture.current){
            picture.current.style.transform = STORE.update({
                x: (STORE.x < boundary.width/3) && e.layerX || (boundary.width/3)-1
            });
        } 
    }
    const onMouseUp = () => container.current?.removeEventListener('mousemove', onMouseMove);
    const onMouseDown = () => container.current?.addEventListener('mousemove', onMouseMove);

    const onWheel = (e) => {

        if (e.deltaY > 0) { //zoom in
            if( STORE.scale < CONFIG.scale.max ){
                picture.current.style.transform = STORE.update({scale: STORE.scale+CONFIG.scale.speed});
            }
        } else { //zoom out
            if( STORE.scale > CONFIG.scale.min ){
                picture.current.style.transform = STORE.update({scale: STORE.scale-CONFIG.scale.speed});
            }
        }
    }

    const onMouseEnter = () => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    }

    const onMouseLeave = () => {
        setActive(false);
        window.removeEventListener('keydown', onKeyDown);
    }

    //--Keyboard related events
    const onKeyDown = (e) => {
        if (e.code === 'MetaLeft' || e.code === 'ControlLeft') {
            //zoom in picture
            if (picture.current) picture.current.style.transform = STORE.update({scale: zoom});
            setActive(true);
            lockHTML(true);
            //subscribing events
            container.current?.addEventListener('mousedown', onMouseDown);
            container.current?.addEventListener('mouseup', onMouseUp);
            container.current?.addEventListener('wheel', onWheel);

        }
    }

    const onKeyUp = () => {
        if (picture.current) picture.current.style.transform = STORE.update({scale:1, x:0, y:0});
        lockHTML(false);
        setActive(false);
        //unsubscribing events
        container.current?.removeEventListener('mousedown', onMouseDown);
        container.current?.removeEventListener('mousemove', onMouseMove);
        container.current?.removeEventListener('wheel', onWheel);
    }


    return (<div
        className={`cartography round ${active && 'active'}`}
        ref={container}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <p className='cartography-label round'>{`press ${os() === 'MAC' ? '⌘' : 'CTRL'} + mouse ${label}`}</p>
        {src && <img
            ref={picture}
            src={src}
        />}
    </div>);


}