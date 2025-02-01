import React from 'react'
import {useEffect, setUser} from 'react';

export default function App() {
  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then(res => res.json)
      .then(data => setUser(data))
      .catch(e => console.error(e));
  })

  return (
    <div>App</div>
  )
}
