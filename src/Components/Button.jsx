
const Button = ({label,iconUrl,bgColor,textColor}) => {
  return (
    <button className= {`flex gap-2 justify-center items-center
    px-7 py-4 border font-montserrat text-lg leading-none ${bgColor ? bgColor:'bg-coral-red'} 
    ${textColor?textColor:'text-white'} rounded-full
    `}>
        {label}
        {iconUrl && <img src={iconUrl} alt="arrow icon" className="w-5 h-5 ml-2
        rounded-full "/>}
    </button>
)
}

export default Button