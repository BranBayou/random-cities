import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.api-ninjas.com/v1/city?name=all&limit=30';
const config = {
  headers: {
    'X-Api-Key': 'nXJn87kLhgCGxAj8hDZPYw==e2qMnfkkPacAT9an',
    'Content-Type': 'application/json',
  },
};

export const getCities = createAsyncThunk('cities/getCities', async (_, thunkAPI) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: config.headers,
    });

    if (!response.ok) {
      throw new Error('Error connecting to the API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const initialState = {
  cities: [],
  loading: false,
  selectedCity: '',
  searchedCity: '',
  error: '',
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    selectCity: (state, action) => ({ ...state, selectedCity: action.payload }),
    searchCity: (state, action) => ({ ...state, searchedCity: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCities.fulfilled, (state, action) => {
        const citiesList = Array.isArray(action.payload)
          ? action.payload.map((city) => ({
            city_name: city.name,
            city_latitude: city.latitude,
            city_longitude: city.longitude,
            city_country: city.country,
            city_is_capital: city.is_capital,
            city_population: city.population,
          }))
          : [];

        return {
          ...state,
          loading: false,
          cities: citiesList,
        };
      })
      .addCase(getCities.pending, (state) => ({
        ...state,
        loading: true,
        error: '',
      }))
      .addCase(getCities.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        loading: false,
      }));
  },
});

export const { searchCity, selectCity } = citiesSlice.actions;
export default citiesSlice.reducer;
