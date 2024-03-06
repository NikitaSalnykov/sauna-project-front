import React from 'react';
import Video from '../../assets/video-bg.mp4'
import Image from '../../assets/hero.png'

import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <div class=" flex flex-col px-6 py-8 space-y-6 h-[400px] xl:h-[520px] md:py-12 md:flex-row md:items-center md:space-x-6 bg-cover bg-center bg-no-repeat bg-black justify-center relative"  
    style={{ 
        backgroundImage: `url(${Image})`, 
      }}>
                <div className="md:hidden w-full h-full bg-black absolute left-0 bottom-0 opacity-50 "></div>
        <div class="lg:container flex flex-col items-center selection:md:items-right w-full md:flex-row z-10 justify-center md:justify-end text-center md:text-end">
            <div class="max-w-[400px] md:max-w-[450px] xl:max-w-[800px] md:p-12 xl:p-24">
                <h1 class="text-3xl font-medium tracking-wide text-white md:text-4xl">The best Apple Watch apps</h1>
                <p class="mt-4 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div class="mt-6">
                    <Link href="#" class="block px-3 py-2 font-semibold text-center text-darkBrown transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400 bg-lightBrown">Download from App Store</Link>
                </div>
            </div>
        </div>

    </div>
  );
};


