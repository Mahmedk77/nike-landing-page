import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt="customer image"
        className="rounded-full object-cover w-[120px] h-[120px]" 
        />
        <p className="mt-6 max-w-sm
        text-center info-text
       font-montserrat text-2lx leading-normal">{feedback}</p>
        <div className="flex justify-start items-center gap-2.5 mt-8">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-500">(4.5)</p>
        </div>
        <h3 className="mt-2 leading-normal text-3xl text-center
       font-semibold font-palanquin">{customerName}</h3>
    </div>
  )
}

export default ReviewCard