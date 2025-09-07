import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://countries.trevorblades.com/',
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});
