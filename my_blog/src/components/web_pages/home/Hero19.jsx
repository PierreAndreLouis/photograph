import React from 'react';

/**
 * Section Hero de la page d'accueil
 * Affiche une image avec un texte d'accroche et des boutons d'action.
 */
export const Hero19 = () => {
  return (
    <div className="relative pt-32 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-sky-50 dark:bg-gray-900">

      {/* Image en arrière-plan avec un effet SVG */}
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block dark:text-gray-800"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt="Coaching professionnel"
        />
      </div>

      {/* Contenu textuel et boutons */}
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-2xl lg:pr-5">

          {/* Étiquette de marque */}
          <p className="inline-block px-5 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-400 dark:bg-sky-700 dark:text-sky-300">
            Nouveau
          </p>

          {/* Titre principal */}
          <h2 className="mb-5 text-3xl xs:text-4xl leading-10 lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none">
            Créez un avenir prometteur grâce à notre
            <span className="text-sky-500"> coaching professionnel </span>
          </h2>

          {/* Description */}
          <p className="pr-5 max-w-xl mb-5 text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Vous voulez offrir à vos gestionnaires ou à vos employés les meilleures conditions pour se développer, résoudre des défis complexes et contribuer au succès de votre organisation ?
          </p>

          {/* Boutons d'action */}
          <div className="grid gap-6 xs:flex items-center">
            <a
              href="/"
              className="inline-flex rounded-xl items-center justify-center h-12 px-6 bg-sky-500 font-medium tracking-wide text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none dark:bg-sky-700 dark:text-gray-100 dark:hover:bg-sky-800"
            >
              Contactez-nous
            </a>
            <a
              href="/"
              aria-label="En savoir plus"
              className="inline-flex rounded-xl text-center justify-center items-center border-2 border-sky-400 h-12 px-6 font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 dark:border-sky-600 dark:text-gray-300 dark:hover:text-deep-purple-accent-400"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero19;
