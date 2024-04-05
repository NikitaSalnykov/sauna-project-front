import React from 'react'
import photo2 from '../../images/photo-2.jpg'
import photo3 from '../../images/photo-4.jpg'

import { Review } from '../Review/Review'
import { SwiperComponent } from '../Swiper/Swiper'
import { Title } from '../Title/Title'
const reviews = [{
  image: 'https://deninna.com/wp-content/uploads/2022/09/01.jpg',
  text: "Неймовірна атмосфера та чудові процедури! Дуже задоволені відпочинком в 'Бані на озері'. Рекомендую всім!",
  author: "Олена М.",
},
{
  image: photo2,
  text: "Професійний підхід та уважне ставлення до клієнтів. Дякуємо за чудовий відпочинок!",
  author: "Володимир П.",
},
{
  image: photo3,
  text: "Комфортабельні умови, дітям дуже сподобалися горячі чани. Все було на вищому рівні, приїдимо ще!",
  author: "Ірина К.",
},
{
  image: 'https://remhouse.info/wp-content/uploads/2019/04/iStock-6653723301.jpg',
  text: "Стрибнути в озеро після бані, а потім посидіти в чані - кайф. Будемо у Вас на фіналі Ліги Європи!",
  author: "Генадій А.",
}]

export const Reviews = () => {
  return (
<div className=" bg-black mt-8 md:mt-12">
<div className="w-full xl:container px-4 pt-4 md:pt-12 pb-10 md:pb-16 xl:px-0">
<h2 className="text-center text-3xl md:text-4xl font-semibold pb-4 md:pb-12 text-white">Наші улюблені<span className='text-lightBrown'> гості</span></h2>    
<p className='md:px-[10vh] text-center text-md md:text-lg text-gray-300 pb-4 md:pb-8'>Ми дуже цінуємо наших гостей і робимо все можливе, щоб вони були повністю задоволені своїм відпочинком у нас. Наша мета - забезпечити вам незабутні враження і заряд позитивних емоцій!</p>
<ul class="flex">
    <SwiperComponent reviews={reviews}/>
  </ul>

</div>
</div>
  )
}
