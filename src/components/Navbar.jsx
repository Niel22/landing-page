import { useState } from 'react';
import { DiSizzlejs } from 'react-icons/di';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';

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
    <div className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadwo-sm z-100'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
        {/* Logo */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <a href="/"><DiSizzlejs className='text-red-800' size={50} /></a>
        </div>

        {/* Mbile menu btn */}
        <button className='bg-transparent md:hidden px-2 py-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiOutlineX size={30}/> : <HiMenuAlt3 size={30} />}
        </button>

        {/* Desktop nav */}
        <div className='hidden md:flex gap-10'>
          {menuItem.map((item, index) => (
            <a onClick={() => setActiveLink(item.href)} key={index} href={item.href} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === item.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>{item.label}</a> 
          ))}
        </div>

        {/* Button */}
        <button className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-100 py-4'>
          <div className='container mx-auto px-4 space-y-4'>
            {menuItem.map((item, index) => (
              <a onClick={() => {setActiveLink(item.href); setIsMenuOpen(false)}} 
              className={`block text-sm font-medium py-2 ${activeLink === item.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`} href={item.href} key={index}>{item.label}</a>
            ))}

            <button className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>
              <a href="#newsletter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
