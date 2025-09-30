import { projects } from '@/data'
import React from 'react'

import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className='text-white py-20 px-15' >
      <h1 className="md:font-medium text-4xl text-center sm:ml-[5rem] font-bold" >
        A small selection of my {' '}
        <span className="text-purple-500">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-8">
        {projects.map(({id , title, des, img, iconLists, link}) => (
          <div key={id} className='lg:max-h-[60%] mt-[7rem] mr-[2rem] h-[40vh] flex item-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className='flex items-center relative justify-center sm:w-96 w-[70vw] mb-7 overflow-hidden h-[30vh]'>
                <div className='relative w-full h-full
                   overflow-hidden lg:rounded-3xl rounded-lg bg-[#13162d] 
                '>
                  <Image src="/bg.png" alt="bg-img" width={100} height={100} /> 
                </div>
                <Image 
                 src={img}
                 alt={img} 
                 width={100}
                 height={100}
                 className='!x-10 absolute w-full h-full bottom-0'
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-center mt-7 mb-3">
                <div className="mr-auto flex">
                  {iconLists.map((icon, index)=> (
                    <div key={icon} className="border  rounded-full bg-black
                       lg:w-7 lg:h-7 w-7 h-7 flex justify-center items-center border-white"
                       style={{transform: `translateX(-${3 * index * 2})px`}}
                     >
                      <Image src={icon} alt={icon} 
                        className='p-2'
                        width={80}
                        height={80}
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute right-1 flex justify-center rounded-full  border border-0.4 px-4 py-2 hover:border-gray-500 items-center">
                  <Link href={link || "/"}>
                    <p className="flex lg:text-xl md:text-sm text-purple">
                      Check
                    </p>
                  </Link>
                  <FaLocationArrow className='ms-3' size={12} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
