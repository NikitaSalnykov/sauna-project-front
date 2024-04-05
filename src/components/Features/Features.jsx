import React from 'react'
import Svg from '../Svg/Svg'
import { Title } from '../Title/Title'
import { Section } from '../Section/Section'
import { Container } from '../Container/Container'

export const Features = () => {
  return (
    <Section>
    <Container >
        <Title accent={"Наші особливості"}/>
               <ul className='flex gap-8 xl:gap-16 justify-center items-center flex-wrap'>
         <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-bus"} size={32} fill={"#faf2f0"}/>
            </div>
            <p className='text-xs font-bold md:text-lg text-center'>Трансфер</p>
</div>
            <p className=' text-md text-start md:text-center text-secondaryText'>Ми надаємо зручний трансфер для наших гостей, щоб вони могли легко дістатися до нашого прекрасного курорту. Наша команда професіоналів забезпечить вас комфортним та безпечним переїздом, щоб ваш відпочинок розпочався з моменту прибуття.</p>
          </div>
        </li>
        <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-key"} size={32} fill={"#faf2f0"}/>
            </div>
            <p className='text-xs font-bold md:text-lg text-center'>Готельні номери</p>
</div>
            <p className='text-md text-start md:text-center text-secondaryText'>Наші затишні і комфортабельні номери створені для максимального відпочинку та розслаблення. Ви зможете насолоджуватися чистими та затишними приміщеннями, де кожна деталь дбайливо підібрана для вашого комфорту.</p>
          </div>
        </li>
        <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-jacuzzi"} size={32} fill={"#faf2f0"}/>
            </div>
            <p className='text-xs font-bold md:text-lg text-center'>Горячі чани</p>
</div>
            <p className='text-md text-start md:text-center text-secondaryText'>У нашій лазні ви зможете насолоджуватися гарячими чанами, які допоможуть вам розслабитися після напруженого дня. Вони допоможуть відновити силу та енергію, даруючи вам приємні відчуття та заряд бадьорості.</p>
          </div>
        </li>
        <li className='md:w-[320px]'>
        <div className='flex flex-row md:flex-col justify-center items-center gap-8 md:gap-1'>
<div className="flex flex-col justify-center items-center gap-2">
<div className='bg-darkBrown p-2 rounded-xl'>
              <Svg id={"icon-beach"} size={32} fill={"#faf2f0"}/>
            </div>
            <p className='text-xs font-bold md:text-lg text-center'>Озеро на території</p>
</div>
            <p className='text-md text-start md:text-center text-secondaryText'>Наша лазня розташована на березі чарівного озера, де ви зможете насолоджуватися прекрасним видом та свіжим повітрям. Це ідеальне місце для спокійного відпочинку та насолоди природою під час вашого візиту до нас.</p>
          </div>
        </li>

      </ul>
    </Container>
    </Section>
  )
}
