import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {

    const [ showNav, setShowNav ] = useState(false);

  return (
    <header className='padding-x py-4 z-10 w-full sticky top-0 left-0 bg-white shadow'>
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
                 className='lg:hidden block' 
                 onClick={() => setShowNav(prev => !prev)}/>
        </nav>
        <div className={`${showNav ? "w-full" : "w-0"} absolute top-0 bottom-0 right-0 bg-white overflow-hidden transition-all duration-400 border-2 min-h-screen py-5`}>
            <p onClick={() => setShowNav(false)} className='text-xl font-normal text-gray-400 p-2 my-2 text-end'>
                <img src={hamburger} alt="" width={25} height={25}/>
            </p>
            {
                navLinks.map((element)=>(
                    <li key={element.label} className='border p-2 border-black list-none border-x-0 z-10'>
                        <a 
                            href={element.href}
                            onClick={() => setShowNav(false)}
                            className='font-montserrat
                            leading-normal text-lg text-black font-normal'>
                            {element.label} 
                        </a>
                    </li>
                ))
                }

        </div>
    </header>
  )
}

export default Nav