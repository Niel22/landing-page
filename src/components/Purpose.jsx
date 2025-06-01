import React from 'react'

const Purpose = () => {

const features = [
  {
    icon: "🔴",
    title: "Designed for Excellence",
    description: "Our diverse team of designers, developers, and marketers collaborates to deliver unmatched quality and innovation."
  },
  {
    icon: "🟣",
    title: "Seamlessly Integrated",
    description: "We align with your unique workflows and processes, ensuring effortless collaboration and impactful results."
  }
];


  return (
    <div id='about' className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
      <div className='max-w-6xl mx-auto '>
        <div className='grid md:grid-cols-3 grid-cols-1 '>
            <div className=''>
                <p className='text-sm text-purple-600 font-medium mb-2'>ACHIEVE MORE</p>
                <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Purpose of a convoy is to keep your team</h2>
            </div>

            <div className='flex flex-col md:flex-row mt-10 gap-8 md:mt-0 md:col-span-2'>
                {features.map((feature, index) => (
                    <div key={index} className='flex justify-center items-start'>
                        <div className='p-3'>{feature.icon}</div>
                        <div>
                            <h3 className='text-xl mb-2 font-bold'>{feature.title}</h3>
                            <p className='text-gray-600'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Purpose
