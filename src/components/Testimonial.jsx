import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            name: "Robin Ayala Doe", 
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
            id: 2,
            name: "John De marli",
            image: "https://randomuser.me/api/portraits/women/90.jpg", 
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
        },
        {
            id: 3,
            name: "Rowhan Smith",
            image: "https://randomuser.me/api/portraits/men/90.jpg",
            text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
        },
        {
            id: 4,
            name: "Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
        },
        {
            id: 5,
            name: "Michael Chen",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
        },
        {
            id: 6,
            name: "Emma Wilson",
            image: "https://randomuser.me/api/portraits/women/28.jpg",
            text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
        },
  
  ];

  return (
    <div id='testimonials' className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold md:text-4xl mb-4'>What out happy client says</h2>
        <p className='text-gray-600'>Things that makes it the best place to start trading</p>
      </div>

      <div className='relative'>
        <Swiper
            navigation={
                {
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom'
                }
            }
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            }}
            modules={[Navigation]}
            className="testimonials-swipper md:mb-12"
        >
            {testimonials.map((testimony, index) => (
                <SwiperSlide key={index} className='h-full md:py-12 py-4'>
                    <div className='text-center bg-white h-full p-4 rounded-lg shadow-md flex flex-col'>
                        <div className='w-24 h-24 mx-auto mb-4'>
                            <img src={testimony.image} alt="" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='flex items-center justify-center mb-4'>
                            {[...Array(5)].map((_, starIndex) => (
                                <span key={starIndex} className='text-yellow-400'><HiStar  size={20} /></span>
                            ))}
                        </div>
                        <h3 className='text-xl font-semibold mb-3'>{testimony.name}</h3>
                        <p className='text-gray-600'>{testimony.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <div className='flex items-center justify-center gap-4 mt-4 md:mt-8'>
            <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200' >
                <FiChevronLeft size={20} />
            </button>
            <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200' >
                <FiChevronRight size={20} />
            </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
