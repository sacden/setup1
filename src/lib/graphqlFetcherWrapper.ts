import { graphqlFetcher } from './graphqlFetcher';

export const graphqlFetcherWrapper = <TData, TVariables>(query: string, variables?: TVariables) => {
  return () => graphqlFetcher<TData, TVariables>(query, variables);
};
