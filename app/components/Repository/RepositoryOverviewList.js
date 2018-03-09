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
    const { repos } = this.props;
    return (
      <FlatList
        data={repos}
        renderItem={repo => this.renderItem(repo)}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

export default RepositoryOverviewList;
