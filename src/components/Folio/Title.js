const Title = ({label, summary,id, className, style}) => (
    <section id={id || ''} className={"header compress "+ (className || '')} style={style || {}}>
      <h2>{label}</h2>
      <p>{summary}</p>
    </section>
  );


  export default Title;