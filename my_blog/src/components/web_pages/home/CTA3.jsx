import React from 'react';

const CTA3 = () => {
  return (
    <div className="relative bg-indigo-600 dark:bg-gray-900">
      <div className="absolute inset-x-0 dark:hidden bottom-0">
        <svg
          viewBox="0 0 224 12"
          // fill="currentColor"
          fill="white"
          className="w-full -mb-1 text-white dark:text-gray-200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
          ></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-none">
            Abonnez-vous à Notre Newsletter
          </h2>
          <p className="mb-6 text-base text-center text-indigo-200 dark:text-indigo-300 md:text-lg">
            Inscrivez-vous à notre newsletter pour obtenir des conseils pratiques, des actualités du secteur, et des informations exclusives directement dans votre boîte mail, afin de rester à la pointe des tendances et d’optimiser vos stratégies marketing.
          </p>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 dark:bg-deep-purple-800 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            />
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none dark:bg-teal-500 dark:hover:bg-teal-600 dark:text-gray-900 dark:hover:text-gray-800"
            >
              Subscribe
            </a>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 dark:text-indigo-200 sm:text-sm sm:mx-auto md:mb-16">
            {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. */}
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 dark:border-gray-600 dark:hover:text-teal-300 dark:hover:border-teal-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path
                d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA3;
