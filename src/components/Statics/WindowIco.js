import { NavLink } from 'react-router-dom';

const WindowIco = () => (
  <NavLink to='/map' activeclassname='active'>
    <div id="windowIco">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </NavLink>
);

export default WindowIco;