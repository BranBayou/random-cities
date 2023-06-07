import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../redux/cities/citiesSlice';
import Navigation from './Navigation';
import Header from './Header';
import City from './City';

function Home() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getCities());
    }
  }, [dispatch, cities.length]);

  return (
    <div className="cities-con">
      <Navigation />
      <Header />
      {cities && cities.map((city) => (
        <City key={city.city_name} city={city} />
      ))}
    </div>
  );
}

export default Home;
