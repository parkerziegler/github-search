import renderer from 'react-test-renderer';
import 'jest-styled-components';
import React from 'react';

import ScreenView from '../../../app/components/Primitives/ScreenView';

describe('<ScreenView />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ScreenView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
