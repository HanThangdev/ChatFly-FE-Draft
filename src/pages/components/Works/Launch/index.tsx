import Image from 'next/image'
import React from 'react'
import frameLeft from '../../../../../public/assets/frame-launch-left.png'
import frameRight from '../../../../../public/assets/frame-launch-right.png'
import vectorLeft from '../../../../../public/assets/vector-launch-left.png'
import vectorRight from '../../../../../public/assets/vector-launch-right.png'

function Launch() {
  return (
    <div className='flex gap-4 pb-40 justify-around'>
      <div className="w-5/12">
        <Image src={frameLeft} alt='frame launch left' className='bg-frameoverlay rounded-t-2xl'></Image>
        <div className="bg-launchoverlay text-center text-white pb-10 rounded-b-2xl px-4">
          <div className='flex relative w-fit m-auto'>
            <h5 className="text-[2rem] leading-10 pt-10 font-semibold">Embed Into Your Site</h5>
            <Image
              src={vectorLeft}
              className="absolute filter opacity-90 animate-blob left-[-10px] bottom-[-6px]"
              alt="icon-blue"
            />
          </div>
          <p className="text-[1.25rem] leading-8 pt-4 pb-10">Easily embed ChatFly into your website in minute using our fully customizable widgets. </p>
          <button type='button' className='text-white px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sx bg-btnStart'>
            <div className='flex'>
              <p className='font-semibold mr-[0.625rem]'>Embeddable Widgets</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.52 17.51 22 12 22L11.7202 21.9962C6.32942 21.8478 2 17.4264 2 12C2 6.49 6.48 2 12 2C17.51 2 22 6.49 22 12ZM10.02 8C9.73 8.3 9.73 8.77 10.03 9.06L12.98 12L10.03 14.94C9.73 15.23 9.73 15.71 10.02 16C10.32 16.3 10.79 16.3 11.08 16L14.57 12.53C14.71 12.39 14.79 12.2 14.79 12C14.79 11.8 14.71 11.61 14.57 11.47L11.08 8C10.94 7.85 10.75 7.78 10.56 7.78C10.36 7.78 10.17 7.85 10.02 8Z" fill="white" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="w-5/12">
        <Image src={frameRight} alt='frame launch left' className='bg-frameoverlay rounded-t-2xl'></Image>
        <div className="bg-launchoverlay text-center text-white pb-10 rounded-b-2xl px-4">
          <div className='flex relative w-fit m-auto'>
            <h5 className="text-[2rem] leading-10 pt-10 font-semibold">Integrate Into Your Applications</h5>
            <Image
              src={vectorRight}
              className="absolute filter opacity-90 animate-blob right-[-10px] bottom-[-6px]"
              alt="icon-blue"
            />
          </div>
          <p className="text-[1.25rem] leading-8 pt-4 pb-10">Our API allows you to integrate AI chatbot into your own products using our APIs.</p>
          <button type='button' className='text-white bg-[#000E1A] px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sm'>
            <div className='flex'>
              <p className='font-semibold mr-[0.625rem]'>API Documentation</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.52 17.51 22 12 22L11.7202 21.9962C6.32942 21.8478 2 17.4264 2 12C2 6.49 6.48 2 12 2C17.51 2 22 6.49 22 12ZM10.02 8C9.73 8.3 9.73 8.77 10.03 9.06L12.98 12L10.03 14.94C9.73 15.23 9.73 15.71 10.02 16C10.32 16.3 10.79 16.3 11.08 16L14.57 12.53C14.71 12.39 14.79 12.2 14.79 12C14.79 11.8 14.71 11.61 14.57 11.47L11.08 8C10.94 7.85 10.75 7.78 10.56 7.78C10.36 7.78 10.17 7.85 10.02 8Z" fill="white" />
              </svg>
            </div>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Launch