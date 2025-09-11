import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://countries.trevorblades.com/',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        fetcher: {
          func: '../lib/graphqlFetcherWrapper#graphqlFetcherWrapper',
          isReactHook: false,
        },
        reactQueryVersion: 5,
        rawRequest: true,
      },
    },
  },
};

export default config;
