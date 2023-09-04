import { motion } from 'framer-motion';

export default () => (
    <motion.section 
    exit={{opacity:0, y:-20, transition:{duration:0.4}}}
    className="scroll-icon-wrapper example--2"
    >
        <span className="scroll-icon">
            <span className="scroll-icon__dot"></span>
        </span>
        <p>scroll down</p>
    </motion.section>
);