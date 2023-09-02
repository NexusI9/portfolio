export const variantPlane = {
    initial: { y: '100%' },
    animate: { y: 0, transition: { duration: 0.3 } },
    exit: { y: '-100%', transition: { delay: 0.3, duration: 0.3 } },
}

export const variantPlaneTwo = {
    initial: { y: '100%' },
    animate: { y: 0, transition: { duration: 0.3 } },
    exit: { y: '-100%', transition: { delay: 0.5, duration: 0.3 } },
}

export const variantFrame = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.7, duration: 0.3, type: "tween", ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
}

export const variantWrapper = {
    initial: {},
    animate: { transition: { duration: 0.4, staggerChildren: 0.2 } },
    exit: { transition: { duration: 0.4, staggerChildren: 0.2 } }
}