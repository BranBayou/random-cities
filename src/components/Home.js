import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../redux/cities/citiesSlice';
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
    <div className="cities-con">
      {filteredCities.map((city) => (
        <City key={city.city_name} city={city} />
      ))}
    </div>
  );
}

export default Home;
