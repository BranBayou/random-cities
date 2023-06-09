import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('should render Home', () => {
  const component = renderer.create(
    <Provider store={store} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render city detail', () => {
  const componentDetail = renderer
    .create(<Provider store={store} />)
    .toJSON();
  expect(componentDetail).toMatchSnapshot();
});
