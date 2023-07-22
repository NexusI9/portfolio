const Title = ({label, summary,id, className, style}) => (
    <header id={id || ''} className={"header compress "+ (className || '')} style={style || {}}>
      <h2>{label}</h2>
      {summary && <p>{summary}</p>}
    </header>
  );


  export default Title;