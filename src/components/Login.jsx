import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';
const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const [error, setError] = useState("")
  const { loginWithEmail, googleLogin } = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      await loginWithEmail(data.email, data.password)
      console.log('Logged in successfully');
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successfull",
        showConfirmButton: false,
        timer: 1500,
        draggable: true,
      })
      setError("")
      navigate('/')
    } catch (error) {
      console.error("Failed to login", error)
      setError( "Failed to login. Please provide correct email and password again..")
    }
  }
  //google login
  const handleGoogleLogin = async ()=>{
    try{
      await googleLogin()
      navigate('/')
    }catch(error){
      console.error('failed to login', error)
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-10'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg '>
        <h2 className='text-2xl font-bold text-center text-gray-800'>Please Login</h2>
        {/* registration form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>Email:</label>
            <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email is invalid" } })} type="email" className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder='Enter your email' />
            {errors.email && <span className='text-red-500 text-sm italic mt-2 '>{errors.email.message}</span>}
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>Password:</label>
            <input
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
              type="password" className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter your password' />
            {errors.password && <span className='text-red-500 text-sm italic mt-2 '>{errors.password.message}</span>}
          </div>

          {error && <p className='text-sm text-red-600'>{error}</p>}
          <button type='submit' className='w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>LogIn</button>
        </form>

        {/* social login */}
        <div className='space-y-4 text-center'>
          <p className='text-gray-600'>Or login with</p>

          <div className='flex flex-col sm:flex-row justify-center gap-4'>

            <button onClick={handleGoogleLogin} className='flex w-full items-center justify-center space-x-2 text-white bg-green-500 rounded-md cursor-pointer mx-auto py-2 hover:bg-green-600 px-4'>
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className='flex w-full items-center justify-center space-x-2 text-white bg-blue-500 rounded-md cursor-pointer mx-auto py-2 hover:bg-blue-600 px-4'>
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button className='flex w-full items-center justify-center space-x-2 text-white bg-gray-600 rounded-md cursor-pointer mx-auto py-2 hover:bg-gray-800 px-4'>
              <FaGithub />
              <span>Github</span>
            </button>
          </div>
        </div>
        <p className='text-center text-sm text-gray-600'>Do not have an account? Please <Link to="/register" className='text-blue-500 hover:underline '>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login