import React from 'react'
import { Title } from '../Title/Title'

export const PriceList = () => {
  return (
    <div>
      <Title title={"Прайс-лист"}/>

      <div className="">
        <div className="flex justify-center items-center mb-2">
        <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className='text-lg md:text-xl font-semibold'>Баня</h4>
        <p className='text-secondaryText text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quidem?</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto p-4 flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-lg md:text-2xl'>
            <p className='w-[200px] text-center'>1 година</p>
            <div className='w-full h-[1px] bg-secondaryText opacity-70'></div>
            <p className='w-[200px] text-center'>300 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-lg md:text-2xl'>
            <p className='w-[200px] text-center'>3 години</p>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='w-[200px] text-center'>500 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-lg md:text-2xl'>
            <p className='w-[200px] text-center'>Безліміт</p>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='w-[200px] text-center'>1000 грн</p>
          </div>
        </li>
      </ul>
      </div>

      <div className="">
        <div className="flex justify-center items-center mb-2">
        <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className='text-lg md:text-xl font-semibold'>Чани</h4>
        <p className='text-secondaryText text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quidem?</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto p-4 flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-lg md:text-2xl'>
            <p className='w-[200px] text-center'>1 година</p>
            <div className='w-full h-[1px] bg-secondaryText opacity-70'></div>
            <p className='w-[200px] text-center'>300 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-lg md:text-2xl'>
            <p className='w-[200px] text-center'>3 години</p>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='w-[200px] text-center'>500 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-lg md:text-2xl'>
            <p className='w-[200px] text-center'>Безліміт</p>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='w-[200px] text-center'>1000 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-lg md:text-2xl'>
            <p className='w-[200px] text-center'>Додавання трав</p>
            <div className='w-full h-[1px] bg-black'></div>
            <p className='w-[200px] text-center'>200 грн</p>
          </div>
        </li>
      </ul>
      </div>
    </div>
  )
}
