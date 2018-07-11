import React from 'react';
import { FlatList } from 'react-native';

import RepositoryOverview from './RepositoryOverview';

class RepositoryOverviewList extends React.Component {
  renderItem = ({ item: { node: { name, description, url } } }) => {
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
        renderItem={repo => this.renderItem(repo)}
        keyExtractor={(item, index) => index}
        onEndReached={onEndReached}
      />
    );
  }
}

export default RepositoryOverviewList;
