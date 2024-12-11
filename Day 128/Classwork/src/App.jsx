import React from 'react';
import { Routes, Router } from 'react-router';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';

export default function App() {
  const navList = [
    {
      path: '/',
      name: 'Home Page'
    },
    {
      path: '/books',
      name: 'Books Page'
    },
    {
      path: '/books/modules',
      name: 'Book Modules :-)'
    }, 
    {
      path: '/books/new/page',
      name: 'New Books Page'
    }
  ];

  return (
      <div>
        {navList.map((item, index) => {
          <li key={`_navlinks_${index}`}><Link to={item.path}>{item.name}</Link></li>
        })}

        <Routes>
         <Router path='/' element={<Home />}></Router>
         <Router path='/books' element={<Books />}></Router>
         <Router path='/books/modules' element={<BooksModules />}></Router>
         <Router path='/books/new/page' element={<BooksNewPage />}></Router>
        </Routes>
      </div>
  )
}
