import React from 'react';
import {Link} from 'react-router-dom'

const img = "https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=900&t=st=1723408639~exp=1723409239~hmac=da72fb45410918a1ff964f75af0ae6f3850d4437c62ed7f104ab0a1e7281dd71";

const Hero5 = () => {
  return (
    <section
      className=" px-5 bg-indigo-100 dark:bg-slate-900 relative bg-purple-100w-full min-h-screen flex items-center mx-auto sm:px-6 lg:px-8">

      <img className='absolute hidden z-[1] dark:block opacity-35 inset-0 w-full h-full object-cover' src='https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=900&t=st=1723408639~exp=1723409239~hmac=da72fb45410918a1ff964f75af0ae6f3850d4437c62ed7f104ab0a1e7281dd71' alt='' />
      <div className='absolute hidden dark:block inset-0 z-[5] bg-gradient-to-r dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-10/90 '></div>

      <div className="z-10 pt-20 relative items-center my-10 max-w-7xl sm:px-6 mx-auto lg:px-8 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-100 sm:text-5xl xl:text-6xl">
            <span className="">Boostez votre visibilité avec nos </span>
            <span className="text-indigo-600 dark:text-indigo-400">stratégies marketing</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5  lg:mx-0">
            Découvrez des techniques éprouvées pour transformer votre approche et atteindre vos objectifs
          </p>
          {/* Button Section */}
            <div className="grid gap-4 mt-8 mb-6 xs:flex  sm:justify-center lg:justify-start">
            <Link
              to='/reservation'
              className=' flex justify-center items-center font-bold border-gray-400 text-white py-2 xs: px-12 rounded-tr-3xl rounded-bl-3xl bg-indigo-800'>
              Reservation
            </Link>
            {/* <a
              href='#'
              className='border flex justify-center items-center font-bold border-indigo-400 text-indigo-700 dark:text-indigo-100 py-2 xs: px-12 rounded-md  '>
              Notre Guide Gratuit
            </a> */}
           
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-3/4 my-4">
          <img
            className="h-56  scale-[1.4] lg:-translate-y-[4rem] lg:-translate-x-[5rem] w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src='https://amincode.com/html/one-pages/flex-it/assets/images/hero/illustration-1.png'
            alt="Business"
          />
        </div>
        {/* End of Image Section */}
      </div>
    </section>
  );
};

export default Hero5;
