
const Content = ({header, body, detail, icon, card, date, visual, href, className='' }) => {

  const DynamicComponent = href ? 'a' : 'div';
  return (
    <DynamicComponent className={`content default ${(card ? 'card' : '')} ${(href ? 'linked' : '')} ${className}`}>
      {icon && <img className='contentIcon' src={icon}/>} 
      {visual && <img className="contentVisual" src={visual}/>}
        <div className='contentHeader'>
          {date && <small className="contentDate color-primary"><b>{date}</b></small>}
          {header && header}
          {detail && <small className='discrete detail'>{detail}</small> } 
        </div>
      {icon && <span className="path-stroke"></span> }
      {body && <div className='contentBody'>{body}</div> }
    </DynamicComponent>
);
}

export default Content;