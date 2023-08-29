const Pointer = ({side='left', barwidth='50%', title='', description='', style={}, theme="light" }) => (
    <div className={'pointer'} style={style} data-side={side} data-theme={theme}>
      {side === 'left' && <span></span>}
      <h5>{title}</h5>
      {side === 'right' && <span></span>}
      {side === 'left' && <br />}
      <small>{description}</small>
      {side === 'right' && <br />}
    </div>
);


export default Pointer;