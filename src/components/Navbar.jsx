import Wrapper from '../assets/wrappers/Navbar';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        <div className='nav-links'>
            <NavLink to='/' className='nav-link'>
                Home
            </NavLink>
            <NavLink to='/about' className='nav-link'>
                About
            </NavLink>
            <NavLink to='/Newsletter' className='nav-link'>
                NewsLetter
            </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
