import React, { useState } from 'react'

export const Review = ({review}) => {
  const [showPicture, setShowPicture] = useState(false)

  return (
    <div  className='relative flex w-full mx-4'>
    <div className="  rounded-2xl shadow-2xl overflow-hidden h-[300px] md:h-[400px] w-[80%] md:w-[600px] xl:w-[700px]" onClick={() => setShowPicture(!showPicture)}>
      <img alt="Card" src={review.image} className={`max-w-full rounded-xl shadow-xl w-full h-full object-cover `}/>
    </div>

    <div onClick={() => setShowPicture(false)}>
        <div class={`flex flex-col text-darkBrown bg-[#f1d8cde3] md:bg-lightBrown p-4  rounded-2xl max-h-[400px] absolute z-10 bottom-[-20px] right-[20px] w-[80%] md:min-w-[500px]  md:w-[60%] xl:w-[500px] md:right-[100px] xl:right-[30%] ${showPicture && "opacity-30"} transition-all shadow-md`}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-darkBrown fill-current w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>
                </div>
                <p class="text-darkBrown my-2 px-2 text-sm md:text-md ">
                {review.text}
                </p>
                <div class="flex justify-between pl-2">
                    <h3 class="font-bold md:text-xl">{review.author}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
