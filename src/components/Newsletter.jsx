import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Newsletter = () => {
  return (
    <div id='newsletter' className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='bg-blue-600 rounded-2xl overflow-hidden'>
        <div className='relative md:px-16 py-16 px-6 md:py-24'>
            <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>

            <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                <div className='text-white max-w-lg text-center md:text-left'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4'>Subscribe newsletter</h2>
                    <p className='text-blue-100 text-sm sm:text-base'>Best cooks and best delivery guys all at your service. Hot tasty food.</p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                    <input type="email" placeholder='Enter your email' className='w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none' />
                    <button className='w-full flex items-center gap-2 text-white sm:w-auto bg-green-500 text-right px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg  '>
                        <span>Discover</span>
                        <HiOutlineArrowNarrowRight className='size-5' />
                    </button>
                </div>
            </div>
        </div>
      </div>

      <style>
        {
            `
                .clip-path-slant {
                    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%)
                }
            `
        }
      </style>
    </div>
  )
}

export default Newsletter
