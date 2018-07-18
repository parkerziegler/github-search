import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';

import { RepositoryOverview } from '../../../app/components/Repository/RepositoryOverview';

describe('<RepositoryOverview />', () => {
  it('renders correctly with all required props', () => {
    const wrapper = shallow(
      <RepositoryOverview
        name="github-search"
        description="A React Native app for searching Github users."
        navigation={{ navigate: jest.fn() }}
        handlePress={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Text).props().children).toEqual(
      'A React Native app for searching Github users.'
    );
    expect(wrapper.find(Button).props().title).toEqual('github-search');
  });

  it('executes handlePress when the button is pressed', () => {
    const navigate = jest.fn();
    const handlePress = jest.fn();

    const wrapper = shallow(
      <RepositoryOverview
        name="github-search"
        description="A React Native app for searching Github users."
        navigation={{ navigate }}
        handlePress={handlePress}
      />
    );

    const component = wrapper.instance();
    component.handleTitlePress();
    expect(handlePress).toHaveBeenCalledWith('github-search');
    expect(navigate).toHaveBeenCalledWith('RepositoryDetailScreen', {
      repositoryName: 'github-search',
    });
  });
});
