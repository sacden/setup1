'use client';
import { useQuery } from '@tanstack/react-query';
import { graphqlFetcher } from '@/lib/graphqlFetcher';
import { GetCountriesDocument, GetCountriesQuery } from '@/graphql/generated';

export default function UsersList() {
  const { data, isLoading, error } = useQuery<GetCountriesQuery>({
    queryKey: ['GetCountries'],
    queryFn: () => graphqlFetcher(GetCountriesDocument),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <ul>
      {data?.countries.map((country) => (
        <li key={country.code}>{country.name}</li>
      ))}
    </ul>
  );
}
