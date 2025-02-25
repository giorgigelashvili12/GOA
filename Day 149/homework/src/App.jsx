import React, {useEffect} from 'react'
import gsap from 'gsap'

export default function App() {
  useEffect(() => {
    gsap.to('.text-animation', {
      duration: 5,
      opacity: 1,
      delay: 2
    })
  },[])

  return (
    <div className="bg-green-700 w-full">
        <h1 className='flex justify-center text-5xl'>Find your peace.</h1>
        <br/><br/>
        <div className='flex justify-center '>
            <img className='text-animation opacity-0' src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/z/u/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752" alt="" />
        </div>
    </div>
  )
}
