'use client';
import { useGetCountriesQuery } from '@/graphql/generated';

export default function UsersList() {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.countries.map((country) => (
        <li key={country.code}>{country.name}</li>
      ))}
    </ul>
  );
}
