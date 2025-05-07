import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='pb-26 pt-36'>
      <div className='overflow-hidden'>
        <Spotlight className='top-10 left-0 md:-left-32 opacity-50 md:top-20 h-[200vh] w-[80vw]' fill='white' />
        <Spotlight className='top-5 left-full w-[90vw] h-[80vh] sm:top-50 md:top-10' fill='blue' />
        <Spotlight className='top-10 left-50 h-[200vh] w-[70vw] sm:top-50 md:top-1 ' fill='purple' />
      </div>
        <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-[#000308] absolute top-0 left-0">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
        {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          </p>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80' >
              Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect 
               className="text-center text-[80px] md:text-5xl lg:text-8xl"
               words = "Transforming Concepts into Seamless User Experiences"
            />

            <p className="text-center md:tracking-wider mb-4 text-gray-600 text-sm md:text-lg lg:text-xl ">
              Hi, I&apos;m Joshua. A Full-Stack Developer with a passion for MERN Stack, NEST.JS, NEXT.JS and TAILWINDCSS 
            </p>

            <Link href="#about">
              <MagicButton
                title="Explore my work"
                icon={<FaLocationArrow />}
                position='right'
              />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Hero
