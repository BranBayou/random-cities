import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/citiesSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

export default store;
