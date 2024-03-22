import React from 'react'
import carousel from '../../../../public/assets/carousel.png'
import Image from 'next/image'
import vectorChat from '../../../../public/assets/vector-chat.png'
import vectorUnder from '../../../../public/assets/vector-under.png'

export default function Carousel() {
  return (
    <div className='bg-bgLanding py-20'>
      <div className='text-center'>
        <div>
          {/* <Image src={vectorChat} alt={"chat"} className='top-[160px] left-[380px] absolute z-0'/>
          <Image src={vectorUnder} alt={"under"} className='top-[220px] right-[380px] absolute z-0'/> */}
          <h2 className='relative z-10 font-bold text-[4rem] leading-[4.5rem] text-white pt-20 pb-10'>
            Your Custom ChatGPT
          </h2>
        </div>
        <p className='text-[#D1D2D5] text-[1.25rem] leading-8'>Empower Your Business Using Chatfly AI Assistant:</p>
        <p className='text-[#D1D2D5] text-[1.25rem] leading-8'>3x Faster, Privacy, and Accuracy.</p>
        <div className="py-20">
          <button className="mr-4 text-white px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sx bg-btnStart">Sign building — it&apos;s free</button>
          <button className="text-white bg-[#000E1A] px-5 py-3 border-[1px] border-[#FFFFFF33] gap-8 rounded-lg shadow-inner-sm">Get a Demo</button>
        </div>
        <div className='pb-20'>
          <Image src={carousel} alt="Carousel" />
        </div>
      </div>
    </div>
  )
}

