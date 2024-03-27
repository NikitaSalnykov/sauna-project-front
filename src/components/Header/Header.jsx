import React, { useState } from 'react'
import Svg from '../Svg/Svg'
import {Logo} from '../Logo/Logo'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const onToglegModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className='fixed z-50 w-full '>
          <nav className="bg-light z-50 py-2 bg-black ">
        <div className="md:flex items-center justify-between py-2 px-4 md:px-12">
            <div className="flex justify-between items-center">
               <div className="flex lg:flex-1 ">
            <Logo size={42} textSize={20}/>
          </div>
                <div className="md:hidden" onClick={onToglegModal}>
                    <button type="button" className="block text-white hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
<div className="flex md:gap-2 xl:gap-4 justify-center items-center">
<div className=" flex-col md:flex-row hidden md:block -mx-2 ">
                <Link to="/home" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-1 md:mx-1 xl:mx-2 xl:px-2 md:text-lg xl:text-xl">Головна</Link>
                <Link to="/about" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-1 md:mx-1 xl:mx-2 xl:px-2 md:text-lg xl:text-xl">Про нас</Link>
                <Link to="/territory" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-1 md:mx-1 xl:mx-2 xl:px-2 md:text-lg">Територія</Link>
                <Link to="/price" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-1 md:mx-1 xl:mx-2 xl:px-2 md:text-lg xl:text-xl">Прайс</Link>

            </div>
            <div className="hidden text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 md:text-lg md:flex justify-center items-center gap-1">
            <Svg
                    id={'icon-phone'}
                    size={'24px'}
                    fill={'white'}
                  />
              <p className='text-xl font-semibold'>+38056456466</p>
            </div>
</div>

        </div>
    </nav>
    <MobileMenu isOpen={isModalOpen}
        onCloseModal={onToglegModal}/>
    </header>
  )
}

export default Header