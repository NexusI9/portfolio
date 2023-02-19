import { HomeButton } from '../Inputs';

const Header = ({project}) => (
    <div className='projectHeader'>
      <HomeButton />
      <h2>{project.title}</h2>
      { project.desc && <small className='discrete'>{project.desc}</small>}
      <small className='discrete'>{project.date}</small>
    </div>
  );

export default Header;

