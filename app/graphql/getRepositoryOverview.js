import gql from 'graphql-tag';

export default gql`
  query repositoryOwner($login: String!) {
    repositoryOwner(login: $login) {
      url
      avatarUrl(size: 100)
      repositories(last: 5) {
        nodes {
          name
          description
          url
        }
      }
    }
    user(login: $login) {
      name
      login
    }
  }
`;
