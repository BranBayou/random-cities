import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiSearch } from 'react-icons/ci';
import { BsArrowLeftCircle, BsMicFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { getCities, searchCity } from '../redux/cities/citiesSlice';
import City from './City';

function Home() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const loading = useSelector((state) => state.cities.loading);
  const error = useSelector((state) => state.cities.error);
  const searchedCity = useSelector((state) => state.cities.searchedCity);

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getCities());
    }
  }, [dispatch, cities.length]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Something went wrong ...</h3>;
  }

  // eslint-disable-next-line max-len
  const filteredCities = searchedCity
    ? cities.filter((city) => {
      const cityName = city.city_name.toLowerCase();
      const searchValue = searchedCity.toLowerCase();
      return cityName.includes(searchValue);
    })
    : cities;

  return (
    <div>
      <div className="nav-bar">
        <div className="left">
          <NavLink className="navlink-arrow" to="/"><BsArrowLeftCircle className="back-arrow" /></NavLink>
          <p>2022</p>
        </div>
        <div>
          <h5>All cities</h5>
        </div>
        <div>
          <BsMicFill className="mic-icon" />
          <IoMdSettings />
        </div>
      </div>
      <div className="header-con">
        <h2>Cities around the world.</h2>
        <div className="search-bar">
          <input className="search" onChange={(event) => dispatch(searchCity(event.target.value))} type="search" placeholder="Search city" />
          <CiSearch className="search-icon" />
        </div>
      </div>
      <div className="cities-con">
        {filteredCities.map((city) => (
          <City key={city.city_name} city={city} />
        ))}
      </div>
    </div>
  );
}

export default Home;
