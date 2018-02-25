import getSearch from '../graphql/getSearch';

const searchResolvers = {
  defaults: {
    search: {
      input: '',
      __typename: 'SearchInput',
    },
  },
  resolvers: {
    Mutation: {
      trackSearch: (_, { input }, { cache }) => {
        const query = getSearch;

        const previousState = cache.readQuery({ query });

        const data = {
          ...previousState,
          search: {
            input,
            __typename: 'SearchInput',
          },
        };

        cache.writeData({ query, data });

        return null;
      },
    },
  },
};

export default searchResolvers;
