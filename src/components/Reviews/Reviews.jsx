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
<div className=" bg-black">
<div className="xl:container px-4 pt-4 md:pt-12 pb-10 md:pb-16 xl:px-0">
<h2 className="text-center text-2xl uppercase font-bold text-white pb-4 md:pb-8">Наші улюблені гості</h2>     

<ul class="flex">
    <SwiperComponent reviews={reviews}/>
  </ul>

</div>
</div>
  )
}
