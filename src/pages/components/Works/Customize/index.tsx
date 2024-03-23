import Image from 'next/image'
import React from 'react'
import { iconHeart, iconTick, iconWifi } from '@/assets/icon'
import { frameCustom } from '@/assets/images'

function Customize() {
  return (
    <div className='lg:pb-40 pb-10'>
      <div className='flex gap-4'>
        <div className='w-7/12'>
          <h3 className='text-white lg:text-[2.5rem] lg:leading-[3.25rem] md:text-xl text-base'>Customize The Appearance</h3>
          <p className='text-[#D1D2D5] md:text-[1.25rem] md:leading-8 md:pt-4 md:pb-10 text-sm pt-1 pb-3'>Customize your chatbot&apos;s appearance to match your brand&apos;s personality using custom theme, color schemes, logos, and behavior patterns.</p>
          <div className='hidden lg:block'>
            <div className='flex items-center'>
              <Image src={iconHeart} alt='icon fly' />
              <p className='ml-2 text-white font-semibold'>Personalize your chatbot to enhance user engagement.</p>
            </div>
            <div className='flex items-center py-[2.25rem]'>
              <Image src={iconWifi} alt='icon fly' />
              <p className='ml-2 text-white font-semibold'>Reflect brand&apos;s personality consistently in all interactions.</p>
            </div>
            <div className='flex items-center'>
              <Image src={iconTick} alt='icon fly' />
              <p className='ml-2 text-white font-semibold'>Providing user with prompts and suggested responses.</p>
            </div>
          </div>
        </div>
        <div className='w-5/12'>
          <Image src={frameCustom} alt='frame add data' />
        </div>
      </div>
      <div className='lg:hidden pt-5'>
        <div className='flex items-center'>
          <Image src={iconHeart} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Personalize your chatbot to enhance user engagement.</p>
        </div>
        <div className='flex items-center lg:py-[2.25rem] py-4'>
          <Image src={iconWifi} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Reflect brand&apos;s personality consistently in all interactions.</p>
        </div>
        <div className='flex items-center'>
          <Image src={iconTick} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Providing user with prompts and suggested responses.</p>
        </div>
      </div>
    </div>
  )
}

export default Customize