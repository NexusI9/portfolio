import Persona from "./Persona"

export default ({personas}) => (
    <div className='persona-slider'>
        {personas.map( (p,i) => <Persona key={`${p.name||i}personacard`} {...p}/>)}
    </div>
)