import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';

import Error from '../../../app/components/Primitives/Error';
import { Button } from 'react-native-elements';

describe('<Error />', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly with all required props', () => {
    const tree = renderer.create(<Error navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('navigates to SearchScreen onPress', () => {
    const wrapper = shallow(<Error navigation={navigation} />);
    wrapper
      .find(Button)
      .props()
      .onPress();
    expect(navigation.navigate).toHaveBeenCalledWith('SearchScreen');
  });
});
