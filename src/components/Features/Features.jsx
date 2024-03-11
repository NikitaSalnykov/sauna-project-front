import React from 'react'
import Svg from '../Svg/Svg'

export const Features = () => {
  return (
    <div className='xl:container py-4 md:py-8 px-4 xl:px-0 '>
        <h2 className="text-center text-2xl uppercase font-bold pb-4 md:pb-8">Lorem ipsum dolor</h2>     
         <ul className='flex gap-8 xl:gap-16 justify-center items-center flex-wrap'>
         <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-bus"} size={32} fill={"#f1d8cd"}/>
            </div>
            <p className='text-xs md:text-lg text-center'>Трансфер</p>
</div>
            <p className='text-sm text-start md:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident qui accusantium inventore enim in molestiae adipisci voluptatibus harum, soluta, facere numquam quod nulla pariatur expedita illum eos repellendus asperiores.</p>
          </div>
        </li>
        <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-key"} size={32} fill={"#f1d8cd"}/>
            </div>
            <p className='text-xs md:text-lg text-center'>Готельні номери</p>
</div>
            <p className='text-sm text-start md:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident qui accusantium inventore enim in molestiae adipisci voluptatibus harum, soluta, facere numquam quod nulla pariatur expedita illum eos repellendus asperiores.</p>
          </div>
        </li>
        <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-jacuzzi"} size={32} fill={"#f1d8cd"}/>
            </div>
            <p className='text-xs md:text-lg text-center'>Горячі чани</p>
</div>
            <p className='text-sm text-start md:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident qui accusantium inventore enim in molestiae adipisci voluptatibus harum, soluta, facere numquam quod nulla pariatur expedita illum eos repellendus asperiores.</p>
          </div>
        </li>
        <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-beach"} size={32} fill={"#f1d8cd"}/>
            </div>
            <p className='text-xs md:text-lg text-center'>Озеро на території</p>
</div>
            <p className='text-sm text-start md:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum provident qui accusantium inventore enim in molestiae adipisci voluptatibus harum, soluta, facere numquam quod nulla pariatur expedita illum eos repellendus asperiores.</p>
          </div>
        </li>

      </ul>
    </div>
  )
}
