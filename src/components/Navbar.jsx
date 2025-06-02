import { motion } from 'framer-motion';
import { useState } from 'react';
import { DiSizzlejs } from 'react-icons/di';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { fadeIn } from '../utils/motion';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');


  const menuItem = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.div 
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadwo-sm z-100'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
        
        <motion.div 
          variants={fadeIn('right', 0.3)}
        className='flex items-center gap-1 cursor-pointer'>
          <motion.a
            whileHover={{ scale: 1.1 }}
          href="/"><DiSizzlejs className='text-red-800' size={50} /></motion.a>
        </motion.div>


        <motion.button
          variants={fadeIn('left', 0.3)}
          className='bg-transparent md:hidden px-2 py-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiOutlineX size={30}/> : <HiMenuAlt3 size={30} />}
        </motion.button>


        <motion.div
          variants={fadeIn('down', 0.3)}
          className='hidden md:flex gap-10'>
          {menuItem.map((item, index) => (
            <motion.a 
              variants={fadeIn('down', 0.1 * (index + 1))}
            onClick={() => setActiveLink(item.href)} key={index} href={item.href} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === item.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>{item.label}</motion.a> 
          ))}
        </motion.div>
        
        <motion.button 
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
          <a href="#newsletter">Get in touch</a>
        </motion.button>
      </div>


      {isMenuOpen && (
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
        className='md:hidden bg-white border-t border-gray-100 py-4'>
          <motion.div 
            variants={fadeIn('down', 0.3)}
          className='container mx-auto px-4 space-y-4'>
            {menuItem.map((item, index) => (
              <motion.a
                variants={fadeIn('right', 0.1 * (index + 1))}
              onClick={() => {setActiveLink(item.href); setIsMenuOpen(false)}} 
              className={`block text-sm font-medium py-2 ${activeLink === item.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`} href={item.href} key={index}>{item.label}</motion.a>
            ))}

            <motion.button 
            variants={fadeIn('up', 0.4)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
              <a href="#newsletter">Get in touch</a>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Navbar
