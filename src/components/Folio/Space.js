const Space = ({type, hideMobile}) => (<div className={(type == 'small' ? 's' : '')+"blank"+(hideMobile ? 'mobile' :'')}></div>);

export default Space;