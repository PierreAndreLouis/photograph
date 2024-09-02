import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA12() {
    return (
        <div
            style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/team-young-african-people-office-table-with-laptop_219728-4569.jpg?w=900)', backgroundPosition: "right" }}
            className='object-right   relative py-72 bg-fixed bg-cover bg-center'>

            <div className='absolute inset-0 z-[2] bg-sky-100/90'></div>
            
            <div className='flex flex-col px-2 
           justify-center items-center absolute inset-0 z-[3]'>
                <h1 className='text-black  text-3xl  sm:text-3xl text-center font-bold lg:text-4xl max-w-4xl leading-9'>
                    Vous souhaitez être accompagné
                    <span className='text-sky-400'> dans la recherche de solutions? </span>?</h1>
                <p className='text-center text-gray-900 mt-10 text-md leading-6 lg:text-md max-w-3xl'>
                    nous offrons des solutions sur mesure qui répondent à vos besoins spécifiques, avec un soutien constant pour garantir votre succès. Nous faisons en sorte que chaque stratégie soit efficace et adaptée à vos objectifs.
                </p>
                <Link
                    to='/reservation'    
                    className='border border-sky-900 text-sky-900 rounded-md mt-12 p-3 px-8 font-bold text-lg'>
                    Prens un Rendez-Vous
                </Link>
            </div>

        </div>
    )
}
