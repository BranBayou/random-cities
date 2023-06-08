import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { selectCity } from '../redux/cities/citiesSlice';

export default function City({ city }) {
  const dispatch = useDispatch();
  return (
    <div className="city-details" key={city.city_name}>
      <NavLink className="arrow-detail" to="/detail" onClick={() => dispatch(selectCity(city))}><BsArrowRightCircle /></NavLink>
      <div className="city-info">
        <h3>{city.city_name}</h3>
        <p className="population">{city.city_population}</p>
      </div>
    </div>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    city_name: PropTypes.string.isRequired,
    city_country: PropTypes.string.isRequired,
    city_population: PropTypes.number.isRequired,
  }).isRequired,
};
