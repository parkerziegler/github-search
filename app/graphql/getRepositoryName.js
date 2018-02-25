import gql from 'graphql-tag';

export default gql`
  query GetRepositoryName {
    repositoryName @client {
      name
      __typename
    }
  }
`;
