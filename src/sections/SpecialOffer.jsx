import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="special offer" width={773} height={687} 
        className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special <span 
          className="text-coral-red inline-block mt-3">Offer</span> 
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Discover stylish Nike arrivals, quality <br />
            comfort, and innovation for your active life
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Our dedication to detail and excellence ensures your 
            satisfaction
          </p>
          <div className='mt-12 flex gap-10'>
          <Button label='Shop now' />
          <Button label='Learn more' bgColor='bg-white' textColor='text-slate-500'/>

          </div>

      </div>
      
    </section>
  )
}

export default SpecialOffer
