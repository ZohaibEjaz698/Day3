import React from 'react'

const App = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-slate-100'>
      <div className='flex justify-center items-center flex-col h-[400px] w-[400px] bg-slate-900 rounded-2xl'>
        <h1 className='text-2xl font-bold text-center text-white'>Login</h1>
        <form className='flex flex-col gap-2 p-2'>
          <label htmlFor="username" className='text-sm text-white'>Username</label>
          <input type="text" id="username" className='border border-gray-300 rounded-xl outline-none w-[300px] p-2 focus:border-[#Fda700] focus:ring-[#Fda700] placeholder:text-gray-400 ' placeholder='Enter your username' />
          <label htmlFor="password" className='text-sm text-white'>Password</label>
          <input type="password" id="password" className='border border-gray-300 rounded-xl outline-none w-[300px] p-2 focus:border-[#Fda700] focus:ring-[#Fda700] placeholder:text-gray-400 ' placeholder='Enter your password' />
          <button type="submit" className='bg-[#Fda700] text-white p-2 rounded-3xl w-[300px] transition-all duration-300 hover:bg-black hover:text-white cursor-pointer mt-4'>Login</button>
          <p className='text-sm text-white'>Don't have an account? <a href="#" className='text-[#Fda700] ml-24'>Register</a></p>
          <p className='text-sm text-white'>Forgot Password? <a href="#" className='text-[#Fda700] ml-21'>Reset Password</a></p>
        </form>
      </div>
    </div>
  )
}

export default App