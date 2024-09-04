import React from 'react';
import { RiTeamFill } from "react-icons/ri";


const services = [
    {
        title: "Coaching exécutif",
        description: "Grâce à une approche personnalisée et flexible, le coaching exécutif permet de développer les hauts dirigeants et cadres supérieurs afin de maximiser leur performance, gérer les attentes élevées et relever avec brio de nouveaux défis."
    },
    {
        title: "Coaching de gestion",
        description: "Le coaching de gestion consiste à accompagner un gestionnaire dans l’atteinte d’objectifs spécifiques. Un programme de coaching de gestion s’articule autour d’une série de rencontres (en personne ou à distance) d’une durée de 1h à 1h30."
    },
    {
        title: "Coaching d'intégration",
        description: "Le coaching d’intégration vise à optimiser l’intégration en poste d’un employé ou d’un gestionnaire qu’il soit issu de l’interne ou de l’externe de l’organisation. Le coaching d’intégration consiste en un accompagnement individuel et s’étale sur une période de 3 à 6 mois."
    },
    {
        title: "Coaching de carrière",
        description: "Le coaching de carrière vise à accompagner l’individu dans son développement de carrière. Selon les besoins, le coaching de carrière peut prendre différentes formes : de la réflexion sur son parcours professionnel, ses intérêts et motivations, à l’établissement de plans d’actions de recherche d’emploi en passant par l’évaluation de ses compétences."
    },
    {
        title: "Coaching de performance",
        description: "Le coaching de performance permet à l’employé(e) de combler rapidement des écarts de performance et d’atteindre ainsi les objectifs fixés. À travers des rencontres structurées, l’employé(e) est soutenu et conseillé par un(e) professionnel(le) d’expérience dans la recherche de solutions."
    },
    {
        title: "Coaching de groupe",
        description: "Le coaching de groupe vise à développer l’atteinte d’un objectif collectif par la mise en commun de forces individuelles. Le coaching de groupe s’articule autour d’une ou plusieurs journées de rencontres en équipe."
    },
    // Ajoute d'autres services si nécessaire
];

function Service9() {
    return (
        <div className="relative bg-blue-50 dark:bg-gray-900 py-24 px-4">
            <div className="absolute top-0 left-0 right-0 h-[25rem] bg-sky-500 dark:bg-sky-600 z-[-1] border"></div>
            <main className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h3 className="text-3xl md:text-4xl mb-4 font-semibold  text-sky-600">Prêt à dynamiser votre vie personnel</h3>
                    <p className="text-sm sm:text-md leading-6 text-gray-600 dark:text-gray-400 mx-auto max-w-2xl">
                        Voici les différents services que nous offrons pour vous aider à améliorer votre visibilité, attirer plus de clients, et atteindre vos objectifs marketing
                    </p>
                </div>
                <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 3).map((service, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 dark:border dark:border-sky-500 rounded-lg p-4 py-6 sm:p-6 shadow-lg flex flex-col items-center text-center">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-sky-600 dark:bg-sky-600 mb-4">
                                <RiTeamFill className='text-white text-5xl'/>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">{service.title}</h3>
                            <p className="text-[1rem] font-sans text-gray-600 dark:text-gray-400 mb-4">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* <button className='border rounded-md border-sky-500 py-3  px-8 text-sky-600 font-bold mt-10'>Voir plus</button> */}
            </main>
        </div>
    );
}

export default Service9;
