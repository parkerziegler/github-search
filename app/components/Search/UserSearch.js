import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TRACK_SEARCH = gql`
  mutation trackSearch($search: String!) {
    trackSearch(search: $search) @client
  }
`;

class UserSearch extends Component {
  render() {
    return (
      <TextInput
        style={styles.input}
        ref={input => (this.input = input)}
        placeholder="Search for a GitHub user"
        underlineColorAndroid="transparent"
      />
    );
  }
}

export default graphql(TRACK_SEARCH, {
  props: ({ mutate }) => ({
    trackSearch: search => mutate({ variables: { search } }),
  }),
})(UserSearch);

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
  },
});
