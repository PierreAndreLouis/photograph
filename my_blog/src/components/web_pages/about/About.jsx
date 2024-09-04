import React from 'react';

export default function About() {
  return (
    <div>
      {/* <HeroAbout /> */}

      <section className="bg-white dark:bg-gray-900">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Content */}
            <div className="flex flex-col gap-6 lg:w-3/5">
              <h2 className="mb-0 text-3xl font-bold md:text-5xl dark:text-white">À propos de nous</h2>
              <p className="text-sm sm:text-base dark:text-gray-300">
                Nous sommes passionnés par l'accompagnement et le coaching pour vous aider à atteindre vos objectifs. Notre équipe d'experts met tout en œuvre pour vous offrir des solutions adaptées à vos besoins spécifiques, avec des conseils personnalisés et une approche basée sur l'expérience.
              </p>
              <a
                href="#"
                className="max-w-52 rounded-md bg-black px-3 py-2 text-center font-semibold text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                En savoir plus
              </a>
              {/* Divider */}
              <div className="my-8 h-px w-full bg-black dark:bg-gray-600"></div>
              {/* Testimonials */}
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-6 md:p-4">
                  <p className="text-sm dark:text-gray-300">
                    J'utilise les services de coaching depuis un an et je suis extrêmement satisfait des résultats. Leurs solutions innovantes et leur expertise ont transformé mes opérations.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt="Témoignage"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold sm:text-base dark:text-gray-100">
                        Alleyah
                      </p>
                    </div>
                    {/* Divider */}
                    <div className="h-5 w-px bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold sm:text-base dark:text-gray-100">5.0</p>
                      <div className="flex text-orange-500 dark:text-orange-400">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        {/* Repeat for other stars */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat for other testimonials */}
                <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-6 md:p-4">
                  <p className="text-sm dark:text-gray-300">
                    Leur service de coaching a vraiment fait une différence dans mon développement personnel. Les conseils étaient clairs et les résultats ont été au-delà de mes attentes.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt="Témoignage"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold sm:text-base dark:text-gray-100">
                        Alex
                      </p>
                    </div>
                    {/* Divider */}
                    <div className="h-5 w-px bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold sm:text-base dark:text-gray-100">5.0</p>
                      <div className="flex text-orange-500 dark:text-orange-400">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        {/* Repeat for other stars */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="w-full rounded-md bg-gray-100 dark:bg-gray-800 max-[991px]:h-[475px] lg:w-2/5">
              <img
                src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                alt='Image à propos'
                className='w-full h-full object-cover object-right-top'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
