import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const Navigate = useNavigate()

   const [userDetails, setUserDetails] = useState({
      username: '',
      password: ''
   })

   const handleLoginInput = (e) => {
      setUserDetails(prev => ({
         ...prev,
         [e.target.name]: e.target.value
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // todo add logic
      Navigate('/')
   }

   return (
      <div>
         <div className='bg-[#131324] min-h-screen w-full flex justify-center items-center px-4 py-8'>
            <div className='bg-[#101828] w-full max-w-md rounded-lg p-8 border-2 border-dashed border-[#00d3f3]'>
               <form className='flex flex-col gap-y-5' onSubmit={(e) => handleSubmit(e)}>
                  <div className='text-5xl font-extrabold text-[#00d3f3] self-center mb-7'>Login</div>
                  <input type="text" name="username" placeholder='Username'
                     className='border border-[#00d3f3] p-2 outline-none rounded-md text-white font-bold'
                     onChange={(e) => handleLoginInput(e)}
                     value={userDetails.username}
                     required
                  />
                  <input type="password" name="password" placeholder='Password'
                     className='border border-[#00d3f3] p-2 outline-none rounded-md text-white font-bold'
                     onChange={(e) => handleLoginInput(e)}
                     value={userDetails.password}
                     required
                  />
                  <button type="submit"
                     className='bg-[#00d3f3] p-2 rounded cursor-pointer text-[#131324]'
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