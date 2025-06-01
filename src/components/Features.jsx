import React from 'react'

const Features = () => {
    const features = [
        {
            icon: "🔍", 
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like",
            bg: "purple"
        },
        {
            icon: "⚙️",
            title: "Work out the details", 
            description: "Communication protocols apart from engagement models",
            bg: "pink"
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing",
            bg: "orange"
        }
    ]
  return (
    <div className='max-w-7xl mx-auto py-16 px-4'>
        <div className='w-full text-center mb-10'>
            <h2 className='text-3xl text-gray-900 font-bold mb-3'>How can we help your business?</h2>
            <p className='text-gray-600'>When you resell besnik, you build trust and increase</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {features.map((
                feature, index
            ) => (
                <div key={index} className='flex flex-col justify-center items-center p-6 text-center'>
                    <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{ 
                        backgroundColor: index === 0 ? '#f1eff0' : index === 1 ? '#fee7e7' : '#fff3e4'
                     }}>
                        <div className='text-3xl'>{feature.icon}</div>
                    </div>

                    <h3 className='text-2xl text-gray-900 font-medium mb-3'>{feature.title}</h3>
                    <p className='text-gray-500'>{feature.description}</p>
                </div>
            ))}
        </div>


        <div className='text-center mt-12'>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative'>
                Become a partner
                <div className='absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0'>

                </div>
            </button>
        </div>
    </div>
  )
}

export default Features
