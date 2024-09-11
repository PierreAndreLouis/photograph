import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs2() {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-100 bg-white pt-10">
            <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 bg-white dark:bg-gray-900">
                <div className="flex  flex-col items-center justify-between mb-14">
                    <h2 className="text-center text-3xl font-bold md:text-4xl  text-gray-700 dark:text-gray-100">
                        Découvrez Nos Derniers Articles
                    </h2>
                    <Link to="/blogs"
                        className=" pb-1 mt-2 text-base text-indigo-600 dark:text-indigo-400 uppercase border-b border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">
                        - Voir PLus -
                    </Link>
                </div>

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <img
                            src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2015/03/la-strat%C3%A9gie-marketing-du-cr%C3%A9ateur-dentreprise.png"
                            alt="Article 1"
                            className="object-cover object-center w-full h-48 border rounded-t-xl border-gray-400 dark:border-gray-600 border-b-0"
                        />
                        <div className="flex flex-col rounded-b-xl px-4 py-6 bg-gray-100 dark:bg-gray-800 border border-gray-400 dark:border-gray-600">
                            <a href="#"
                                className="inline-block mb-3 text-xs capitalize border-b-2 border-indigo-600 dark:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                Stratégies Marketing
                            </a>
                            <a href="#"
                                className="block mb-2 text-xl font-black leading-tight hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">
                                Comment Élaborer le Plan Marketing Parfait
                            </a>
                            <p className="mb-4 text-gray-600 leading-5 text-sm dark:text-gray-300">
                                Découvrez des conseils essentiels pour créer un plan marketing réussi qui génère des résultats et stimule la croissance de votre entreprise.
                            </p>
                            <a href="#"
                                className="inline-block pb-1 text-base font-black text-indigo-600 dark:text-indigo-400 uppercase border-b border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">
                                Lire Plus -
                            </a>
                        </div>
                    </div>

                    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <img
                            src="https://www.succes-marketing.com/marketing-image/strategie-marketing.jpg"
                            alt="Article 2"
                            className="object-cover object-center w-full h-48 border rounded-t-xl border-gray-400 dark:border-gray-600 border-b-0"
                        />
                        <div className="flex flex-col rounded-b-xl px-4 py-6 bg-gray-100 dark:bg-gray-800 border border-gray-400 dark:border-gray-600">
                            <a href="#"
                                className="inline-block mb-3 text-xs capitalize border-b-2 border-indigo-600 dark:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                Développement Web
                            </a>
                            <a href="#"
                                className="block mb-2 text-xl font-black leading-tight hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">
                                L'Avenir du Développement Web : Tendances à Suivre
                            </a>
                            <p className="mb-4 text-gray-600 leading-5 text-sm dark:text-gray-300">
                                Restez à la pointe des tendances en développement web et découvrez les technologies qui façonneront l'industrie dans les années à venir.
                            </p>
                            <a href="#"
                                className="inline-block pb-1 text-base font-black text-indigo-600 dark:text-indigo-400 uppercase border-b border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">
                                Lire Plus -
                            </a>
                        </div>
                    </div>

                    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <img
                            src="https://vanessaremignon.com/wp-content/uploads/2022/05/Chercher-sa-passion-pourquoi-est-ce-une-erreur.png"
                            alt="Article 3"
                            className="object-cover object-center w-full h-48 border rounded-t-xl border-gray-400 dark:border-gray-600 border-b-0"
                        />
                        <div className="flex flex-col rounded-b-xl px-4 py-6 bg-gray-100 dark:bg-gray-800 border border-gray-400 dark:border-gray-600">
                            <a href="#"
                                className="inline-block mb-3 text-xs capitalize border-b-2 border-indigo-600 dark:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                Perspectives Technologiques
                            </a>
                            <a href="#"
                                className="block mb-2 text-xl font-black leading-tight hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">
                                Comment l'IA Transforme Notre Monde
                            </a>
                            <p className="mb-4 text-gray-600 leading-5 text-sm dark:text-gray-300">
                                Explorez l'impact de l'intelligence artificielle sur diverses industries et comment elle stimule l'innovation et l'efficacité dans le monde d'aujourd'hui.
                            </p>
                            <a href="#"
                                className="inline-block pb-1 text-base font-black text-indigo-600 dark:text-indigo-400 uppercase border-b border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">
                                Lire Plus -
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
