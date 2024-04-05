import React from 'react'
import photo2 from '../../images/venik.png'
import photo1 from '../../images/photo-3.jpg'

import { Social } from '../Social/Social'
import Svg from '../Svg/Svg'
export const AboutUs = () => {
  return (
    <div class={`flex flex-col md:flex-row-reverse gap-4 md:gap-12 justify-center items-center mt-8`}>
        <div className='md:w-1/2 w-full relative mb-6 md:mb-12 hidden md:block'>
          <div className="overflow-hidden flex md:justify-end">
          <img class=" rounded-lg min-h-[200px] md:min-h-[400px] bg-slate-200 md:h-[300px] w-[90%] object-cover" src={photo1} alt='sauna'/>

          </div>
            <div className=" absolute bottom-[-50px] right-[-20px] md:bottom-[-100px] md:left-[-60px] xl:left-[-100px]">
            <img class=" rounded-lg md:w-[200px] xl:w-[250px]  object-cover  saturate-200" src={photo2} alt='sauna'/>
            </div>
        </div>

    <div class={`flex flex-col-reverse md:flex-col-reverse gap-4 w-full md:w-1/2`}>
        <div className="md:py-4 md:px-4">
        <h3 className=' text-xl md:text-3xl font-bold mb-4 w-full'>Про нас</h3>
      <div className='flex gap-4 flex-col'>
                <p className='text-bold text-md md:text-lg text-secondaryText'>Наша лазня "Баня на озері" пропонує найкращі умови для вашого відпочинку та розслаблення. Ми горді нашою сучасною інфраструктурою, комфортабельними приміщеннями та професійним обслуговуванням, що допоможе вам насолодитися кожною миттю вашого візиту до нас.</p>
                <div className="text-black text-xl flex flex-col gap-1">
      <div className="flex flex-row gap-2 items-center">
      <Svg
              id={'icon-phone'}
              size={'23'}
              fill={'black'}
            />
        <p className='text-sm md:text-lg font-semibold'>Контактний телефон: <span className='text-blue '>+38056456466</span></p>
      </div>
      <div className="flex flex-row gap-2 items-center">
      <div className=' text-2xl font-extrabold'>@</div>
        <p className='md:text-lg text-sm font-semibold'>Ел. адреса: <span className='text-blue '>dfsd@fdsad.com</span></p>
      </div>
      </div>
                <Social/>
              </div>
      </div>    
    </div>
  </div>
  )
}
