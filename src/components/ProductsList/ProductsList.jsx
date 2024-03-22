import React from 'react'
import { Section } from '../Section/Section'
import { Container } from '../Container/Container'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'
import { SwiperComponent } from '../Swiper/SwiperProducts'

const products = [{
  id: 1,
  title: "Віник дубовий",
  img: 'https://images.prom.ua/2726481917_w640_h640_vinik-dlya-bani.jpg',
  price: 80,
  description: "Великі, густі, пахучі та еластичні віники зроблять ваш похід в баню незабутнім. А про їхні цілющі властивості годі й розказувати"
},
{
  id: 2,
  title: "Шапка для лазні",
  img: 'https://images.prom.ua/2276394259_w640_h640_shapka-dlya-lazni.jpg',
  price: 100,
  description: "Яскравий зелений дизайн даної моделі не залишить власника непоміченим. Якість матеріалів і результат перевершить будь-які очікування. Як і інші варіанти, вона дуже міцна і зручна, і не виникає ніяких труднощів у зв'язку з доглядом за нею. "
},
{
  id: 3,
  title: "Тапочки",
  img: 'https://silverclean.com.ua/image/cache/webp/catalog/929860/929890/928978/929654/14%C2%A0969-400x400.webp',
  price: 50,
  description: "Флісові одноразові тапочки виконані з м'якого синтетичного матеріалу, що нагадує шерсть. Флісові тапочки вважаються хорошою альтернативою махровим капцям для готелю, так як відрізняються вони лише матеріалом обшивки, але товщина підошви у них - однакова"
},
{
  id: 4,
  title: "Трав'яна запарка для лазні та чанів",
  img: 'https://content2.rozetka.com.ua/goods/images/big/289736270.jpg',
  price: 250,
  description: "Наші трави мають глибокі очисні властивості, зміцнюють судини і капіляри, є джерелом мінералів та антиоксидантів. Вони покращують еластичність шкіри, борються з акне, снимають відеки і мають протизапальний ефект. Також сприяють зняттю м'язового напруження, стимулюють імунітет та мають антибактеріальну дію"
}
]

export const ProductsList = () => {
  return (
    <Section>
      <Container>
        <Title title={"Додаткові"} accent={" послуги"}/>
        {/* <ul className='flex flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 items-center'>
          {products.map(el => <ProductCard img={el.img} price={el.price} description={el.description} title={el.title}/>)}
        </ul> */}
        <div className="swiper-products">
        {<SwiperComponent products={products}/>}
        </div>
      </Container>
    </Section>
  )
}
