import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { WebBrowser } from 'expo';
import { Text } from 'react-native';

import CommitHistory, {
  TouchableCommit,
} from '../../../../app/components/Repository/RepositoryDetails/CommitHistory';

describe('CommitHistory components', () => {
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

  describe('<CommitHistory />', () => {
    it('renders correctly with all required props', () => {
      const tree = renderer.create(<CommitHistory edges={edges} />);
      expect(tree.toJSON()).toMatchSnapshot();

      const testInstance = tree.root;
      expect(testInstance.findAllByType(TouchableCommit)).toHaveLength(2);
    });
  });

  describe('<TouchableCommitt />', () => {
    it("opens the device's WebBrowser when clicked", () => {
      WebBrowser.openBrowserAsync = jest.fn();
      const wrapper = shallow(
        <TouchableCommit commitUrl={edges[0].node.commitUrl}>
          <Text>{edges[0].node.oid}</Text>
        </TouchableCommit>
      );

      wrapper.props().onPress();

      expect(WebBrowser.openBrowserAsync).toBeCalledWith(
        edges[0].node.commitUrl
      );
    });
  });
});
