const Content = ({children, innerRef, onLoad}) => ( <div className='projectWrapper' ref={innerRef} > {children} </div> );
export default Content;