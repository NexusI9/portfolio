import Title from './Title';

const Body = ({flexDirection, flexAlignement, children, title, summary, id='', className, style={}}) => (
    <>
      {title && <Title label={title} summary={summary} />}
      <section id={id} className={"body compress " + (flexDirection || '')+' '+ (flexAlignement || '')+' '+(className||'')} style={style}>{children}</section>
    </>
  );

  export default Body;

  