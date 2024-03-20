import React from 'react'

export const Title = ({title, accent}) => {
  return (
    <h3 className='text-center text-4xl capitalize font-semibold pb-4 md:pb-12 '>
      {title} <span className='text-darkBrown'>{accent}</span>
    </h3>
  )
}
