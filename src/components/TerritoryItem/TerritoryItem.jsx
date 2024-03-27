import React from 'react'

export const TerritoryItem = ({img, title, text, index}) => {
  return (
    <div class={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 justify-center items-center`}>
        <div className='w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={img} alt={title}/>
        </div>

    <div class={`${index % 2 === 0 ? "md:order-first md:text-end" : "order-second text-start"} flex flex-col-reverse md:flex-col-reverse gap-4 `}>
        <div className="md:py-4 md:px-4">
        <h3 className=' text-xl md:text-3xl font-bold mb-4 w-full'>{title}</h3>
      <div className='flex gap-4 flex-col md:flex-row'>
                <p className='text-bold text-md md:text-xl'>{text}</p>
              </div>
      </div>    
    </div>
  </div>
  )
}
