import React from 'react'
import Image from 'next/image'

export default function page() {
  return ( 
    <>
      <div className='bg-gray-100 m-17 p-11 flex justify-between items-center rounded-[40px]'>
        <Image src="/Toyota.png" alt="Toyota" width={150} height={300} />
        <Image src="/Ford.png" alt="Toyota" width={160} height={300} />
        <Image src="/Mercedes.png" alt="Toyota" width={70} height={300} />
        <Image src="/Jeep.png" alt="Toyota" width={150} height={300} />
        <Image src="/Bmw.png" alt="Toyota" width={120} height={300} />
        <Image src="/Audi.png" alt="Toyota" width={150} height={300} />
      </div>

      <div>
        <div className='flex m-17 justify-between'>
          <div className="flex gap-1 items-center">
            <Image src="/main.png" alt="car" width={80} height={80} />
            <span className="font-bold text-xl">Car Rental</span>
          </div>

          <div className='flex items-center'>
            <Image src="/adress.png" alt="address" width={80} height={80} />
            <div className="flex flex-col">
              <span className="text-xl text-gray-700">Address</span>
              <span className="text-xl font-medium">Oxford Ave. Cary, NC 27511</span>
            </div>
          </div>

          <div className='flex items-center'>
            <Image src="/email.png" alt="address" width={80} height={80} />
            <div className="flex flex-col">
              <span className="text-xl text-gray-700">Email</span>
              <span className="text-xl font-medium">nwiger@yahoo.com</span>
            </div>
          </div>

          <div className='flex items-center'>
            <Image src="/phone.png" alt="address" width={80} height={80} />
            <div className="flex flex-col">
              <span className="text-xl text-gray-700">Phone</span>
              <span className="text-xl font-medium">+537 547-6401</span>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>

      <div className='flex m-17 justify-between'>
        <div>
          <p className='font-bold text-2xl mb-5 w-90'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          <div className='flex gap-1'>
            <a href="http://facebook.com" target="_blank">
              <Image src="/fb.png" alt="Toyota" width={50} height={300} />
            </a>
            <a href="http://facebook.com" target="_blank">
              <Image src="/ig.png" alt="Toyota" width={54} height={300} />
            </a>
            <a href="http://facebook.com" target="_blank">
              <Image src="/x.png" alt="Toyota" width={50} height={300} />
            </a>
            <a href="http://facebook.com" target="_blank">
              <Image src="/yt.png" alt="Toyota" width={50} height={300} />
            </a>
          </div>
        </div>

        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-5">Useful links</p>
            <span className='text-xl'>About us</span>
            <span className='text-xl'>Contact us</span>
            <span className='text-xl'>Gallery</span>
            <span className='text-xl'>Blog</span>
            <span className='text-xl'>F.A.Q</span>
        </div>

        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-5">Vehicles</p>
            <span className='text-xl'>Sedan</span>
            <span className='text-xl'>Cabriolet</span>
            <span className='text-xl'>Pickup</span>
            <span className='text-xl'>Blog</span>
            <span className='text-xl'>F.A.Q</span>
        </div>

        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-5">Download App</p>
            <div>
              <a href="http://appstore.com" target="_blank"><Image src='/appstore.png' alt="App Store" width={200} height={100} /></a>
              <a href="http://playstore.com" target='_blank'><Image src='/playstore.png' alt="Play Store" width={200} height={100} /></a>
            </div>
        </div>
      </div>
    </>
  )
}
