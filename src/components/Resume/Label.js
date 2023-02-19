const Label = ({ico,children}) => (

  <div style={{display:'flex', alignItems:'center'}}>
      <span className='ico'><img src={ico}/></span>
      <b>
      {children}
      </b>
  </div>
);

export default Label;