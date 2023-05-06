const Content = ({header, body, detail, icon, card, date, visual }) => (
      <div className={"content default " + (card ? 'card' : '')}>
        {icon && <img className='contentIcon' src={icon}/>} 
        {visual && <img className="contentVisual" src={visual}/>}
          <div className='contentHeader'>
            {date && <small className="contentDate color-primary"><b>{date}</b></small>}
            {header && header}
            {detail && <small className='discrete detail'>{detail}</small> } 
          </div>
        {icon && <span className="path-stroke"></span> }
        {body && <div className='contentBody'>{body}</div> }
      </div>
);

export default Content;