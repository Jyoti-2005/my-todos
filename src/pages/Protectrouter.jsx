import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectrouter = ({children}) => {
  const reg=JSON.parse(localStorage.getItem('regdata'))
  const login = JSON.parse(localStorage.getItem('logindata'))
  return (
    <>
      {
        !reg && !login ?<Navigate to={'/register'}/> : reg && !login ? <Navigate to={'/login'}/>:reg&&login&&children
      }
    </>
  )
}

export default Protectrouter
