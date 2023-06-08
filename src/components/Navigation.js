import { useDispatch } from 'react-redux';
import { CiSearch } from 'react-icons/ci';
import { searchCity } from '../redux/cities/citiesSlice';

export default function Navigation() {
  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <h2 className="logo-text">
        <span className="logo-ty">C</span>
        it
        <span className="logo-ty">y</span>
      </h2>
      <div className="search-bar">
        <input className="search" onChange={(event) => dispatch(searchCity(event.target.value))} type="search" placeholder="Search user ..." />
        <CiSearch className="search-icon" />
      </div>
    </div>
  );
}
