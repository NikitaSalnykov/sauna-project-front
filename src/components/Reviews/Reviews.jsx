import React from 'react'
import photo from '../../images/photo-1.jpg'
import photo1 from '../../images/photo-2.jpg'
import photo2 from '../../images/photo-3.jpg'
import photo3 from '../../images/photo-4.jpg'

import { Review } from '../Review/Review'
import { SwiperComponent } from '../Swiper/Swiper'
const reviews = [{
  image: photo1,
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, sed saepe. Unde nisi itaque harum suscipit adipisci sunt optio rerum?",
  author: "Ганна",
},
{
  image: photo3,
  text: "Lorem ipsum temporibus odio aliquid expedita, perspiciatis neque possimus eligendi sequi corporis, laborum officia reprehenderit? Adipisci facere laudantium dolore nulla possimus atque? Debitis voluptate labore autem tempore mollitia totam voluptatibus fuga perspiciatis excepturi quod vel exercitationem quibusdam, at deleniti. Nemo, natus beatae?",
  author: "Катерина",
},
{
  image: photo,
  text: "Lorem, ipsum dolor sit amet rerum?",
  author: "Жора",
},
{
  image: photo3,
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, sed saepe. Unde nisi itaque harum suscipit adipisci sunt optio rerum?",
  author: "Катя",
}]

export const Reviews = () => {
  return (
<div className=" bg-black mt-8 md:mt-12">
<div className="w-full xl:container px-4 pt-4 md:pt-12 pb-10 md:pb-16 xl:px-0">
<h2 className="text-center text-2xl uppercase font-bold text-white pb-2 md:pb-4">Наші улюблені гості</h2>     
<p className='md:px-[10vh] text-center text-md md:text-lg text-gray-300 pb-4 md:pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Delectus officia eveniet omnis cumque facilis fugiat. Minima adipisci ullam excepturi sunt ex veniam soluta fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam, nesciunt cumque corrupti molestiae ex reprehenderit perspiciatis inventore quasi, fugit repellendus? Esse quaerat eius aliquam repudiandae, delectus aut quas reiciendis?</p>
<ul class="flex">
    <SwiperComponent reviews={reviews}/>
  </ul>

</div>
</div>
  )
}
