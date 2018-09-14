import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { WebBrowser } from 'expo';

import RepositoryOwner from '../Repository/RepositoryOwner';
import AuthorOverview from '../Author/AuthorOverview';
import getSearch from '../../graphql/getSearch';
import getAuthor from '../../graphql/getAuthor';

const openProfile = async (data) => {
  await WebBrowser.openBrowserAsync(data.user.url);
};

export const AuthorScreen = ({ data }) => {
  if (data.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RepositoryOwner
        url={data.user.url}
        avatarUrl={data.user.avatarUrl}
        name={data.user.name}
        login={data.user.login}
        containerStyle={{ marginBottom: 10 }}
        infoContainerStyle={styles.infoContainer}
        onAvatarPress={() => openProfile(data)}
      />
      {!!data.user.bio && <Text style={styles.bio}>{data.user.bio}</Text>}
      <AuthorOverview
        company={data.user.company}
        location={data.user.location}
        url={data.user.url}
        followerCount={data.user.followers.totalCount}
        websiteUrl={data.user.websiteUrl}
        repoCount={data.user.repositories.totalCount}
        organizations={data.user.organizations.edges}
      />
    </View>
  );
};

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
    padding: 20,
    justifyContent: 'space-around',
  },
  infoContainer: {
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
