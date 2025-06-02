import { HiOutlineArrowNarrowRight, HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import heroImage from "../assets/hero-image.png";
import { fadeIn, textVariant } from '../utils/motion';

const Hero = () => {
  return (
    <div id="home" className='container mx-auto pt-44 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center'>
      {/* Left Col */}
      <div className='w-full md:w-1/2 space-y-8'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
              <span className='text-blue-600 group-hover:text-yellow-600 group-hover:scale-110 transition-transform'><HiStar size={20} /></span>
              <span className='text-sm font-medium'>Accelerate your business today</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>Empowering growth for  
            <span className='text-blue-600 relative inline-block'>Entrepreneurs to Enterprises <span className='absolute bottom-0 left-0 right-0 w-full h-0.5 bg-blue-200 opacity-60'></span> </span> 
            Worldwide <span className='inline-block ml-2 animate-pulse'>🚀</span>
        </motion.h1>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        className='text-gray-600 text-lg md:text-xl max-w-xl'>Unlock better opportunities with advanced analytics, sales tools, and personalized training — all under one seamless solution.</motion.p>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        className='flex flex-col gap-3 max-w-md md:flex-row'>
            <input className='flex-1 border px-6 py-4 rounded-xl border-gray-200 text-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all' type="email" placeholder='Enter Email' />
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.92 }}
            className='bg-blue-600 flex justify-center items-center px-8 py-4 rounded-xl text-white hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-300'><HiOutlineArrowNarrowRight /></motion.button>
        </motion.div>
      </div>

      {/* Right Col */}
      <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
       className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
          <img src={heroImage} alt="Hero Image"  className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-100'/>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
