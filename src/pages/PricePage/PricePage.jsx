import React from 'react'
import Image from '../../assets/hero.webp'
import { SecondaryHero } from '../../components/SecondaryHero/SecondaryHero'
import { ProductsList } from '../../components/ProductsList/ProductsList'

export const PricePage = () => {
  return (
    <div>
      <SecondaryHero img={Image} title={"Ціни"}/>
      <div className="mb-4">
      <ProductsList/>
      </div>
    </div>
  )
}
