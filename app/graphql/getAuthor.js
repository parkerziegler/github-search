import gql from 'graphql-tag';

export default gql`
  query($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl(size: 100)
      bio
      company
      location
      createdAt
      url
      websiteUrl
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
    }
  }
`;
