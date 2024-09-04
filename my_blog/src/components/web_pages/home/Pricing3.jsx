import React from 'react';

const pricingPlans = [
  {
    title: 'Essai Gratuit',
    description: 'Découvrez le coaching sans engagement.',
    price: '$0',
    features: [
      'Séance de découverte gratuite',
      'Accès à un coach personnel',
      'Ressources de base',
      'Support par e-mail',
      'Plan de coaching personnalisé',
      'Suivi des progrès',
      "Accès aux outils d'auto - évaluation"
    ],
    isComingSoon: false,
    buttonText: 'Démarrer maintenant',
    buttonClass: 'bg-sky-500'
  },
  {
    title: 'Avancé',
    description: 'Pour un coaching approfondi.',
    price: '$30',
    features: [
      'Séances hebdomadaires',
      'Accès à des ressources avancées',
      'Support par e-mail et téléphone',
      'Plan de coaching détaillé',
      'Suivi personnalisé',
      'Accès aux webinaires exclusifs',
      'Support prioritaire'
    ],
    isComingSoon: false,
    buttonText: 'Rejoindre maintenant',
    buttonClass: 'bg-sky-500'
  },
  {
    title: 'Premium',
    description: 'Pour une transformation totale.',
    price: '$100',
    features: [
      'Séances illimitées',
      'Coaching personnalisé 24/7',
      'Toutes les ressources',
      'Support dédié',
      'Plan de transformation sur mesure',
      'Accès aux ateliers et séminaires',
      'Évaluations régulières'
    ],
    isComingSoon: false,
    buttonText: 'Commencez',
    buttonClass: 'bg-sky-500'
  }
];

const Pricing3 = () => {
  return (
    <section className="p-4 md:p-8 bg-sky-50 dark:bg-gray-900 dark:text-sky-50">
      <div className="py-8 max-w-6xl mx-auto lg:py-16">
        <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
          <h2 className="text-3xl font-bold text-sky-600 sm:text-4xl mb-4 dark:text-gray-200">Plans de Coaching</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Choisissez le plan de coaching qui correspond le mieux à vos objectifs de développement personnel.</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-4 xl:gap-5 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 flex flex-col p-6 mx-auto max-w-md text-center rounded-lg shadow-xl xl:p-8 border border-base-300 dark:border-gray-700 transition-transform transform hover:scale-105"
            >
              <h3 className="mb-4 text-2xl font-semibold dark:text-gray-200">{plan.title}</h3>
              <div className="flex justify-center items-baseline my-1 h-10">
                <p className="font-light text-gray-600 dark:text-gray-400">{plan.description}</p>
              </div>
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold dark:text-gray-100">{plan.price}</span>
                <span>/mois</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className={`min-w-6 min-h-6 max-w-6 max-h-6 ${idx < 5 ? 'text-sky-500 dark:text-sky-400' : 'text-red-500 dark:text-red-400'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                      />
                    </svg>
                    <span className={`text-base-content/${idx < 5 ? '80' : '30'} dark:text-gray-300`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full ${plan.buttonClass} font-bold gap-2 shadow uppercase p-2 text-white transition-transform transform hover:scale-105`}
                disabled={plan.isComingSoon}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing3;
