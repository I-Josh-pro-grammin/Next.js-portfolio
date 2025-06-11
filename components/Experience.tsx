/* eslint-disable @next/next/no-img-element */
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBoarder'

const Experience = () => {
  return (
    <div className='text-white py-20 px-10' id='testimonials'  >
      <h1 className="md:font-medium text-4xl text-center sm:ml-[5rem] font-bold" >
          My Work
        <span className = "text-purple-500"> Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map(card => (
          <Button
            key={card.id}
            borderRadius='1.75rem'
            duration={Math.floor(Math.random() * 10000) + 50000}
            Component={undefined}
          >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-3 lg:py-10 gap-2'>
              <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16"/>
              <div className='lg:ms-5'>
                <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                <p className='text-start text-white mt-3 font-semibold'>{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
