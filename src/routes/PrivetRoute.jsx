import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

const PrivetRoute = ({children}) => {
  const {user} = useAuth()
  return user ? children : <Navigate to='/login'/>
} 

export default PrivetRoute