import React from 'react'

export const ProductCard = ({img, title, price, description}) => {
  return (
    <div class="relative flex w-full md:w-[370px] xl:w-[440px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[540px] md:h-[700px] xl:h-[600px] ">
  <div class="relative mx-4 mt-4 md:min-h-80 h-56 md:h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      class="h-full w-full  object-cover"
    />
  </div>
  <div class="p-6 overflow-hidden">
    <div class="mb-2 flex items-center justify-between">
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {title}
      </p>
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {price}₴
      </p>
    </div>
    <p class="block font-sans text-xs md:text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 h-[180px] mt-4">
      {description}
    </p>
  </div>
</div>

  )
}
