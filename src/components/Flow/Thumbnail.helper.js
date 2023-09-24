export const srcSetFromPath = (name) =>  ({
    src:name,
    srcSet: `${name} 700w, ${name.replace('.webp', '-s.webp')} 450w`,
    sizes: '(max-width: 825px) 450px, 700px'
});