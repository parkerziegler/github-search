import React from 'react';
import { graphql, compose } from 'react-apollo';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Error from '../Primitives/Error';
import ScreenView from '../Primitives/ScreenView';
import RepositoryOwner from '../Repository/RepositoryOwner';
import RepositoryOverviewList from '../Repository/RepositoryOverviewList';
import getRepositoryOverview from '../../graphql/getRepositoryOverview';
import getSearch from '../../graphql/getSearch';

class RepositoryOverviewScreen extends React.Component {
  onFetchMore = () => {
    const {
      data: {
        fetchMore,
        repositoryOwner: {
          repositories: { edges },
        },
      },
    } = this.props;
    const cursor = edges[edges.length - 1].cursor;

    fetchMore({
      variables: {
        cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const prevRepos = previousResult.repositoryOwner.repositories.edges;
        const newRepos = fetchMoreResult.repositoryOwner.repositories.edges;
        const edges = [...prevRepos, ...newRepos];

        return {
          ...previousResult,
          repositoryOwner: {
            ...previousResult.repositoryOwner,
            repositories: {
              ...previousResult.repositoryOwner.repositories,
              edges,
            },
          },
        };
      },
    });
  };

  render() {
    const {
      data: { loading, error, repositoryOwner, user },
      navigation,
    } = this.props;

    if (loading) {
      return (
        <ScreenView>
          <ActivityIndicator size="large" color="#222" />
        </ScreenView>
      );
    }

    if (!repositoryOwner || error) {
      return <Error navigation={navigation} />;
    }

    return (
      <ScreenView>
        <RepositoryOwner
          url={repositoryOwner.url}
          avatarUrl={repositoryOwner.avatarUrl}
          name={user.name}
          login={user.login}
          height={75}
          width={75}
          flexDirection="row"
          infoContainerStyle={styles.infoContainer}
          onAvatarPress={() => navigation.navigate('AuthorScreen')}
        />
        <RepositoryOverviewList
          repos={repositoryOwner.repositories.edges}
          navigation={navigation}
          onEndReached={this.onFetchMore}
        />
      </ScreenView>
    );
  }
}

export default compose(
  graphql(getSearch, {
    props: ({
      data: {
        search: { input },
      },
    }) => ({
      input,
    }),
  }),
  graphql(getRepositoryOverview, {
    options: ({ input }) => ({
      variables: {
        login: input,
        cursor: null,
      },
      errorPolicy: 'all',
    }),
  })
)(RepositoryOverviewScreen);

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
