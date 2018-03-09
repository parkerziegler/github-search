import gql from 'graphql-tag';

export default gql`
  query repositoryOwner($login: String!, $cursor: String) {
    repositoryOwner(login: $login) {
      url
      avatarUrl(size: 100)
      repositories(first: 5, after: $cursor) {
        edges {
          cursor
          node {
            name
            description
            url
          }
        }
      }
    }
    user(login: $login) {
      name
      login
    }
  }
`;
