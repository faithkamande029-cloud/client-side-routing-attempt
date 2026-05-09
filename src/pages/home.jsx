import { useState, useEffect } from 'react'
import UserCard from '../components/user-card'

function Home() {
    const [users, setUser] = useState([])

    useEffect(() => {
        fetch: ("http:/localhost:4000/users")
            .then((res) => res.json)
            .then((data) => data.json)
            .catch((error) => console.error(error))
    }, [])

    const userList = users.map((user) => {
        return <UserCard key={user.id} user={user}/>
    })

  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <h1>Home!</h1>
            {userList}
        </main>
    </>
  )
}

export default Home