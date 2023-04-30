const Button = ({type="checkbox", innerRef, name, onClick, label, ico, id, active=false, href, target=''}) => (
    <>
      <input type={type} name={name} id={id} defaultChecked={active} />
      <label ref={innerRef} htmlFor={id} onClick={ () => onClick ? onClick({name,label,ico,id,type}) : 0 }>
          {ico ?
          <div className='label'>
            { typeof ico === 'string' ? <span className='ico'><img src={ico} /></span> : ico }
            { href ?
              <a href={href} target={target}>
              <small>{label}</small>
              </a> :
              <small>{label}</small>
            }
  
          </div>
          :
          <small>{label}</small>
        }
  
      </label>
    </>
  );

  export default Button;
