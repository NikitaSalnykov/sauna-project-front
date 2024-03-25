import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';
import Svg from '../Svg/Svg';
import { Logo } from '../Logo/Logo';
const modalRoot = document.querySelector('#menu-root');

export const MobileMenu = ({ isOpen, onCloseModal }) => {
  const modalRef = useRef(null);


  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onCloseModal();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCloseModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onCloseModal]);



  return (
    <>
      {isOpen &&
        createPortal(
          <div className=" modal-overlay flex items-center justify-center fixed bg-black bg-opacity-100 top-0 left-0 w-full h-full  z-50 ">
            <div
              className=" shadow-lg rounded-xl w-full h-screen"
              ref={modalRef}
            >
              <div className="justify-center overflow-y-auto relative ">
                <div className="flex items-center justify-between py-4 px-4 md:px-12">
                <Logo size={42} textSize={20}/>
                <Svg
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-500   ml-auto mb-2  cursor-pointer"
                  classNameSvg="opacity-50   hover:opacity-100 hover:scale-105 transition-transform transform-all hover:rotate-90"
                  id={'icon-cross'}
                  size={'24px'}
                  stroke={'black'}
                  onClick={onCloseModal}
                />
                </div>
                <div className="text-white flex flex-col gap-4 justify-center items-center w-full h-[80vh]">
                <a href="#" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Головна</a>
                <a href="#" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Про нас</a>
                <a href="#" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Контакти</a>
                <a href="#" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Головна</a>
                <a href="#" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Про нас</a>
                <a href="#" className="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 text-2xl md:text-3xl">Контакти</a>
                </div>
              </div>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
}
