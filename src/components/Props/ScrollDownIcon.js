import { motion } from 'framer-motion';

export default () => (
    <motion.section 
    exit={{opacity:0, y:-20, transition:{duration:0.4}}}
    class="scroll-icon-wrapper example--2"
    >
        <span class="scroll-icon">
            <span class="scroll-icon__dot"></span>
        </span>
        <p>scroll down</p>
    </motion.section>
);