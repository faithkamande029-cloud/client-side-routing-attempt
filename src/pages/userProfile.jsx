import React, { use } from 'react'
import navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
  const params = useParams()
  console.log(params)

  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <h1>User Profile</h1>
        </main>
    </>
  )
}
