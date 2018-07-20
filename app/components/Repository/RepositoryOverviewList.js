import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

// eslint-disable-next-line import/no-named-as-default
import RepositoryOverview from './RepositoryOverview';

class RepositoryOverviewList extends React.Component {
  static propTypes = {
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string.isRequired,
          description: PropTypes.string,
          url: PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
    navigation: PropTypes.object.isRequired,
    onEndReached: PropTypes.func.isRequired,
  };

  renderItem = ({
    item: {
      node: { name, description, url },
    },
  }) => {
    const { navigation } = this.props;
    return (
      <RepositoryOverview
        name={name}
        description={description}
        url={url}
        navigation={navigation}
      />
    );
  };

  render() {
    const { repos, onEndReached } = this.props;
    return (
      <FlatList
        style={{ flex: 1 }}
        data={repos}
        renderItem={(repo) => this.renderItem(repo)}
        keyExtractor={(item, index) => index}
        onEndReached={onEndReached}
      />
    );
  }
}

export default RepositoryOverviewList;
