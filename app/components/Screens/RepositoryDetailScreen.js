import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { graphql, compose } from 'react-apollo';
import getSearch from '../../graphql/getSearch';
import getRepositoryName from '../../graphql/getRepositoryName';
import getRepositoryDetail from '../../graphql/getRepositoryDetail';
import LabeledIcon from '../Helpers/LabeledIcon';
import CommitHistory from '../Repository/RepositoryDetails/CommitHistory';

const RepositoryDetailScreen = props => {
  const { loading, repository } = props;

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.repoContainer}>
        <Text style={styles.repoName}>{repository.name}</Text>
        {repository.primaryLanguage && (
          <Text
            style={{
              fontSize: 21,
              fontWeight: '700',
              color: repository.primaryLanguage.color,
            }}>
            {repository.primaryLanguage.name}
          </Text>
        )}
        <Text style={styles.description}>{repository.description}</Text>
        <View style={styles.iconContainer}>
          <LabeledIcon
            iconName="star"
            iconType="font-awesome"
            iconSize={30}
            iconColor={'#222'}
            item={`${repository.stargazers.totalCount} stars`}
          />
          <LabeledIcon
            iconName="code-fork"
            iconType="font-awesome"
            iconSize={30}
            iconColor={'#222'}
            item={`${repository.forks.totalCount} forks`}
          />
        </View>
      </View>
      <View style={styles.historyContainer}>
        <Text style={styles.repoName}>Commit History</Text>
        <CommitHistory edges={repository.ref.target.history.edges} />
      </View>
    </View>
  );
};

export default compose(
  graphql(getSearch, {
    props: ({ data: { search: { input } } }) => ({
      input,
    }),
  }),
  graphql(getRepositoryName, {
    props: ({ data: { repositoryName: { name } } }) => ({
      name,
    }),
  }),
  graphql(getRepositoryDetail, {
    options: ({ input, name }) => ({
      variables: {
        owner: input,
        name,
      },
    }),
    props: ({ data: { loading, repository, error } }) => ({
      loading,
      repository,
      error,
    }),
  })
)(RepositoryDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  repoContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  repoName: {
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    margin: 5,
  },
  description: {
    color: '#6C7680',
    fontSize: 18,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  historyContainer: {
    display: 'flex',
    flex: 1,
  },
});
