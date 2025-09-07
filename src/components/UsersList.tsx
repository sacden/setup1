'use client';

import { useQuery } from '@tanstack/react-query';
import { gql } from '@apollo/client';
import { apolloClient } from '../lib/apolloClient';

const GET_COUNTRIES = gql`
  query ExampleQuery {
    countries {
      code
    }
  }
`;

export default function CountriesList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const { data } = await apolloClient.query({ query: GET_COUNTRIES });
      return data.countries;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ul>
      {data?.map((country: string) => (
          <li key={country.code}>{country.code}</li>

      ))}
    </ul>
  );
}
