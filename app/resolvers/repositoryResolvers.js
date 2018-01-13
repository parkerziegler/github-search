import getRepositoryName from '../graphql/getRepositoryName';

const searchResolvers = {
    defaults: {
        repositoryName: {
            name: "",
            __typename: "RepositoryName",
        }
    },
    resolvers: {
      Mutation: {
        trackRepositoryName: (_, { name }, { cache }) => {

            const query = getRepositoryName;

            const previousState = cache.readQuery({ query });

            const data = {
                ...previousState,
                repositoryName: {
                    name,
                    __typename: "RepositoryName"
                }
            };

            cache.writeData({ query, data });

            return null;
          
        }
      }
    }
};

export default searchResolvers;