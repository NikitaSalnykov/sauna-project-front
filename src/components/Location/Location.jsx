import React from 'react'
import { Link } from 'react-router-dom'

export const Location = () => {
  return (
    <div className='xl:container px-4 py-4 md:py-8 xl:px-0'>
        <h2 className="text-center text-2xl uppercase font-bold pb-4 md:pb-8 ">Ми на мапі</h2>     
      <div className='flex gap-4 md:gap-4 justify-center items-center flex-col md:flex-row-reverse'>
        <div className='w-full h-auto max-w-[600px] md:w-[600px] xl:w-1/3 overflow-hidden  rounded-xl relative  shadow-md'>
                <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d339013.15928343195!2d35.3141648!3d48.4077705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40de8d6604352f53%3A0xdbf5ee3fb7ac54d6!2z0JzQuNC60L7Qu9Cw0ZfQstC60LAsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1Mjc0NA!5e0!3m2!1suk!2sua!4v1710339030278!5m2!1suk!2sua"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="py-1 px-2 md:py-2 md:px-4  text-white absolute bottom-[5px] right-[5px] opacity-70 hover:opacity-100 transition rounded-lg text-xs">
            <Link target="_blank" to={"https://www.google.com/maps/place/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D0%BA%D0%B0,+%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+52744/@48.4077705,35.3141648,10z/data=!4m15!1m8!3m7!1s0x40dbd952c1a2232f:0x6140c30652cc8838!2z0JzQuNC60L7Qu9Cw0ZfQstC60LAsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1MTg0Mg!3b1!8m2!3d48.5414013!4d34.7164076!16s%2Fg%2F1226m1vl!3m5!1s0x40de8d6604352f53:0xdbf5ee3fb7ac54d6!8m2!3d48.3802461!4d36.2995962!16s%2Fg%2F1hf_cjz6d?hl=uk&entry=ttu"}>Переглянути на google-мапі</Link>
          </div>
        </div>
        <div className='flex w-full md:w-1/2 gap-6 lg:gap-6 md:flex-col md:py-4 md:px-8'>
         <h3 className="hidden md:block  text-xl font-bold">Lorem ipsum dolor sit amet</h3>     
          <p  className='hidden md:block text-sm xl:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non perferendis, repudiandae et quos obcaecati labore! Quisquam explicabo officia fuga pariatur ipsa! Eligendi commodi eum quia neque, exercitationem nam ullam veritatis!</p>
        <div className="w-full ">
        </div>
        </div>
      </div>
    </div>
  )
}
