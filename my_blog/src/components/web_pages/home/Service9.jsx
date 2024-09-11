import { Button } from 'flowbite-react'
import React from 'react'

function Service9() {
    return (
        <div className="relative bg-gray-100 dark:bg-gray-900 py-24 px-4">
            <div className="absolute top-0 left-0 right-0 h-[25rem] bg-indigo-500 dark:bg-indigo-600 z-[-1] border "></div>
            <main className="flex flex-col items-center ">
                <div className="flex flex-col items-center  mb-16 text-center">
                    <h3 className="text-4xl  mb-4 text-gray-700 dark:text-gray-200 font-bold">Prêt à dynamiser votre marketing</h3>
                    <p className="text-md text-gray-600 dark:text-gray-400   mx-auto max-w-2xl">
                        Voici les différents services que nous offrons pour vous aider à améliorer votre visibilité, attirer plus de clients, et atteindre vos objectifs marketing                    </p>
                    {/* <button type="button"
                        class=" text-indigo-700 border border-indigo-800 bg-transparent    
                        font-bold rounded-lg text-sm px-5 py-2.5 mt-4  dark:text-indigo-500">
                        Plus de service
                    </button> */}
                </div>
                <div className=" max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white  dark:bg-gray-900 dark:border dark:border-indigo-500 rounded-lg p-4 py-6 sm:p-6 shadow-lg flex flex-col items-center text-center">
                        <div className="overflow-hidden w-20 h-20 flex justify-center border border-indigo-500 items-center rounded-full bg-indigo-500 dark:bg-indigo-600 mb-4">
                            {/* <img className='w-[110%] translate-x-[.81rem] translate-y-[.8rem] '  src='https://github.com/LouisPierre-Andre/images/blob/main/Strategie%20Markeging/analyse%20de%20marche.png?raw=true' alt='Analyse de  Marché' /> */}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Analyse de  Marché</h3>
                        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
                            Voyons ensemble où vous vous situez sur le marché et comment nous pouvons identifier de nouvelles opportunités pour vous.                        </p>
                        {/* <button className="py-2 px-6 border-2 border-indigo-500 dark:border-indigo-600 text-indigo-500 dark:text-indigo-600 rounded-md">Read more</button> */}
                    </div>
                    <div className="bg-white  dark:bg-gray-900 dark:border dark:border-indigo-500 rounded-lg p-4 py-6 sm:p-6 shadow-lg flex flex-col items-center text-center">
                        <div className="w-20 h-20 flex justify-center border border-indigo-500 overflow-hidden items-center rounded-full bg-indigo-500 dark:bg-indigo-600 mb-4">
                            {/* <img className='w-[150%] translate-x-[.2rem] translate-y-2' src='https://github.com/LouisPierre-Andre/images/blob/main/Strategie%20Markeging/Strategie%20marketing.png?raw=true' alt='Stratégies Personnalisées' /> */}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Stratégies Personnalisées</h3>
                        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
                            Collaborez avec nous pour créer une stratégie marketing qui correspond parfaitement à vos besoins uniques.                        </p>
                        {/* <button className="py-2 px-6 border-2 border-indigo-500 dark:border-indigo-600 text-indigo-500 dark:text-indigo-600 rounded-md">Read more</button> */}
                    </div>
                    <div className="bg-white  dark:bg-gray-900 dark:border dark:border-indigo-500 rounded-lg p-4 py-6 sm:p-6 shadow-lg flex flex-col items-center text-center">
                        <div className="w-20 h-20 flex justify-center border border-indigo-500 items-center rounded-full bg-indigo-500 dark:bg-indigo-600 mb-4">
                            {/* <img className='w-[68%] translate-y-[.2rem]' src='https://github.com/LouisPierre-Andre/images/blob/main/Strategie%20Markeging/Campagnes%20Publicitaires.png?raw=true' alt='Campagnes  Publicitaires' /> */}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Campagnes  Publicitaires</h3>
                        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
                            Laissez-nous optimiser vos campagnes publicitaires pour obtenir les meilleurs résultats possibles.                        </p>
                        {/* <button className="py-2 px-6 border-2 border-indigo-500 dark:border-indigo-600 text-indigo-500 dark:text-indigo-600 rounded-md">Read more</button> */}
                    </div>

                 
                </div>
            </main>
        </div>
    )
}

export default Service9
