import React from 'react';
import { ActivityIndicator } from 'react-native';
import { shallow } from 'enzyme';

import { AuthorScreen } from '../../../app/components/Screens/AuthorScreen';

describe('<AuthorScreen />', () => {
  const props = {
    data: {
      user: {
        url: 'https://github.com/parkerziegler',
        avatarUrl: 'https://github.com/parkerziegler/avatar.png',
        name: 'Parker Ziegler',
        login: 'parkerziegler',
        bio: 'Software Engineer @Formidable Labs',
        company: 'Formidable Labs',
        location: 'Seattle, WA',
        followers: {
          totalCount: 41,
        },
        repositories: {
          totalCount: 25,
        },
        websiteUrl: 'https://parkerziegler.com',
        organizations: {
          edges: [],
        },
      },
    },
  };

  it('renders the loading screen if data is loading', () => {
    const wrapper = shallow(<AuthorScreen data={{ loading: true }} />);
    expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
  });

  it('renders information on the GitHub user', () => {
    const wrapper = shallow(<AuthorScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('RepositoryOwner')).toHaveLength(1);
    expect(wrapper.find('AuthorOverview')).toHaveLength(1);
  });
});
