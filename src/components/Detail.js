import PropTypes from 'prop-types';
import { BsArrowLeftCircle, BsMicFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export default function Detail({ city }) {
  return (
    <div>
      <div className="nav-bar">
        <div className="left">
          <NavLink className="navlink-arrow" to="/"><BsArrowLeftCircle className="back-arrow" /></NavLink>
        </div>
        <div>
          <h5>City details</h5>
        </div>
        <div className="search-bar">
          <BsMicFill />
          <IoMdSettings />
        </div>
      </div>
      <div className="header-con">
        <h2>Cities around the world.</h2>
      </div>
      <div className="ccity-info-detail" key={city.city_name}>
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
