import React from 'react'
import Photo1 from '../../images/photo-1.jpg'
import Photo2 from '../../images/photo-2.jpg'
import Photo3 from '../../images/photo-3.jpg'
import Photo4 from '../../images/photo-4.jpg'
import { Title } from '../Title/Title'
import { Section } from '../Section/Section'
import { Container } from '../Container/Container'
import { TerritoryItem } from '../TerritoryItem/TerritoryItem'

const territory = [{img: Photo1, title: "Зала", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."}, {img: Photo2, title: "Баня", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
{img: Photo4, title: "Чани", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
{img: Photo3, title: "Річка", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."},
{img: Photo1, title: "Парковка", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam accusamus modi libero magnam minus sequi impedit harum sint inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum venia."}]

export const TerritoryList = () => {
  return (
<div className=" py-8 md:py-8 xl:py-8">
<Container >
    <div className="flex flex-col gap-5">
      {territory.map((el, index) => <TerritoryItem img={el.img} text={el.text} title={el.title} index={index}/>)}
    </div>
</Container>
</div>
  )
}
