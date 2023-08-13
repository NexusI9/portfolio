import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from 'framer-motion';


export default ({ entries, onChange = e => 0 }) => {

    const [active, setActive] = useState(entries[0]);
    const [open, setOpen] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        setOpen(false);
        onChange({ entries, active });
    }, [active]);

    useEffect(()=> {
        if(open){
            controls.start({y:0, opacity:1});
        }else{
            controls.start({y:-20, opacity:0});
        }
    },[open]);

    return (
        <div className={`dropdown ${open ? 'active' : ''}`}>
            <p onClick={() => setOpen(!open)}>{active} 
            <svg width="14" height="14" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 3.5L5 6L7.5 3.5L8.5 4L5 7.5L1.5 4L2.5 3.5Z"/>
            </svg>
            </p>
            <AnimatePresence>
                <motion.ul
                    key={`dropdown${entries.join('')}`}
                    className="card"
                    inital={{ y: 80, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                >
                    {entries
                        .filter(item => item !== active)
                        .map((item, i) =>
                            <li
                                onClick={() => setActive(item)}
                                key={`entry${item}`}
                            >{item}</li>)
                    }
                </motion.ul>
            </AnimatePresence>
        </div>
    );
}