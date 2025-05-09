import { testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'


const Clients = () => {
  return (
    <div className='text-white py-20 px-10' id='testimonials'  >
      <h1 className="md:font-medium text-4xl text-center sm:ml-[5rem] font-bold" >
          Testimonials from 
        <span className = "text-purple-500"> satisfied clients and partners</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="h- md:h-rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards 
            items={testimonials}
            direction="right"
            speed="normal"
            pauseOnHover={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Clients
