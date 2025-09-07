import UsersList from '../components/UsersList';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Template</h1>

      <div className="w-full max-w-md bg-white shadow rounded p-4">
        <UsersList />
      </div>
    </div>
  );
}
