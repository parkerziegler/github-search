import renderer from 'react-test-renderer';
import 'jest-styled-components';
import React from 'react';

import TextInput from '../../../app/components/Primitives/TextInput';

describe('<TextInput />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
