import React from 'react'

export default function App() {
  return (
    <div className='flex justify-center items-center h-screen gap-30'>
      <button class="bg-sky-500 hover:bg-sky-700 p-3 rounded-full">Save changes</button>

      <button class="dark:md:hover:bg-fuchsia-600 p-3 rounded-full">Save changes</button>

      <button class="p-3 rounded-full bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Save changes</button>
    </div>
  )
}