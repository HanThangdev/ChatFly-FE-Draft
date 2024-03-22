import React, { useState } from 'react'
import LoopAdd from '../../../../public/assets/add-loop.png'
import LoopTune from '../../../../public/assets/tune-loop.png'
import LoopCustom from '../../../../public/assets/cus-loop.png'
import LoopLaunch from '../../../../public/assets/lauch-loop.png'
import iconDocument from '../../../../public/assets/icon-document.svg'
import iconTune from '../../../../public/assets/icon-smile.svg'
import iconSetting from '../../../../public/assets/icon-setting.svg'
import iconLaunch from '../../../../public/assets/icon-launch.svg'
import Image from 'next/image'
import AddData from './AddData'
import Customize from './Customize'
import TuneChatbot from './TuneChatBot'
import Launch from './Launch'

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

  const stepList = [
    {
      key: '0',
      value: 'Add Data',
      icon: iconDocument,
      loop: LoopAdd
    },
    {
      key: '1',
      value: 'Tune Chatbot',
      icon: iconTune,
      loop: LoopTune
    },
    {
      key: '2',
      value: 'Customize Appearance',
      icon: iconSetting,
      loop: LoopCustom
    },
    {
      key: '3',
      value: 'Launch Chatbot',
      icon: iconLaunch,
      loop: LoopLaunch
    },
  ]

  return (
    <div className='bg-works'>
      <div className='min-h-xl max-w-screen-xl justify-center items-start m-auto flex-col'>
        <h2 className='text-[#3169E6] text-[1.25rem] leading-8 pb-4'>SEE HOW CHATFLY WORKS</h2>
        <div className='flex gap-4 justify-between pt-4 pb-20'>
          {stepList.map((item) =>
            <button key={item.key} className='py-4 px-10' onClick={() => onChangeStep(item.key)}>
              <div className={`flex items-center font-semibold text-[1.25rem] leading-8 ${item.key === stepSelect ? 'text-white' : 'text-[#9e9e9e]'}`}>
                <Image src={item.icon} alt={item.value} />
                {stepSelect === item.key &&
                  <Image src={item.loop} alt={item.value} className='absolute mt-[-8px] ml-[-30px]' />
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