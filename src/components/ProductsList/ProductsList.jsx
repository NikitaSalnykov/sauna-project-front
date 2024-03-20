import React from 'react'
import { Section } from '../Section/Section'
import { Container } from '../Container/Container'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductsList = () => {
  return (
    <Section>
      <Container>
        <Title title={"Додаткові"} accent={" послуги"}/>
        <ul className='flex gap-4 flex-wrap justify-between items-center'>
          <li><ProductCard/></li>
          <li><ProductCard/></li>
          <li><ProductCard/></li>
        </ul>
      </Container>
    </Section>
  )
}
