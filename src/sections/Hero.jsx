import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../Components/Button"
import ShoeCard from "../Components/ShoeCard"
import { shoes, statistics } from "../constants"
const Hero = () => {
  const [bigShoeImg,setBigShoeImg]=useState(bigShoe1)
  return (
    // w-full is important bc it ensure that our div fills the whole space
    //"max-xl" the behaviour is opp, sm:px-2 means padding to above sm
    //whereas max-xl means everything below xl
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center
     min-h-screen gap-10 max-container '> 
      <div className="relative
      xl:w-2/5 flex flex-col justify-center items-start
      w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat
        text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px]
        max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray
                        text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality <br />
            comfort, and innovation for your active life
          </p>
          <Button label='Shop now' iconUrl={arrowRight}/>
          <div className="flex justify-center items-start
          flex-wrap w-full mt-20 gap-16">
            {statistics.map((element)=>(
             <div key={element.label} className="text-center">
              <p className="text-4xl font-palanquin font-bold">
                {element.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {element.label}
              </p>
             </div>
            ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center border-2  ">
        <img src={bigShoeImg} alt="shoe image" width={610} height={502} 
        className="object-contain relative z-10"/>
        {/* when we explicitly want a large img to be responsive without cropping we use object-contain */}
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {
          shoes.map((image)=>(
            <div key={image.thumbnail}>
              <ShoeCard 
              imgUrl={image}
              changeBigShoeImg={(shoe)=>setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}/>
            </div>
          )
          )}
        </div>
      </div>
      

    </section>
  )
}

export default Hero
