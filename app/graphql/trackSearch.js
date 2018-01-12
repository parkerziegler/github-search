import gql from 'graphql-tag';

export default gql`
    mutation trackSearch($input: String!) {
        trackSearch(input: $input) @client
    }
`;