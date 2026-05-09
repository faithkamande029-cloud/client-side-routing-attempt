import React from 'react'

export default function Login() {
  return (
    <>
        <header>

        </header>
        <main>
            <form>
                <div>
                    <label htmlFor="usernamr">Username: </label>
                    <input 
                        id="username"
                        type="text" 
                        placeholder='Username' 
                    />
                </div>
                <br />                              
                <button type='submit'>Submit</button>
            </form>
        </main>
    </>
  )
}
