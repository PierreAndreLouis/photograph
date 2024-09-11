import React from 'react';

const features = [
    {
        title: 'Expertise reconnue:',
        description: 'Nous avons une solide expérience et des résultats éprouvés dans le domaine du marketing.',
    },
    {
        title: 'Solutions personnalisées',
        description: 'Chaque stratégie est adaptée spécifiquement à vos besoins et objectifs uniques.',
    },
    {
        title: 'Optimisation continue',
        description: 'Nous ajustons constamment nos approches pour maximiser les résultats de vos campagnes.',
    },
    {
        title: 'Service client dédié',
        description: 'Notre équipe est toujours disponible pour répondre à vos questions et vous soutenir',
    },
];

export default function Service2() {
    return (
        <div className="bg-indigo-50 dark:bg-gray-900 text-slate-900 dark:text-slate-200 py-10">
            <div className="max-w-7xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-4xl tracking-tight font-bold text-gray-700 dark:text-gray-100">
                        Pourquoi nous choisir ?
                    </h2>
                    <p className='dark:text-gray-400 mt-3'>Voici les raisons pour lesquelles nous sommes votre meilleur choix pour réussir.</p>
                </div>

                <div className="flex flex-col lg:flex-row">
                    {/* <!-- can help image --> */}
                    <div className="lg:w-1/2 w-full mr-0 md:mr-8 mb-8 lg:mb-0">
                        <img
                            className="h-full object-cover w-full mx-auto"
                            src="https://www.orientaction.com/wp-content/uploads/2020/09/iStock-1222811180-900x600.jpg"
                            alt="can_help_banner"
                        />
                    </div>
                    {/* <!-- end can help image --> */}

                    <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                        {features.map((feature, index) => (
                            <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
                                <div className="h-full py-4 px-6 border border-indigo-500 border-t-0 border-l-0 rounded-br-xl bg-white dark:bg-slate-800">
                                    <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
                                    <p className="text-md">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
