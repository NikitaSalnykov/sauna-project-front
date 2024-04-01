import React from 'react'
import { Title } from '../Title/Title'

export const PriceList = () => {
  return (
    <div className='mb-4'>
      <Title title={"Прайс-лист"}/>

    <div className="md:px-24 xl:px-44  flex flex-col gap-4">
    <div>
        <div className="flex justify-center items-center mb-4">
        <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className='text-lg md:text-xl font-semibold'>Баня</h4>
        <p className='text-secondaryText text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quidem?</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>1 година</p>
            <div className='w-full h-[1px] bg-secondaryText opacity-30'></div>
            <p className='w-[200px] text-center font-semibold'>300 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm  md:text-xl font-semibold'>
            <p className='w-[200px]  text-center'>3 години</p>
            <div className='w-full h-[1px] bg-black opacity-30'></div>
            <p className='w-[200px] text-center font-semibold'>500 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>Безліміт</p>
            <div className='w-full h-[1px] bg-black opacity-30'></div>
            <p className='w-[200px] text-center font-semibold'>1000 грн</p>
          </div>
        </li>
      </ul>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4">
        <div className="flex flex-col justify-center items-center">
        <h4 className='text-lg md:text-xl font-semibold'>Чани</h4>
        <p className='text-secondaryText text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quidem?</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>1 година</p>
            <div className='w-full h-[1px] bg-secondaryText opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>300 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>3 години</p>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>500 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>Безліміт</p>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>1000 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>+Трави</p>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>200 грн</p>
          </div>
        </li>
      </ul>
      </div>

      <div>
        <div className="flex justify-center items-center mb-4">
        <div className="flex flex-col justify-center items-center">
        <h4 className='text-lg md:text-xl font-semibold'>Готель</h4>
        <p className='text-secondaryText text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quidem?</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>Стандарт</p>
            <div className='w-full h-[1px] bg-secondaryText opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>1200 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>Люкс</p>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>1900 грн</p>
          </div>
        </li>
      
      </ul>
      </div>
    </div>
    </div>
  )
}
