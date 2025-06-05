import { star } from "../assets/icons"

const PopularProductsCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col
    w-full max-sm:w-f">
       <img src={imgURL} alt={`${name} Image `}
       className="h-[280px] w-[280px]" /> 
       <div className="flex justify-start items-center gap-2.5 mt-8">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-500">(4.5)</p>
       </div>
    
       <h3 className="mt-2 leading-normal text-2lx
       font-semibold font-palanquin">
        {name}
       </h3>
       <p className="mt-2 text-coral-red font-semibold
       font-montserrat text-2lx leading-normal">
        {price}
        </p>
    </div>
  )
}

export default PopularProductsCard