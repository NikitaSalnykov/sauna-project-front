import React from 'react'
import Image from '../../assets/hero.webp'
import { SecondaryHero } from '../../components/SecondaryHero/SecondaryHero'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import { PriceList } from '../../components/PriceList/PriceList'
import { Container } from '../../components/Container/Container'

export const PricePage = () => {
  return (
    <div>
      <SecondaryHero img={Image} title={"Ціни"}/>
     <Container>
      <div className="mt-4">
      <PriceList/>
      </div>
      <div className="mb-4">
      <ProductsList/>
      </div>
     </Container>
    </div>
  )
}
