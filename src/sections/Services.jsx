import React from 'react'
import { services } from '../constants'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <section id="" className='max-container
    flex justify-center flex-wrap gap-9
    '>
      {services.map((element)=>
        (<ServicesCard key={element.label} {...element}/>))}
    </section>
  )
}

export default Services
