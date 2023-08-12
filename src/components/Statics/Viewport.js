import { useEffect } from "react";

export default ({container, children, onEnter=()=>0, onExit, threshold=1/3}) => {

    useEffect(()=> {

        let state = 'out';
        const onScroll = () => {
            //on enter viewport
            if (container?.getBoundingClientRect().top < window.innerHeight * threshold && state === 'out') {
                state = 'in';
                onEnter();
                if(!onExit){
                    window.removeEventListener('scroll', onScroll)
                }
            }
            //on exit viewport
            if(container?.getBoundingClientRect().bottom < 0 && state === 'in'){
                state= 'out';
                if(onExit){ onExit() };
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);

    },[container]);

    return(children);
}