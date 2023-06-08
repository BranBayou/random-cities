import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function Detail({ city }) {
  return (
    <div className="ccity-info-detail" key={city.city_name}>
      <NavLink className="navlink-arrow" to="/"><BsArrowLeftCircle className="back-arrow" /></NavLink>
      <div>
        <div className="detail-div">
          <p>City</p>
          <h3>{city.city_name}</h3>
        </div>
        <div className="detail-div">
          <p>Population</p>
          <p>{city.city_population}</p>
        </div>
        <div className="detail-div">
          <p>country</p>
          <p>{city.city_country}</p>
        </div>
        <div className="detail-div">
          <p>Latitude</p>
          <p>{city.city_latitude}</p>
        </div>
        <div className="detail-div">
          <p>Longitude</p>
          <p>{city.city_longitude}</p>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  city: PropTypes.shape({
    city_name: PropTypes.string.isRequired,
    city_country: PropTypes.string.isRequired,
    city_population: PropTypes.number.isRequired,
    city_latitude: PropTypes.number.isRequired,
    city_longitude: PropTypes.number.isRequired,
  }).isRequired,
};
