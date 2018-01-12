import gql from 'graphql-tag';

export default gql`
    query GetSearch {
        search @client {
            input,
            __typename
        }
    }
`;