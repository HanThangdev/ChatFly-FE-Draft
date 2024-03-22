import React from 'react'
import iconImporove from '../../../../../public/assets/icon-imporove.png'
import iconBusiness from '../../../../../public/assets/icon-business.png'
import iconLine from '../../../../../public/assets/icon-line.png'
import frameTune from '../../../../../public/assets/frame-tune.png'
import Image from 'next/image'

function TuneChatbot() {
  return (
    <div className='flex gap-4 pb-40'>
      <div className='w-7/12'>
        <h3 className='text-white text-[2.5rem] leading-[3.25rem]'>Tune Your AI Chatbot</h3>
        <p className='text-[#D1D2D5] text-[1.25rem] leading-8 pt-4 pb-10'>Boost your bot&apos;s potential by providing guidance for AI&apos;s intelligent response, including setting rules or customizing Creativity or Focus modes, to achieve business goals.</p>
        <div className='flex items-center'>
          <Image src={iconImporove} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Improve bot responses for diverse inquiries.</p>
        </div>
        <div className='flex items-center py-[2.25rem]'>
          <Image src={iconBusiness} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Tailor bot behavior to specific business needs.</p>
        </div>
        <div className='flex items-center'>
          <Image src={iconLine} alt='icon fly' />
          <p className='ml-2 text-white font-semibold'>Streamline operations with intelligent responses.</p>
        </div>
      </div>
      <div className='w-5/12'>
        <Image src={frameTune} alt='frame add data' />
      </div>
    </div>
  )
}

export default TuneChatbot