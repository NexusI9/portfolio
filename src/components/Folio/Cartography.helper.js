export function checkBoundary(value, max, threshold = 4) {

    //X postition boundary
    if (value > max / threshold) {
        return -1;
    } else if (value < -0.5*max * 2/3) {
        return +1;
    }
    
    return false;

}


export function lockHTML(lock = true){
    const html = document.querySelector('html');

    if (lock) {
        html.style.overflow = 'hidden';
        html.style.height = '100%';
    } else {
        html.style.overflow = null;
        html.style.height = null;
    }
}