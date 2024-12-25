import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Page1 from './components/Page1.jsx';

export default function App() {
  return (
    <>
      <Home/>

      <h1>Magari Zgvis Cxenebi</h1>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
      </div>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}>
          <Route path='page1' element={<Page1/>}/>
        </Route>
      </Routes>
    </>
  )
}