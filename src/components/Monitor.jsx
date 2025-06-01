import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import monitor from "../assets/monitor-card.webp";

const Monitor = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            <div className='md:w-1/2 w-full'>
                <p className='text-emerald-500 font-semibold'>MONITOR</p>
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>
                    Introducing best mobile <br /> carousels
                </h2>
                <p className='text-gray-600 mb-8'>Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                    Learn more about monitoring
                        <HiOutlineArrowNarrowRight className='size-8' />
                </a>
            </div>

            <div className='md:w-1/2 w-full'>
                <img src={monitor} alt="Schedule Img" className='w-full h-auto' />
            </div>

        </div>
    </div>
  )
}

export default Monitor
