import React from 'react';
import { shallow } from 'enzyme';

import RepositoryOwner from '../../../app/components/Repository/RepositoryOwner';

describe('<RepositoryOwner />', () => {
  it('renders correctly with all required props', () => {
    const wrapper = shallow(
      <RepositoryOwner
        name="Parker Ziegler"
        avatarUrl="mock"
        login="parkerziegler"
        onAvatarPress={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    const wrapper = shallow(
      <RepositoryOwner
        name="Parker Ziegler"
        avatarUrl="mock"
        login="parkerziegler"
        onAvatarPress={jest.fn()}
        height={60}
        width={60}
        containerStyle={{
          margin: '0 auto',
        }}
        flexDirection="row"
        infoContainerStyle={{
          alignItems: 'flex-end',
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
