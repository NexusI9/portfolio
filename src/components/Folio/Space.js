const Space = ({type, hideMobile}) => (<span className={(type == 'small' ? 's' : '')+"blank"+(hideMobile ? 'mobile' :'')}></span>);

export default Space;