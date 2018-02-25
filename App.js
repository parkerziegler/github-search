import React from 'react';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { token } from './config';
import RootNavigator from './app/components/Navigation/RootNavigator';
import searchResolvers from './app/resolvers/searchResolvers';
import repositoryResolvers from './app/resolvers/repositoryResolvers';
import { merge } from 'lodash';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const cache = new InMemoryCache();

const stateLink = withClientState({
  ...merge(searchResolvers, repositoryResolvers),
  cache,
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, authLink, httpLink]),
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    );
  }
}
