const searchResolvers = {
    defaults: {
        __typename: "SearchInput",
        search: ''
    },
    resolvers: {
      Mutation: {
        trackSearch: (_, { search }, { cache }) => {
          
          const data = {
            __typename: "SearchInput",
            search
          };
          
          cache.writeData({ data });
        }
      }
    }
};

export default searchResolvers;