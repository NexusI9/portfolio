import Content from './Content';

const Techni = () => (
  <div className='techniSection'>
  <Content header={<small><b>Photoshop, Illustrator, Premiere Pro, Figma, XD, After Effects, InDesign, Audition, Logic Pro X</b></small>}/>
  <Content header={<small><b>HTML, CSS, Javascript, Python, SQL (basic), PHP, C# (basic)</b></small>}/>
  <Content header={<small><b>Maya, ZBrush, Blender, Substance Painter, Unity</b></small>}/>
  <Content header={<small><b>TouchDesigner, Resolume Arena, MaxMSP</b></small>} separator={false}/>
  </div>
);

export default Techni;