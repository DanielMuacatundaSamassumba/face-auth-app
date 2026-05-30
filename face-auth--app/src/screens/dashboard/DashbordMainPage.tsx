import React from 'react'

export default function DashbordMainPage() {
     const userInfo = JSON.parse(String(localStorage.getItem("user_info")))
     console.log("userInfo", userInfo)
  return (
    <div
    
     className='h-screen w-full flex items-center justify-center text-2xl font-bold text-center'
    >Olá {userInfo?.email}</div>
  )
}
