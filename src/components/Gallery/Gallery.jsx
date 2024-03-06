import React from 'react'
import Photo1 from '../../images/photo-1.jpg'
import Photo2 from '../../images/photo-2.jpg'
import Photo3 from '../../images/photo-3.jpg'
import Photo4 from '../../images/photo-4.jpg'

export const Gallery = () => {
  return (
    

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:container py-8 md:py-12 px-4 xl:px-0 ">
    <div class="grid gap-4">
      <div className="md:py-8 px-4 md:px-8">
        <h2 className='flex text-xl font-bold mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni!</h2>
      <div className='flex gap-4 flex-col md:flex-row'>
                <p className='text-bold text-lg md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore.</p>
                <p className='text-bold text-lg md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vel adipisci veritatis nobis dignissimos quos magni necessitatibus repellendus quibusdam, dicta facere, nostrum minus ea quisquam dolorum accusamus iste nihil et.</p>
              </div>
      </div>
        <div className=' h-[510px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo4} alt=""/>
        </div>
        {/* <div className="grid grid-cols-2 gap-4 ">
<div className='h-[350px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo3} alt=""/>
        </div>
        <div className='h-[350px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo1} alt=""/>
        </div>
</div> */}
    </div>
    <div class="grid gap-4 grid">
    <div className=' h-[510px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo3} alt=""/>
        </div>
        <div className="md:py-8 px-4 md:px-8">
        <h2 className='flex text-xl font-bold mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni!</h2>
      <div className='flex gap-4 flex-col md:flex-row'>
                <p className='text-bold text-lg md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore.</p>
                <p className='text-bold text-lg md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vel adipisci veritatis nobis dignissimos quos magni necessitatibus repellendus quibusdam, dicta facere, nostrum minus ea quisquam dolorum accusamus iste nihil et.</p>
              </div>
      </div>
{/* <div className="grid grid-cols-2 gap-4 ">
<div className='h-[350px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo3} alt=""/>
        </div>
        <div className='h-[350px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo1} alt=""/>
        </div>
</div> */}
        
    </div>
</div>

  )
}
