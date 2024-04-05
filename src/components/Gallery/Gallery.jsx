import React from 'react'
import Photo1 from '../../images/photo-1.jpg'
import Photo2 from '../../images/photo-2.jpg'
import Photo3 from '../../images/photo-3.jpg'
import Photo4 from '../../images/photo-4.jpg'
import { Title } from '../Title/Title'
import { Section } from '../Section/Section'
import { Container } from '../Container/Container'

export const Gallery = () => {
  return (
    <Section>
    <Container >
    <Title title={"Відпочинок"} accent={"у лазні"}/>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
    <div class="grid gap-4">
      <div className=" md:py-4 md:px-4">
        <h3 className='flex text-lg md:text-xl font-bold mb-4'>Комфорт та затишок</h3>
      <div className='flex gap-4 flex-col md:flex-row '>
                <p className='text-secondaryText text-bold text-md md:text-lg md:w-1/2'>У нашій лазні "Баня на озері" вас сучасні та затишні приміщення, створені для максимального комфорту і розслаблення. Тут кожна деталь продумана з метою створити неповторний атмосферний настрій</p>
                <p className='text-secondaryText text-bold text-md md:text-lg md:w-1/2'>На території нашої лазні розташоване чарівне озеро та природний ліс, що створюють унікальну атмосферу злагоди з природою. Тут ви зможете насолоджуватися спокоєм та свіжим повітрям.</p>
              </div>
      </div>
        <div className='h-[200px] md:h-[400px] w-auto overflow-hidden'>
            <img class=" rounded-lg h-full w-full object-cover" src={Photo4} alt=""/>
        </div>
    </div>
    <div class="flex flex-col-reverse md:flex-col gap-4 ">
    <div className='h-[200px] md:h-[400px] w-auto overflow-hidden flex gap-4'>
            <img class=" rounded-lg h-full w-1/3 object-cover" src={Photo3} alt=""/>
            <img class=" rounded-lg h-full w-auto  object-cover" src={Photo1} alt=""/>
        </div>
        <div className="md:py-4 md:px-4">
        <h3 className='flex text-lg md:text-xl font-bold mb-4'>Відновлення енергії!</h3>
      <div className='flex gap-4 flex-col md:flex-row'>
                <p className='text-bold text-md md:text-lg '>Наша лазня пропонує різноманітні процедури та послуги, які допоможуть вам відновити енергію і зарядитися позитивним настроєм. Гарячі чани та сучасна сауна - у нас ви знайдете все необхідне для повного відновлення і зарядження життєвими силами.</p>
              </div>
      </div>    
    </div>
</div>
</Container>
    </Section>

  )
}
