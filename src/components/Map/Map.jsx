import React from 'react'
import MapImg from '../../images/Mykolaivka.jpg'

export const Map = () => {
  return (
    <div className='xl:container'>
        <h2 className="text-center text-2xl uppercase font-bold pb-4 md:pb-8 ">Lorem ipsum dolor</h2>     
      <div className='flex gap-4 px-4 xl:px-0 md:gap-12 justify-center items-center flex-col md:flex-row'>
        <div className='w-full md:w-[400px]'>
          <img className='rounded-xl  grayscale-[60%]' src={MapImg} alt="map" />
        </div>
        <div className='flex md:w-1/2 gap-6'>
        <div className="mb-4 w-1/2">
        <p className='text-md md:text-xl font-bold mb-2'>Lorem ipsum</p>
        <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amedfdsf sdf sdf gfg fg sddgr dd!</p>
        </div>
        <div className="w-1/2">
          <h3 className='text-md font-bold pb-2 md:pb-2 '>Адреса та контакти</h3>
          <ul className='md:flex gap-4'>
            <li>
              <p className='text-xs md:text-md'><b>Адреса:</b> с.Миколаївка</p>
            </li>
            <li>
              <p className='text-xs md:text-md'><b>Телефон:</b> +380670231541</p>
            </li>
            <li>
              <p className='text-xs md:text-md'><b>Ел.адреса:</b> banyanaozeri@gmail.com</p>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
