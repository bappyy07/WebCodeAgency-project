import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm()

  const { signupWithEmail, googleLogin } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      await signupWithEmail(data.email, data.password)
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete !"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Registration successfull!",
            text: "Provide your email and password to login.",
            icon: "success"
          });
        }
      });

      navigate('/login')

    } catch (error) {
      console.error("Registration failed:", error.message)
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
        <h2 className='text-2xl font-bold text-center text-gray-800'>Please Register</h2>

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
          <button type='submit'  className='w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Sign Up</button>
        </form>

        {/* social login */}
        <div className='space-y-4 text-center'>
          <p className='text-gray-600'>Or sign-up with</p>

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
        <p className='text-center text-sm text-gray-600'>Already have an account? Please <Link to="/login" className='text-blue-500 hover:underline '>Log In</Link></p>
      </div>

    </div>
  )
}

export default Register