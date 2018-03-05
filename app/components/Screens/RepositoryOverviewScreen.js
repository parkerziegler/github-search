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
          containerStyle={null}
          flexDirection="row"
          infoContainerStyle={styles.infoContainer}
          onAvatarPress={() => navigation.navigate('AuthorScreen')}
        />
        <RepositoryOverviewList
          repos={repositoryOwner.repositories.nodes}
          navigation={navigation}
        />
        <Button
          small
          icon={{ name: 'search' }}
          title="Search"
          onPress={() => console.log('button')}
          backgroundColor="#222"
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
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
