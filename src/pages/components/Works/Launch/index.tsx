import Image from 'next/image'
import React from 'react'
import { frameLaunchLeft, frameLaunchRight } from '@/assets/images'
import { vectorLaunchLeft, vectorLaunchRight } from '@/assets/vector'

function Launch() {
  return (
    <div className='flex gap-4 lg:pb-40 pb-10 justify-around'>
      <div className="w-5/12">
        <Image src={frameLaunchLeft} alt='frame launch left' className='bg-frameoverlay rounded-t-2xl'></Image>
        <div className="bg-launchoverlay text-center text-white pb-10 rounded-b-2xl px-4">
          <div className='flex relative w-fit m-auto'>
            <h5 className="lg:text-[2rem] lg:leading-10 lg:pt-10 pt-4 text-base font-semibold">Embed Into Your Site</h5>
            <Image
              src={vectorLaunchLeft}
              className="absolute filter opacity-90 animate-blob left-[-10px] bottom-[-6px]"
              alt="icon-blue"
            />
          </div>
          <p className="lg:text-[1.25rem] lg:leading-8 text-xs pt-4 pb-10">Easily embed ChatFly into your website in minute using our fully customizable widgets. </p>
          {/* href={`${process.env.REACT_APP_DOC_PAGE}/documentation/bot-integration/embed-on-site`} */}
          <button className='text-white lg:px-5 lg:py-3 px-1 py-1 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sx bg-btnStart'>
            <div className='flex'>
              <p className='font-semibold mr-[0.625rem] md:text-base text-[0.625rem]'>Embeddable Widgets</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.52 17.51 22 12 22L11.7202 21.9962C6.32942 21.8478 2 17.4264 2 12C2 6.49 6.48 2 12 2C17.51 2 22 6.49 22 12ZM10.02 8C9.73 8.3 9.73 8.77 10.03 9.06L12.98 12L10.03 14.94C9.73 15.23 9.73 15.71 10.02 16C10.32 16.3 10.79 16.3 11.08 16L14.57 12.53C14.71 12.39 14.79 12.2 14.79 12C14.79 11.8 14.71 11.61 14.57 11.47L11.08 8C10.94 7.85 10.75 7.78 10.56 7.78C10.36 7.78 10.17 7.85 10.02 8Z" fill="white" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="w-5/12">
        <Image src={frameLaunchRight} alt='frame launch left' className='bg-frameoverlay rounded-t-2xl'></Image>
        <div className="bg-launchoverlay text-center text-white pb-10 rounded-b-2xl px-4">
          <div className='flex relative w-fit m-auto'>
            <h5 className="lg:text-[2rem] lg:leading-10 lg:pt-10 pt-4 font-semibold">Integrate Into Your Applications</h5>
            <Image
              src={vectorLaunchRight}
              className="absolute filter opacity-90 animate-blob right-[-10px] bottom-[-6px]"
              alt="icon-blue"
            />
          </div>
          <p className="lg:text-[1.25rem] lg:leading-8 text-xs pt-4 pb-10">Our API allows you to integrate AI chatbot into your own products using our APIs.</p>
          <button className='text-white bg-[#000E1A] lg:px-5 lg:py-3 px-1 py-1 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sm'>
            <div className='flex'>
              <p className='font-semibold mr-[0.625rem] md:text-base text-[0.625rem]'>API Documentation</p>
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