const List = ({li}) => (
  <ul>
    {li.map( (item,i) => <li key={Math.random()+i}><small>{item}</small></li>)}
  </ul>
);

export default List;