import React, { use } from 'react'
import navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
  const [user, setUser] = useState({})
  const params = useParams()
  console.log(params)

  useEffect(() =>{
    fetch(`https://localhost:5000/users${user.id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(error => console.error(error))
  }, [userId])

  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
          {user.name 
          ? <h1>{user.name}</h1> 
          : <h1>Loading...</h1>
          }
        </main>
    </>
  )
}
