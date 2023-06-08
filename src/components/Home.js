import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../redux/cities/citiesSlice';
import City from './City';

function Home() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const searchedCity = useSelector((state) => state.cities.searchedCity);

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getCities());
    }
  }, [dispatch, cities.length]);

  // eslint-disable-next-line max-len
  const filteredCities = cities.filter((city) => city.city_name.toLowerCase().includes(searchedCity.toLowerCase()));

  return (
    <div className="cities-con">
      {filteredCities.map((city) => (
        <City key={city.city_name} city={city} />
      ))}
    </div>
  );
}

export default Home;
