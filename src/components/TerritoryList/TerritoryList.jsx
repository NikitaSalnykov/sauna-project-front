import React from 'react'
import Photo1 from '../../images/photo-1.jpg'
import Photo2 from '../../images/photo-2.jpg'
import Photo3 from '../../images/photo-3.jpg'
import Photo4 from '../../images/photo-4.jpg'
import { Title } from '../Title/Title'
import { Section } from '../Section/Section'
import { Container } from '../Container/Container'
import { TerritoryItem } from '../TerritoryItem/TerritoryItem'
import { useState } from 'react'
import Svg from '../Svg/Svg'

const territory = [{img: Photo1, title: "Зала", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."}, {img: Photo2, title: "Баня", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
{img: Photo4, title: "Чани", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
{img: Photo3, title: "Річка", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
{img: Photo1, title: "Парковка", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."}]

const rooms = [{img: 'https://hotel-nivki.kiev.ua/wp-content/uploads/2017/06/1-standart-3.jpg', title: "Стандарт", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
{img: 'https://tyachiv-hotel.com.ua/assets/img/rooms21/standart/01.jpg', title: "Люкс", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
]

export const TerritoryList = () => {
const [type, setType] = useState("territory") // "rooms"
return (
<div className=" py-8 md:py-8 xl:py-8">
<Container >
    <div className='flex justify-center items-center mb-8'>
    <div class="bg-darkBrown text-md md:text-lg text-lightBrown leading-none border-2 border-lightBrown  rounded-full inline-flex p-1">
    <button onClick={() => setType("territory")} class={`${type === "territory" ? "opacity-100" : "opacity-50"}  inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-white focus:text-white rounded-l-full px-4 py-2 active gap-[5px]`} id="grid">
    <Svg id={"icon-tree"} size={24} fill={"#faf2f0"} stroke={"#faf2f0"}/>
      <span>Територія</span>
    </button>
    <button onClick={() => setType("rooms")} class={`${type === "rooms" ? "opacity-100" : "opacity-50"} inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-white focus:text-white rounded-l-full px-4 py-2 active gap-[5px]`} id="grid">
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
