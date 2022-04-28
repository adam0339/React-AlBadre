import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function UserRoute() {
  const { id } = useParams();

  const [user, setUser] = useState([])

  const fetchUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    setUser(user)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <div className="w-full bg-green-600 text-white p-3 text-4xl flex justify-center">
        <h1>User {id}</h1>
      </div>
      <div>
        <div className="bg-green-500">
            
        </div>
      </div>
    </div>
  )
}
