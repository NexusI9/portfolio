import { useRef, useState } from "react";
import { os, lerp, device } from '@/lib/utils';
import { lockHTML, checkBoundary } from "./Cartography.helper";
import CONFIG from './Cartography.config';
import STORE from './Cartography.store';

export default ({
    label = `to start navigating the userflow`,
    src,
    zoom = 1.4,
    className
}) => {

    const [active, setActive] = useState();
    const [drag, setDrag] = useState();
    const container = useRef();
    const picture = useRef();
    let interval = null;
    let delta = { x: 0, y: 0, scale: 0 };


    const move = () => {
        if(!container.current){ return; }
        const {width, height} = container.current.getBoundingClientRect();
        delta.x = checkBoundary(STORE.x, width) || delta.x;
        delta.y = checkBoundary(STORE.y, height) || delta.y;

        const sensitivity = 2.3 * 0.1887 ** STORE.scale;

        picture.current.style.transform = STORE.update({
            scale: lerp(STORE.scale, delta.scale, 0.1),
            x: lerp(STORE.x, STORE.x + delta.x, sensitivity),
            y: lerp(STORE.y, STORE.y + delta.y, sensitivity),
        });
    }


    //--Mouse related events
    const onMouseMove = (e) => {
        delta.x = e.movementX;
        delta.y = e.movementY;
    };

    const onMouseUp = () => {
        container.current?.removeEventListener('mousemove', onMouseMove);
    };

    const onMouseDown = () => {
        setDrag(true);
        container.current?.addEventListener('mousemove', onMouseMove)
    };

    const onWheel = (e) => {

        setDrag(true);

        delta.x = 0;
        delta.y = 0;

        if (e.deltaY > 0) { //zoom in
            if (STORE.scale < CONFIG.scale.max) {
                delta.scale = STORE.scale + CONFIG.scale.speed;
                //picture.current.style.transform = STORE.update({ scale: STORE.scale + CONFIG.scale.speed });
            }
        } else { //zoom out
            if (STORE.scale > CONFIG.scale.min) {
                delta.scale = STORE.scale - CONFIG.scale.speed;
                //picture.current.style.transform = STORE.update({ scale: STORE.scale - CONFIG.scale.speed });
            }
        }
    };

    const onMouseEnter = () => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    };

    //--Keyboard related events
    const onKeyDown = (e) => {
        if (e.code === 'MetaLeft' || e.code === 'ControlLeft') {
            //zoom in picture
            if(picture.current) picture.current.style.transform = STORE.update({scale:zoom});

            delta.scale = zoom;
            setActive(true);
            lockHTML(true);
            //subscribing events
            container.current?.addEventListener('mousedown', onMouseDown);
            container.current?.addEventListener('mouseup', onMouseUp);
            container.current?.addEventListener('wheel', onWheel);

        }

        //active loop
        if (!interval) interval = setInterval(move, 10);
    };

    const onKeyUp = () => {
        if (picture.current) picture.current.style.transform = STORE.update({ scale: 1, x: 0, y: 0 });
        lockHTML(false);
        setDrag(false);
        setActive(false);

        //reset interval
        if (interval) {
            clearInterval(interval);
            interval = null;
        }

        //unsubscribing events
        container.current?.removeEventListener('mousedown', onMouseDown);
        container.current?.removeEventListener('mousemove', onMouseMove);
        container.current?.removeEventListener('wheel', onWheel);
    };


    return (<div
        className={`cartography ${className && className} round ${active && 'active'} ${drag && 'drag'}`}
        ref={container}
        onMouseEnter={device() === "desktop" ? onMouseEnter : undefined}
    >
        {device() === "desktop" && <p className='cartography-label round'>{`press ${os() === 'MAC' ? '⌘' : 'CTRL'} + mouse ${label}`}</p> }
        {src && <img ref={picture} src={src} />}
        {<p className="hints"><small>scroll: zoom &nbsp; | &nbsp; click & drag: move</small></p>}
    </div>);


}