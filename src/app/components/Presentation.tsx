"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import { Link as LinkR} from 'react-scroll';
import Link from 'next/link';

const Presentation = () => {
  const link = [
    "https://linkedin.com/in/maxaraye-03910a292/",
    "https://github.com/MaxAraye"
  ]
  return (
    <section id='acceuil' className='w-full overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='gap-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-2 items-center pt-32'>
          <div className=''>
            <p 
            className='uppercase text-2xl sm:text-3xl font-bold my-2 py-2'>
              <span className=''>Salut,  je suis</span><br />
              <span className='pb-4'>Max Araye.</span>
            </p>
            <p className='text-gray-300'>
              Développeur back-end résidant au Bénin<br />
            </p>

            <div data-aos="fade-right"
               data-aos-delay="100"
               className='flex items-center space-x-4 pt-5'>
               <LinkR to="contact" smooth={true} duration={500}>
                <Button className='bg-blue-500 text-white hover:bg-blue-600 rounded-full'>
                    Me Contacter
                </Button>
               </LinkR>
               <div className='text-blue-500'>
                <Link href={link[0]}>
                  <Linkedin />
                </Link>
               </div>
               <div className='text-blue-500'>
                 <Link href={link[1]}>
                   <Github />
                 </Link>
               </div>
            </div>
          </div>
          <div className='pt-5 pb-5 sm:pt-0'>
            <div className='w-full sm:w-[300px] h-full rounded-xl flex justify-center drop-shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out items-center'>
              <Image 
              src='/max2.png' 
              alt='Max' 
              width={300} 
              height={300}
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