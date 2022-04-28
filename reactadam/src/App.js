import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <div className="w-full bg-green-600 text-white p-3 text-4xl flex justify-center">
        <h1>Adam - A - För - Aktiv</h1>
      </div>
      
      <div className="w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
