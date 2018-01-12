import React from 'react';
import { Provider } from 'react-redux';
import store from './index';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { token } from './config';
import gql from 'graphql-tag';
import RootNavigator from './app/components/Navigation/RootNavigator';
import searchResolvers from './app/resolvers/searchResolvers';

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  };
});

const cache = new InMemoryCache();

const stateLink = withClientState({ ...searchResolvers, cache });

const client = new ApolloClient({
  cache,  
  link: ApolloLink.from([
    stateLink,
    authLink,
    httpLink
  ])
});

export default class App extends React.Component {

  render() {

    return (
      <ApolloProvider client={client}>
          <Provider store={store}>
            <RootNavigator />
          </Provider>
      </ApolloProvider>
    );
  }
}
