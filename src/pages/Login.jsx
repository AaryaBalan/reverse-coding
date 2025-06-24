import React, { useState } from 'react'

const Login = () => {

   const [userDetails, setUserDetails] = useState({})

   const handleLoginInput = (e) => {
      setUserDetails(prev => ({
         ...prev,
         [e.target.name]: e.target.value
      }))
   }

   return (
      <div>
         <div className='bg-[#131324] min-h-screen w-full flex justify-center items-center px-4 py-8'>
            <div className='bg-[#692bd8] w-full max-w-md rounded-lg p-8'>
               <form className='flex flex-col gap-y-5'>
                  <div className='text-5xl font-extrabold text-[#a47bf1] self-center mb-7'>Login</div>
                  <input type="text" name="username" placeholder='Username'
                     className='border border-[#a47bf1] p-2 outline-none rounded-md text-white font-bold'
                     onChange={(e) => handleLoginInput(e)}
                     value={userDetails.username}
                  />
                  <input type="password" name="password" placeholder='Password'
                     className='border border-[#a47bf1] p-2 outline-none rounded-md text-white font-bold'
                     onChange={(e) => handleLoginInput(e)}
                     value={userDetails.password}
                  />
                  <button type="submit"
                     className='bg-[#a47bf1] p-2 rounded cursor-pointer text-[#131324]'
                  >
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Login