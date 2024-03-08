import React from 'react'
import Svg from '../Svg/Svg'

export const Features = () => {
  return (
    <div className='xl:container py-4 md:py-8 px-4 xl:px-0 '>
        <h2 className="text-center text-2xl uppercase font-bold pb-4 md:pb-8">Lorem ipsum dolor</h2>     
         <ul className='flex gap-8 justify-center items-center flex-wrap'>
        <li className='w-[400px]'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <div>
              <Svg id={"icon-bus"} size={32} fill={"black"}/>
            </div>
            <p className='text-xl text-center'>Lorsit amet.</p>
            <p className='text-md text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident qui accusantium inventore enim in molestiae adipisci voluptatibus harum, soluta, facere numquam quod nulla pariatur expedita illum eos repellendus asperiores.</p>
          </div>
        </li>
        <li className='w-[400px]'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className='w-4 h-4 bg-black'></div>
            <p className='text-xl text-center'>Lorsit amet.</p>
            <p className='text-md text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident qui accusantium inventore enim in molestiae adipisci voluptatibus harum, soluta, facere numquam quod nulla pariatur expedita illum eos repellendus asperiores.</p>
          </div>
        </li>
        <li className='w-[400px]'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className='w-4 h-4 bg-black'></div>
            <p className='text-xl text-center'>Lorsit amet.</p>
            <p className='text-md text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident qui accusantium inventore enim in molestiae adipisci voluptatibus harum, soluta, facere numquam quod nulla pariatur expedita illum eos repellendus asperiores.</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
