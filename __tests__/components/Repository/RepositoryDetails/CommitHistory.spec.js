import React from 'react';
import renderer from 'react-test-renderer';

import CommitHistory, {
  TouchableCommit,
} from '../../../../app/components/Repository/RepositoryDetails/CommitHistory';

describe('<CommitHistory />', () => {
  const edges = [
    {
      node: {
        oid: '12345',
        message: 'Commit me please!',
        commitUrl: 'mycommit.github.io',
      },
    },
    {
      node: {
        oid: '54321',
        message: 'Maybe commit me?',
        commitUrl: 'notmycommit.github.io',
      },
    },
  ];

  it('renders correctly with all required props', () => {
    const tree = renderer.create(<CommitHistory edges={edges} />);
    expect(tree.toJSON()).toMatchSnapshot();

    const testInstance = tree.root;
    expect(testInstance.findAllByType(TouchableCommit)).toHaveLength(2);
  });
});
