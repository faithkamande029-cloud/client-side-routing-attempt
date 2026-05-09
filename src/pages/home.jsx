import { useState, useEffect } from 'react'
import UserCard from '../components/user-card'
import navbar from '../components/navbar'

function Home() {
    const [users, setUser] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.error(error))
    }, [])

    const userList = users.map(user => {
        return <UserCard key={user.id} user={user}/>
    })

  return (
    <>
        <header>
            <h1>Hello</h1>
        </header>
        <main className='flex justify-center align-top'>
            <h1 className='text-3xl font-bold'>Home!</h1>
            {userList}
        </main>
    </>
  )
}

export default Home