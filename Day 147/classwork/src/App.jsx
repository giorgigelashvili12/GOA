import React, { useState } from 'react'
import {Moon, Sun} from "lucide-react"

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const handleDarkMode = () => {
    setIsDark(!isDark)
    if(isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
  return (
    <div className='bg-blue-500'>
      <h1>Hello wrlod</h1>
      <div onClick={() => handleDarkMode()}>
        <Moon size={30} color='white'></Moon>
        <Sun size={30} className='dark:hidden'></Sun>
      </div>
    </div>
  )
}