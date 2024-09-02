import React from 'react'
import { MdOutlineDoubleArrow } from "react-icons/md";


export default function HeroContact() {
    return (
        <div className='dark:bg-gray-900'>
            <div className='relative  h-72 lg:h-[25rem] flex justify-center items-center text-white text-[4rem]'>
                <div className='absolute inset-0 bg-gray-900/80 w-full h-full z-10'></div>
                <img className='absolute inset-0 w-full h-full object-cover' src='https://blog.neocamino.com/wp-content/uploads/2017/06/Sans-titre-71.png' alt='hero bg' />
                <h2 className='relative z-20'>Contact</h2>
            </div>


            <div className='flex gap-4 p-6 py-4 text-lg font-semibold bg-gray-200 dark:bg-gray-800 items-center'>
                <p>Home</p>
                <MdOutlineDoubleArrow />
                <p>Contact</p>
            </div>
        </div>
    )
}
