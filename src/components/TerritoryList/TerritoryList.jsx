import React from 'react'
import Photo1 from '../../images/photo-1.jpg'
import Photo2 from '../../images/photo-2.jpg'
import Photo3 from '../../images/photo-3.jpg'
import Photo4 from '../../images/photo-4.jpg'
import { Container } from '../Container/Container'
import { TerritoryItem } from '../TerritoryItem/TerritoryItem'
import { useState } from 'react'
import Svg from '../Svg/Svg'
import { useLocation } from 'react-router-dom';



const territory = [{img: Photo1, title: "Зала", text: "Простора зала нашої лазні створена для вашого максимального комфорту та розслаблення. Тут ви зможете насолоджуватися різноманітними процедурами та відпочинком у затишній атмосфері."}, {img: Photo2, title: "Баня", text: "Наша баня вражає своїми сучасними умовами та можливостями. Тут ви зможете насолодитися гарячими чанами, сауною та іншими корисними процедурами для вашого здоров'я та розслаблення."},
{img: Photo4, title: "Чани", text: "Гарячі чани в нашій лазні допоможуть вам відновити енергію та позбутися стресу. Їх унікальна терапевтична дія забезпечить вам глибоке розслаблення та заряд енергії."},
{img: Photo3, title: "Річка", text: "Наша лазня знаходиться поруч з чарівною річкою, де ви зможете насолоджуватися спокоєм та гармонією природи під час вашого відпочинку."},
{img: Photo1, title: "Парковка", text: "Для зручності наших гостей ми надаємо безкоштовну парковку, де ви можете залишити своє авто під час вашого візиту до нашої лазні."}]

const rooms = [{img: 'https://hotel-nivki.kiev.ua/wp-content/uploads/2017/06/1-standart-3.jpg', title: "Стандарт", text: "Наші стандартні номери - це ідеальний вибір для тих, хто цінує комфорт і затишок. Вони оснащені усім необхідним для приємного відпочинку та включають у себе зручність і функціональність."},
{img: 'https://tyachiv-hotel.com.ua/assets/img/rooms21/standart/01.jpg', title: "Люкс", text: "Номери 'Люкс' - це вищий рівень комфорту та елегантності. Вони пропонують розкішне облаштування та додаткові зручності, які забезпечать вам найкращий відпочинок і зроблять ваше перебування у нашій лазні незабутнім."},
]

export const TerritoryList = () => {
  const location = useLocation();
  const isRoomsPage = location.search.includes('rooms');
  const [type, setType] = useState(isRoomsPage ? "rooms" : "territory") // "rooms"

return (
<div className=" py-8 md:py-8 xl:py-8">
<Container >
    <div className='flex justify-center items-center mb-8'>
    <div class="bg-darkBrown text-md md:text-lg text-lightBrown leading-none border-2 border-lightBrown  rounded-full inline-flex p-1">
    <button onClick={() => setType("territory")} class={`${type === "territory" ? "opacity-100" : "opacity-50"}  inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-white focus:text-white rounded-l-full px-4 py-2 gap-[5px]`} id="grid">
    <Svg id={"icon-tree"} size={24} fill={"#faf2f0"} stroke={"#faf2f0"}/>
      <span>Територія</span>
    </button>
    <button onClick={() => setType("rooms")} class={`${type === "rooms" ? "opacity-100" : "opacity-50"} inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-white focus:text-white rounded-l-full px-4 py-2 gap-[5px]`} id="grid">
    <Svg id={"icon-key"} size={24} fill={"#faf2f0"}/>
      <span>Номери</span>
    </button>
  </div>
    </div>
    <div className="flex flex-col gap-5">
      { type === "territory" ? territory.map((el, index) => <TerritoryItem img={el.img} text={el.text} title={el.title} index={index}/>) : rooms.map((el, index) => <TerritoryItem img={el.img} text={el.text} title={el.title} index={index}/>)}
    </div>
</Container>
</div>
  )
}
