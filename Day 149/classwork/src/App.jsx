import React, {useEffect} from 'react'
import gsap from "gsap"

export default function App() {
    useEffect(() => {
        gsap.to(".text-animation", {
            duration: 5,
            opacity: 1,
            delay: 3
        })
    }, [])

  return (
    <div className="bg-amber-300 w-full">
        <h1 className='flex justify-center text-5xl'>landing page (cool allert)</h1>
        <br/><br/>
        <div className='flex justify-center '>
            <img className='text-animation opacity-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLnLb1iZofyTJEtdWRckf0jLAGm8-tPUaeY9O31z4SNvTfO9I" alt="" />
        </div>
    </div>
  )
}
