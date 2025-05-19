//import React from 'react'
import {useEffect, useState} from 'react';

export default function App() {
  const [userData, setUserData] = useState<any>(null);
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [res, setRes] = useState<any>(null);

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:2000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });

      const data = await res.json();
      setRes(data);
    } catch(e) {
      console.error('signup fail: ', e)
    }
  }

  return (
    <div className="w-full h-full">
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100 px-4'>
      <div className="flex flex-col">
        <h1 className="">Sign Up</h1>

        <form onSubmit={signup} className="">
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required className=""/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className=""/>
          <button type="submit" className="">Sign Up</button>
        </form>

        {res && (
          <div className="">
            {
            //<h2 className="font-bold mb-2">Server res:</h2>
            //<pre>{JSON.stringify(res, null, 2)}</pre>
          }
          </div>
        )}
      </div>
      </div>
    </div>
  )
}
