import { useDispatch } from 'react-redux';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { searchCity } from '../redux/cities/citiesSlice';

export default function Navigation() {
  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <div className="left">
        <h2 className="logo-text">
          <span className="logo-ty">C</span>
          it
          <span className="logo-ty">y</span>
        </h2>
        <NavLink to="/">
          <AiOutlineHome className="home-icon" />
        </NavLink>
      </div>
      <div className="search-bar">
        <input className="search" onChange={(event) => dispatch(searchCity(event.target.value))} type="search" placeholder="Search city" />
        <CiSearch className="search-icon" />
      </div>
    </div>
  );
}
