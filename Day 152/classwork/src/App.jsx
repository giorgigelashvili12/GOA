import React, {useEffect, useState} from 'react'

export default function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem('user')) || [];
      if(user.length === 0) {
        setIsLoading(true);
      } else {
        setUser(user);
        setIsLoading(false);
      }
    }, 2000);
  }, [user, setUser]);

  const uuser = {
    name: 'Jumberi',
    age: 99
  }

  function adduser() {
    localStorage.setItem('user', JSON.stringify(uuser));
    alert('ok');
  }



  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className="bg-green-500 text-white p-4 rounded-2xl shadow-lg w-40 text-center">
          <h2 className="text-lg font-bold">Add User</h2>
          <button className='cursor-pointer border p-5 m-5 rounded-full' onClick={() => adduser()}>Click Here</button>
        </div>
      </div>

      <div className='flex justify-center items-center h-screen p-10'>
        <div className='bg-green-500 text-white p-4 text-center'>
          {!isLoading ? (
            <div>
              <h2 className="text-lg font-bold">{uuser.name}</h2>
              <h2 className="text-lg font-bold">{uuser.age}</h2>
            </div>
          ) : <div className="flex justify-center items-center h-screen">
                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin bg-green-500"></div>
              </div>}
        </div>
      </div>
    </>
  )
}