import React from 'react'

export default function UserBtn(children) {
    // hover tailwind
  return (
    <div>
      <button className='bg-black hover:bg-white hover:text-black'>
        {children};
      </button>
    </div>
  )
}
