import React from 'react';
import Image from '../../assets/hero.webp'

import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <div class="flex flex-col pt-24 pb-8 px-6 space-y-6 h-[500px] md:h-[500px] xl:h-[575px] md:py-12 md:flex-row md:items-center md:space-x-6 bg-cover bg-center bg-no-repeat bg-black justify-start xl:justify-center relative"  
    style={{ 
        backgroundImage: `url(${Image})`, 
      }}>
                <div className="xl:hidden w-full h-full bg-black absolute left-0 bottom-0 opacity-70 "></div>
        <div class="lg:container flex flex-col items-center selection:md:items-right w-full md:flex-row z-10 justify-center md:justify-end text-center md:text-end">
            <div class="max-w-[400px] md:max-w-[700px] xl:max-w-[800px] md:p-12 xl:p-24">
                <h1 class="text-3xl font-semibold  tracking-wide text-white md:text-4xl text-antiquewhite">Найкращій <span className='text-lightBrown'>відпочинок у лазні</span></h1>
                <p class="mt-4 text-gray-300 text-md md:text-lg">У спа-готелі Баня на Озері вас чекає атмосфера справжнього відпочинку. Лазня на дровах, гарячі чани з травами, зручні готельні номери та паркувальні місця - все для вашого комфорту. А пляжна зона з чистою річкою створює неповторне враження для сімейного відпочинку або зустрічі з друзями.
</p>
                <div class="mt-6">
                    <Link href="#" class="block px-3 py-2 font-semibold text-center text-darkBrown transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400 bg-lightBrown">Забронювати</Link>
                </div>
            </div>
        </div>

    </div>
  );
};


