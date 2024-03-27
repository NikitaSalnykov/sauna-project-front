import React from 'react'
import { TerritoryList } from '../../components/TerritoryList/TerritoryList'
import Image from '../../assets/hero.webp'
import { SecondaryHero } from '../../components/SecondaryHero/SecondaryHero'

export const TerritoryPage = () => {
  return (
    <div>
      <SecondaryHero img={Image} title={"Територія відпочинку"} linkName={"Забронювати"}/>
      <TerritoryList/>
    </div>
  )
}
