export const graphqlFetcher = async <TData, TVariables>(
  query: string,
  variables?: TVariables,
): Promise<TData> => {
  const res = await fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
};
