const Pointer = ({side='left', barwidth='50%', title='', description='', style={} }) => (
    <div className={'pointer'} style={style} data-side={side}>
      {side === 'left' && <span></span>}
      <h5>{title}</h5>
      {side === 'right' && <span></span>}
      {side === 'left' && <br />}
      <small>{description}</small>
      {side === 'right' && <br />}
    </div>
);


export default Pointer;