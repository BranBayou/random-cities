import reducer from '../redux/cities/citiesSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    {
      cities: [],
      loading: false,
      selectedCity: '',
      searchedCity: '',
      error: '',
    },
  );
});
