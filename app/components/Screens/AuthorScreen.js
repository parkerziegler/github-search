import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { graphql, compose } from 'react-apollo';
import RepositoryOwner from '../Repository/RepositoryOwner';
import AuthorOverview from '../Author/AuthorOverview';
import { WebBrowser } from 'expo';
import getSearch from '../../graphql/getSearch';
import getAuthor from '../../graphql/getAuthor';

const AuthorScreen = props => {
  const { data } = props;

  if (data.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const openProfile = async () => {
    await WebBrowser.openBrowserAsync(data.user.url);
  };

  return (
    <View style={styles.container}>
      <RepositoryOwner
        url={data.user.url}
        avatarUrl={data.user.avatarUrl}
        name={data.user.name}
        login={data.user.login}
        height={100}
        width={100}
        containerStyle={{ marginBottom: 10 }}
        flexDirection="column"
        infoContainerStyle={styles.infoContainer}
        onAvatarPress={openProfile}
      />
      {!!data.user.bio && <Text style={styles.bio}>{data.user.bio}</Text>}
      <AuthorOverview
        company={data.user.company}
        location={data.user.location}
        url={data.user.url}
        followerCount={data.user.followers.totalCount}
        websiteUrl={data.user.websiteUrl}
        repoCount={data.user.repositories.totalCount}
      />
    </View>
  );
};

export default compose(
  graphql(getSearch, {
    props: ({ data: { search: { input } } }) => ({
      input,
    }),
  }),
  graphql(getAuthor, {
    options: ({ input }) => ({
      variables: {
        login: input,
      },
    }),
  })
)(AuthorScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    color: '#000',
    fontSize: 22,
    fontWeight: '700',
  },
  login: {
    color: '#6C7680',
    fontSize: 18,
  },
  bio: {
    color: '#000',
    fontSize: 18,
    marginBottom: 20,
  },
});
