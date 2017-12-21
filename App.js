import React from 'react';
import { Provider } from 'react-redux';
import store from './index';
import Main from './Main';
import { ApolloClient } from 'apollo-client';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { token } from './config';
import gql from 'graphql-tag';

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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default class App extends React.Component {

  render() {

    return (
      <ApolloProvider client={client}>
          <Provider store={store}>
            <Main />
          </Provider>
      </ApolloProvider>
    );
  }
}
