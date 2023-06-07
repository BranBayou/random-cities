import PropTypes from 'prop-types';

export default function City({ city }) {
  return (
    <div className="city-details" key={city.city_name}>
      <div className="rocket-info">
        <h3>{city.city_name}</h3>
      </div>
      <h2>{city.city_country}</h2>
    </div>
  );
}

City.propTypes = {
  city: PropTypes.shape({
    city_name: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    city_country: PropTypes.string.isRequired,
  }).isRequired,
};
