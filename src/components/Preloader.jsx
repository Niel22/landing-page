import React from 'react'
import { DiCodeigniter } from 'react-icons/di'

const Preloader = () => {
  return (
    <div className='min-h-screen h-screen w-full flex justify-center items-center bg-gray-200'>
      <DiCodeigniter size={50} className='animate-ping' />
    </div>
  )
}

export default Preloader
