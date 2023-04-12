

export const Options = ({ id, label }) => (
    <div className='label'><span className='ico' id={id}></span><p>{label}</p></div>
);

export const Switcher = (props) => {

  return (
    <section id='displaySwitch'>
        <Options id="poster" param="" hover={false} />
        <label className='switch'>
          <input id='isMosaic' type='checkbox' defaultChecked={true}/>
          <span className='slider round'></span>
        </label>
        <Options id="mosaic" param="" hover={false} />
    </section>
  );

}

export const SearchBar = () => (
    <section  className='search_bar suggest_container'>
      <span className="ico search"></span>
      <input className="field" id="search_input" autoComplete="off" placeholder="Type a movie, director, or a subject" type="text"/>
    </section>
);

export const DropDown = ({onChange, selected }) => {

  return(
    <ul className='dropdown' id='country_select' >
      <div value='china' >
        <li name='china' className='microFilter'>
          <div>
            <span className='ico' id='chinaflag'></span>
            <small>china</small>
          </div>
        </li>
      </div>
    </ul>
  );

}


export const Card = ({ visual, label, subtext, summary, link}) => (

      <div className='dirPopup_box'>
          {visual}
          <section>
            <p className='bold'>{label}</p>
            <p className='label'>{subtext}</p>
            <p className='label'>{summary}</p>
          </section>
      </div>

)


export const MicroFilters = ({ id, label, sort, name, onChange, defaultCheck=false}) => {

  const active = ( (sort && sort === id) || (!sort && id === 'name') ) ? "checked" : "";

  return(
     <section className='microFilter' id={"micro_"+id}>
      <input id={"micro_"+id+"_input"} data-sort={id} type='checkbox' name={name} onChange={ () => onChange(label) }  defaultChecked={defaultCheck}/>
      <label htmlFor={"micro_"+id+"_input"} >
        <span className='ico'></span>
        <small className='detail'>{label}</small>
      </label>
     </section>
  );
}
