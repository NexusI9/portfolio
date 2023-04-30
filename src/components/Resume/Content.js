const Content = ({header, body, detail, separator=true }) => (
  <div>

      <div className='contentHeader'>{header}</div>
      {body}
      <small className='discrete detail'>{detail}</small>

      {separator && <span className='separator'></span>}
  </div>
);

export default Content;