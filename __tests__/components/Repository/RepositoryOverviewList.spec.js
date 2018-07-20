import React from 'react';
import { shallow } from 'enzyme';

import RepositoryOverviewList from '../../../app/components/Repository/RepositoryOverviewList';

describe('<RepositoryOverviewList />', () => {
  const repos = [
    {
      node: {
        name: 'd3-react-map',
        description:
          'A mapping app visualizing police shootings in the United States.',
        url: 'https://github.com/parkerziegler/d3-react-map',
      },
    },
    {
      node: {
        name: 'github-search',
        description: 'A React Native app for searching Github users.',
        url: 'https://github.com/parkerziegler/github-search',
      },
    },
  ];

  it('renders correctly with all required props', () => {
    const onEndReached = jest.fn();
    const navigation = { navigate: jest.fn() };
    const wrapper = shallow(
      <RepositoryOverviewList
        repos={repos}
        onEndReached={onEndReached}
        navigation={navigation}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
