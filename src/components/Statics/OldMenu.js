import { NavLink } from 'react-router-dom';
import WindowIco from './WindowIco';

const OldMenu = ({projects}) => (
    <div id="menu">
      <div className='topArea'>
        <WindowIco />
        <ul>
          <NavLink to='/' activeclassname="active"><li><p>work</p></li></NavLink>
          <NavLink to='/resume' activeclassname="active"><li><p>resume</p></li></NavLink>
        </ul>
      </div>
    </div>
  );

  export default OldMenu;