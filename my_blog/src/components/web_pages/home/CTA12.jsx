import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA12() {
    return (
        <div
            style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/team-young-african-people-office-table-with-laptop_219728-4569.jpg?w=900)', backgroundPosition: "right" }}
            className='relative py-72 bg-fixed bg-cover bg-center'
        >
            <div className='absolute inset-0 bg-sky-100/90 dark:bg-gray-900/90'></div>

            <div className='flex flex-col justify-center items-center absolute inset-0 z-10 px-4'>
                <h1 className='text-black dark:text-gray-100 text-3xl sm:text-4xl text-center font-bold max-w-4xl leading-9'>
                    Envie d'un accompagnement <span className='text-sky-400'>personnalisé pour atteindre vos objectifs</span> ?
                </h1>
                <p className='text-center text-gray-900 dark:text-gray-100 mt-6 text-md leading-6 max-w-3xl'>
                    Nous proposons des solutions sur mesure adaptées à vos besoins spécifiques. Avec un soutien constant et des stratégies efficaces, nous vous aidons à transformer vos objectifs en réussites concrètes.
                </p>
                <Link
                    to='/reservation'
                    className='border border-sky-500 text-sky-500 rounded-md mt-8 p-3 px-8 font-bold text-lg transition-colors hover:bg-sky-500 hover:text-white'
                >
                    Prenez un Rendez-vous
                </Link>
            </div>
        </div>
    );
}
