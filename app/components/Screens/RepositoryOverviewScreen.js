import React from 'react';
import { graphql, compose } from 'react-apollo';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import Error from '../Primitives/Error';
import ScreenView from '../Primitives/ScreenView';
import RepositoryOwner from '../Repository/RepositoryOwner';
import RepositoryOverviewList from '../Repository/RepositoryOverviewList';
import getRepositoryOverview from '../../graphql/getRepositoryOverview';
import getSearch from '../../graphql/getSearch';

class RepositoryOverviewScreen extends React.Component {
  onFetchMore = () => {
    const { data: { fetchMore, repositoryOwner } } = this.props;
    const reposLength = repositoryOwner.repositories.edges.length;
    const cursor = repositoryOwner.repositories.edges[reposLength - 1].cursor;

    fetchMore({
      variables: {
        login: 'parkerziegler',
        cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log(fetchMoreResult);
        return previousResult;
      },
    });
  };

  render() {
    const {
      data: { loading, error, repositoryOwner, user },
      navigation,
    } = this.props;
    console.log(this.props.data);

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
          containerStyle={null}
          flexDirection="row"
          infoContainerStyle={styles.infoContainer}
          onAvatarPress={() => navigation.navigate('AuthorScreen')}
        />
        <RepositoryOverviewList
          repos={repositoryOwner.repositories.edges}
          navigation={navigation}
        />
        <Button
          small
          icon={{ name: 'search' }}
          title="Search"
          onPress={this.onFetchMore}
          backgroundColor="#fff"
          buttonStyle={styles.button}
        />
      </ScreenView>
    );
  }
}

export default compose(
  graphql(getSearch, {
    props: ({ data: { search: { input } } }) => ({
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
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#222',
    borderWidth: 1,
  },
});
