'use client';
import { useQuery } from '@tanstack/react-query';
import { gql } from '@apollo/client';
import { apolloClient } from '../lib/apolloClient';

interface Country {
  code: string;
  name: string;
}

interface GetCountriesResponse {
  countries: Country[];
}

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

export default function UsersList() {
  const { data, isLoading, error } = useQuery<GetCountriesResponse>({
    queryKey: ['countries'],
    queryFn: async (): Promise<GetCountriesResponse> => {
      const result = await apolloClient.query<GetCountriesResponse>({
        query: GET_COUNTRIES,
      });

      if (!result.data) {
        throw new Error('No data returned from server');
      }

      return result.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ul>
      {data?.countries.map((country) => (
        <li key={country.code}>{country.name}</li>
      ))}
    </ul>
  );
}
