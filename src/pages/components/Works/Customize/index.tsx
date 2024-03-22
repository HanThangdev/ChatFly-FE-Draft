import Image from 'next/image'
import React from 'react'
import iconHeart from '../../../../../public/assets/icon-heart.png'
import iconWifi from '../../../../../public/assets/icon-wifi.png'
import iconTick from '../../../../../public/assets/icon-tick.png'
import frameCustom from '../../../../../public/assets/frame-custom.png'

function Customize() {
  return (
    <div className='flex gap-4 pb-40'>
    <div className='w-7/12'>
      <h3 className='text-white text-[2.5rem] leading-[3.25rem]'>Customize The Appearance</h3>
      <p className='text-[#D1D2D5] text-[1.25rem] leading-8 pt-4 pb-10'>Customize your chatbot&apos;s appearance to match your brand&apos;s personality using custom theme, color schemes, logos, and behavior patterns.</p>
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
    <div className='w-5/12'>
      <Image src={frameCustom} alt='frame add data' />
    </div>
  </div>
  )
}

export default Customize