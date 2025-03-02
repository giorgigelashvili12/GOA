import React from 'react'
import Animation from './assets/Animation.jsx'
import Dialogue from './assets/Dialogue.jsx'
import DisclosureMenu from './assets/DisclosureMenu.jsx'
import Dropdown from './assets/Dropdown.jsx'
import PopoverMenu from './assets/PopoverMenu.jsx'
import Tabs from './assets/Tabs'

export default function App() {
  return (
    <div className='bg-black'>
      <h1 className='text-white'>Day 122 - Cool Designs</h1>

      <Animation />
      <Dialogue />
      <DisclosureMenu /> 
      <Dropdown />
      <PopoverMenu />
      <Tabs />
    </div>
  )
}