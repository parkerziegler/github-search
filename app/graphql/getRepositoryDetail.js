import gql from 'graphql-tag';

export default gql`
    query repository($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
            description,
            name,
            createdAt,
            pushedAt,
            stargazers {
                totalCount
            },
            forks {
                totalCount
            }
            primaryLanguage {
                name,
                color
            },
            ref(qualifiedName: "master") {
                target {
                    ... on Commit {
                        id
                        history(first: 5) {
                            pageInfo {
                                hasNextPage
                            }
                            edges {
                                node {
                                    messageHeadline
                                    oid
                                    message
                                        author {
                                            name
                                            email
                                            date
                                        }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`