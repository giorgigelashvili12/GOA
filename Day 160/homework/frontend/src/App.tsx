//import React from 'react'

export default function App() {
  const res = fetch('http://localhost:3000');
  return (
    <div>{res}</div>
  )
}
