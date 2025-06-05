import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 w-full absolute'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29}/>
            </a>
            <ul className='flex-1 flex gap-16 justify-center
            items-center max-lg:hidden'>
                {
                    navLinks.map((element)=>(
                        <li key={element.label}>
                            <a href={element.href} 
                               className='font-montserrat
                               leading-normal text-lg text-slate-gray'>
                                {element.label} 
                            </a>
                        </li>
                    ))
                }
                
            </ul>
            <img src={hamburger}
                 alt="hamburger" width={25} height={25}
                 className='lg:hidden block' />
        </nav>
    </header>
  )
}

export default Nav