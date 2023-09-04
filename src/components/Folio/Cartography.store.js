//store transform values & output style string
const STORE = {
    scale: 0,
    x: 0,
    y: 0,
    update: (transform = {}) => {
        const self = STORE;
        //store new value
        Object.keys(transform).map(key => STORE[key] = transform[key]);
        //update DOM transform
        return `scale3d(${self.scale},${self.scale},${self.scale}) translate3d(${self.x}px,${self.y}px,0)`;
    }
};

export default STORE;