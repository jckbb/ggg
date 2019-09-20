/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../src/index';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
it('renders correctly', () => {
  const wrapper = shallow(<App/>);

  expect(wrapper).toMatchSnapshot();
});
