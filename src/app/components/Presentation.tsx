"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Presentation = () => {
  const link = [
    "https://www.linkedin.com/in/max-araye-8a0b3827a",
    "https://github.com/MaxLaPeuff"
  ]
  return (
    <section className='w-full overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='gap-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-2 items-center pt-32'>
          <div className=''>
            <p 
            className='uppercase text-2xl sm:text-4xl font-bold my-2 py-2'>
              <span className=''>Salut,  je suis</span><br />
              <span className='pb-4'>Max Araye.</span>
            </p>
            <p className='dark:text-gray-300'>
              Développeur back-end résidant au Bénin.
            </p>
            <div data-aos="fade-right"
               data-aos-delay="100"
               className='flex items-center space-x-4 pt-5'>
               <Link href={'/contact'}>
                <Button
                  className='bg-lime-600 text-gray-100 hover:bg-lime-500 rounded-full'
                >Me Contacter
               </Button>
               </Link>
               <div className='text-lime-500'>
                <Link href={link[0]}>
                  <Linkedin />
                </Link>
               </div>
               <div className='text-lime-500'>
                 <Link href={link[1]}>
                   <Github />
                 </Link>
               </div>
            </div>
          </div>
          <div className='pt-5 sm:pt-0'>
            <div 
             className='w-full sm:w-[300px] h-full rounded-2xl bg-gray-800/50 hover:bg-gray-800 flex justify-center drop-shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out items-center'>
              <Image 
              src='/maxpro3.png' 
              alt='Lafia' 
              width={300} 
              height={400}
              className='rounded-2xl' 
              />
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Presentation