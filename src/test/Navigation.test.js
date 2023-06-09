import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';
import store from '../redux/store';

test('Search city should be in home', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    </Provider>,
  );
  const searchInput = screen.getByPlaceholderText(/Search city/i);
  expect(searchInput).toBeInTheDocument();
});
