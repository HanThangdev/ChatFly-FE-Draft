import React from 'react'
import Image from 'next/image'
import { vectorChat, vectorUnder } from '@/assets/vector'
import { carousel } from '@/assets/images'

export default function Carousel() {
  return (
    <div className='bg-bgLanding py-20 max-md:pb-0'>
      <div className='min-h-xl max-w-screen-xl justify-center items-start m-auto flex-col'>
        <div className='text-center'>
          <div className='flex relative w-fit m-auto font-bold text-[2rem] md:text-[4rem] leading-[2rem] md:leading-[4.5rem] text-white pt-20 pb-10'>
            <p className='z-10'>
              Your Custom ChatGPT
            </p>
            <Image
              src={vectorChat}
              className="absolute z-0 filter opacity-90 animate-blob md:w-[134px] md:left-[-20px] md:bottom-[12px] w-[66px] left-[-10px] bottom-[27px]"
              alt="icon-blue"
            />
            <Image
              src={vectorUnder}
              className="absolute z-0 filter opacity-90 animate-blob  md:w-[314px] w-[134px] right-[-20px] bottom-[30px]"
              alt="icon-blue"
            />
          </div>
          <p className='text-[#D1D2D5] text-[1.25rem] leading-8'>Empower Your Business Using Chatfly AI Assistant:</p>
          <p className='text-[#D1D2D5] text-[1.25rem] leading-8'>3x Faster, Privacy, and Accuracy.</p>
          <div className="py-20">
            <a target="_blank" rel={'noreferrer'} href={`${process.env.REACT_APP_URL_ADMIN_PAGE}/auth/signup`}
             className="mr-4 text-white px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sx bg-btnStart">Sign building — it&apos;s free</a>
            <a  target="_blank" rel={'noreferrer'} href={`${process.env.REACT_APP_URL_ADMIN_PAGE}/auth/signin`}
            className="text-white bg-[#000E1A] px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sm">Get a Demo</a>
          </div>
          <div className='pb-20'>
            <Image src={carousel} alt="Carousel" />
          </div>
        </div>
      </div>
    </div>
  )
}

