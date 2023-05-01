const List = ({li}) => (
  <ul>
    {li.map( (item,i) => <li key={Math.random()+i}>{item}</li>)}
  </ul>
);

export default List;