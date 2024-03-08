import React from 'react'
import Photo1 from '../../images/photo-1.jpg'
import Photo2 from '../../images/photo-2.jpg'
import Photo3 from '../../images/photo-3.jpg'
import Photo4 from '../../images/photo-4.jpg'

export const Gallery = () => {
  return (
  <div className='xl:container py-4 md:py-8 px-4 xl:px-0 '>
        <h2 className="text-center text-2xl uppercase font-bold pb-4 md:pb-8">Lorem ipsum dolor</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
    <div class="grid gap-4">
      <div className=" md:py-4 md:px-8">
        <h3 className='flex text-lg md:text-xl font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni!</h3>
      <div className='flex gap-4 flex-col md:flex-row '>
                <p className='text-bold text-sm md:text-md md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore.</p>
                <p className='text-bold text-sm md:text-md md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vel adipisci veritatis nobis dignissimos quos magni necessitatibus repellendus quibusdam, dicta facere, nostrum minus ea quisquam dolorum accusamus iste nihil et.</p>
              </div>
      </div>
        <div className='h-[200px] md:h-[400px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo4} alt=""/>
        </div>
    </div>
    <div class="flex flex-col-reverse md:flex-col gap-4 ">
    <div className='h-[200px] md:h-[400px] w-auto overflow-hidden flex gap-4'>
            <img class=" rounded-lg h-full w-1/3 object-cover" src={Photo3} alt=""/>
            <img class=" rounded-lg h-full w-auto  object-cover" src={Photo1} alt=""/>
        </div>
        <div className="md:py-4 md:px-8">
        <h3 className='flex text-lg md:text-xl font-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni!</h3>
      <div className='flex gap-4 flex-col md:flex-row'>
                <p className='text-bold text-sm md:text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore.</p>
              </div>
      </div>    
    </div>
</div>
  </div>

  )
}
