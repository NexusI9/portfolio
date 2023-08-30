import Persona from "./Persona"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";


export default ({ personas }) => {

    const slider = useRef();
    const [width, setWidth] = useState();

    useEffect(() => {
       if(slider.current){
        let { width } = slider.current.getBoundingClientRect();
        if(window.matchMedia('(min-width: 825px)').matches){
            setWidth( -1*width/1.55 );
        }else{
            setWidth( -1*width/1.4 );
        }
     
       }
    }, []);

    return (
        <motion.div
            className='persona-slider'
            ref={slider}
        >
            <motion.div
                drag='x'
                dragConstraints={{left:width, right: 0}}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
            >
                {personas.map((p, i) => <Persona key={`${p.name || i}personacard`} {...p} />)}
            </motion.div>
        </motion.div>
    )
};
