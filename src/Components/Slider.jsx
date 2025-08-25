import {CircleChevronUp} from 'lucide-react'
import { useEffect, useState } from 'react'

const Slider = () => {

    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 100) return setVisible(true);
        else return setVisible(false);
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <>
    {
    visible && <div
    onClick={() => window.scrollTo({ top:0, behavior: "smooth"})} 
    className='z-[200] fixed  bottom-5 right-5 w-[52px] h-[52px] rounded-full bg-coral-red flex items-center justify-center'>
        <CircleChevronUp className=' text-white cursor-pointer' size={32}/>
    </div>
    }
    </>)
}

export default Slider
