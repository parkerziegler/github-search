import React from 'react';
import { graphql, compose } from 'react-apollo';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Error from '../Helpers/Error';
import RepositoryOwner from '../Repository/RepositoryOwner';
import RepositoryOverviewList from '../Repository/RepositoryOverviewList';
import getRepositoryOverview from '../../graphql/getRepositoryOverview';
import getSearch from '../../graphql/getSearch';

class RepositoryOverviewScreen extends React.Component {
  render() {
    const { data, navigation } = this.props;

    if (data.loading || data.error) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }

    if (!data.repositoryOwner) {
      return <Error navigation={navigation} />;
    }

    return (
      <View style={styles.container}>
        <RepositoryOwner
          url={data.repositoryOwner.url}
          avatarUrl={data.repositoryOwner.avatarUrl}
          name={data.user.name}
          login={data.user.login}
          height={75}
          width={75}
          containerStyle={null}
          flexDirection="row"
          infoContainerStyle={styles.infoContainer}
          onAvatarPress={() => navigation.navigate('AuthorScreen')}
        />
        <RepositoryOverviewList
          repos={data.repositoryOwner.repositories.nodes}
          navigation={navigation}
        />
      </View>
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
      },
      errorPolicy: 'all',
    }),
  })
)(RepositoryOverviewScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  infoContainer: {
    display: 'flex',
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
