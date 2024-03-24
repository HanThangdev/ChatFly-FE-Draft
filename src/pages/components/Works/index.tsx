import { useState } from 'react'
import Image from 'next/image'
import AddData from './AddData'
import Customize from './Customize'
import Launch from './Launch'
import TuneChatbot from './TuneChatBot'
import { stepList } from '@/constants/works'

function Works() {
  const [stepSelect, setStepSelect] = useState('0');

  const onChangeStep = (key: string) => {
    setStepSelect(key)
  }

  const stepShow = [
    {
      key: '0',
      component: <AddData />
    },
    {
      key: '1',
      component: <TuneChatbot />
    },
    {
      key: '2',
      component: <Customize />
    },
    {
      key: '3',
      component: <Launch />
    }
  ]


  return (
    <div id='hiw' className='bg-works md:pt-20 pt-5'>
      <div className='min-h-xl max-w-screen-xl justify-center items-start m-auto flex-col max-lg:px-10'>
        <h2 className='text-[#3169E6] text-[1.25rem] leading-8 pb-4'>SEE HOW CHATFLY WORKS</h2>
        <div className='flex gap-4 justify-between pt-4 pb-20'>
          {stepList.map((item) =>
            <button key={item.key} className='lg:py-4 lg:px-10' onClick={() => onChangeStep(item.key)}>
              <div className={`flex items-center font-semibold lg:text-[1.25rem] lg:leading-8 md:text-base text-xs ${item.key === stepSelect ? 'text-white' : 'text-[#9e9e9e]'}`}>
                <Image src={item.icon} alt={item.value} className='md:w-[22.22px] w-[16px]' />
                {stepSelect === item.key &&
                  <Image key={item.key} src={item.loop} alt={item.value} className='absolute mt-[-8px] ml-[-30px] hidden md:flex max-lg:w-[20%]' />
                }
                <p className='ml-2'>{item.value}</p>
              </div>
            </button>
          )}
        </div>
        {stepShow.map((item) => item.key === stepSelect && item.component)}
      </div>
    </div>
  )
}

export default Works