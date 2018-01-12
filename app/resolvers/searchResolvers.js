import getSearch from '../graphql/getSearch';

const searchResolvers = {
    defaults: {
        search: {
            input: "",
            __typename: "SearchInput",
        }
    },
    resolvers: {
      Mutation: {
        trackSearch: (_, { input }, { cache }) => {

            console.log("Input in resovler " + input);
            const query = getSearch;

            const previousState = cache.readQuery({ query });

            const data = {
                ...previousState,
                search: {
                    input
                }
            };

            cache.writeData({ query, data });
          
        }
      }
    }
};

export default searchResolvers;