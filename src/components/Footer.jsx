import { BiCategory } from 'react-icons/bi'
import { DiSizzlejs } from 'react-icons/di'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {

    const footerLinks = {
        company: [
        { name: 'About', href: '#about' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'How it Works', href: '#' },
        { name: 'Contact Us', href: '#' },
        ],
        getHelp: [
        { name: 'Support Carrer', href: '#' },
        { name: '24h Service', href: '#' },
        { name: 'Quick Chat', href: '#' },
        ],
        support: [
        { name: 'FAQ', href: '#' },
        { name: 'Policy', href: '#' },
        { name: 'Business', href: '#' },
        ],
        contact: [
        { name: 'WhatsApp', href: '#' },
        { name: 'Support 24', href: '#' },
        ],
    }

  return (
    <div className='bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                <div className='lg:col-span-4'>
                    <div className='flex items-center gap-1 cursor-pointer mb-4'>
                        <a href="/"><DiSizzlejs className='text-red-800' size={50} /></a>
                        <span className='text-xl font-medium ml-1'>The neXt Design</span>
                    </div>
                    <p className='text-gray-600 mb-6 md:w-3/4'>The cpy warned and the little blind text, that where it came from it would have been rewritten a thousand time</p>
                    <div className='flex gap-2 '>
                        <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300'><FaFacebookF className='size-5' /></a>
                        <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300'><FaTwitter className='size-5' /></a>
                        <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300'><FaLinkedinIn className='size-5' /></a>
                    </div>
                </div>

                <div className='lg:col-span-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        {Object.entries(footerLinks).map(([category,links], categoryIndex) => (
                            <div key={categoryIndex} >
                                <h3 className='text-lg font-medium mb-4 capitalize'>{category}</h3>

                                <ul className='space-y-3'>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-200 mt-12 pt-8'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-600 text-sm'>Copyright © {new Date().getFullYear()} <a className='text-blue-600 hover:text-blue-900' href="https://niel-dev.vercel.app" target='_blank'>NIEL</a></p>
                    <p className='text-sm text-gray-600'>Ceated By James Daniel</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
