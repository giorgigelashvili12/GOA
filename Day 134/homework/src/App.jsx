import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Page1 from './Page1';

export default function App() {
  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}>
          <Route path='page1' element={<Page1/>}/>
        </Route>
      </Routes>
    </>
  )
}