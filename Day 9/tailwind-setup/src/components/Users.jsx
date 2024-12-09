import { useState } from "react"
import { useEffect } from "react"


export default function Users() {
  var [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  console.log(users)
  return (
    <div className="my-5">
      <h1 className="text-center text-red-500 text-xl">Our Users</h1>
      <div className="grid grid-cols-3 gap-4">
        {
          users.map(user => <div key={user.id} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
              <p>{user.phone}</p>
              <a className="link" href={`${user.website}`}>Go to </a>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Contact Now</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
