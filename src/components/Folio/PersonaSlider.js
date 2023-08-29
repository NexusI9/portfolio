import Persona from "./Persona"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";


export default ({ personas }) => {

    const slider = useRef();
    const [width, setWidth] = useState();

    useEffect(() => {
       if(slider.current){
        setWidth( slider.current.getBoundingClientRect().width );
       }
    }, []);

    return (
        <motion.div
            className='persona-slider'
            ref={slider}
        >
            {       console.log(width)}
            <motion.div
                drag='x'
                dragConstraints={{left:-1*width/1.55, right: 0}}
            >
                {personas.map((p, i) => <Persona key={`${p.name || i}personacard`} {...p} />)}
            </motion.div>
        </motion.div>
    )
};
