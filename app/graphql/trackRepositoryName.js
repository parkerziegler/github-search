import gql from 'graphql-tag';

export default gql`
  mutation trackRepositoryName($name: String!) {
    trackRepositoryName(name: $name) @client
  }
`;
