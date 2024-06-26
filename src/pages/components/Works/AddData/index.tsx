import Image from 'next/image'
import React from 'react'
import { iconApp, iconCustom, iconFly } from '@/assets/icon'
import { frameAddData } from '@/assets/images'


function AddData() {
  return (
    <div className='lg:pb-40 pb-10'>
      <div className='flex gap-4 '>
        <div className='w-7/12'>
          <h3 className='text-white lg:text-[2.5rem] lg:leading-[3.25rem] md:text-xl text-base'>Add Data From Any Source</h3>
          <p className='text-[#D1D2D5] md:text-[1.25rem] md:leading-8 md:pt-4 md:pb-10 text-sm pt-1 pb-3'>Simply connect AI bot to your data sources, upload files, or add a website. Once connected, Chatfly crawls your data to create an AI chatbot customized for your business.</p>
          <div className='hidden lg:block'>
            <div className='flex items-center'>
              <Image src={iconFly} alt='icon fly' />
              <p className='ml-2 text-white font-semibold'>Automate the set up process, saving time & resources.</p>
            </div>
            <div className='flex items-center py-[2.25rem]'>
              <Image src={iconCustom} alt='icon fly' />
              <p className='ml-2 text-white font-semibold'>Your AI bot responses are deeply customizable. </p>
            </div>
            <div className='flex items-center'>
              <Image src={iconApp} alt='icon fly' />
              <p className='ml-2 text-white font-semibold'>Easily integrate Chatfly into your existing systems.</p>
            </div>
          </div>
        </div>
        <div className='w-5/12'>
          <Image src={frameAddData} alt='frame add data' />
        </div>
      </div>
      <div className='lg:hidden pt-5'>
        <div className='flex items-center'>
          <Image src={iconFly} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Automate the set up process, saving time & resources.</p>
        </div>
        <div className='flex items-center lg:py-[2.25rem] py-4'>
          <Image src={iconCustom} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Your AI bot responses are deeply customizable. </p>
        </div>
        <div className='flex items-center'>
          <Image src={iconApp} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Easily integrate Chatfly into your existing systems.</p>
        </div>
      </div>
    </div>
  )
}

export default AddData