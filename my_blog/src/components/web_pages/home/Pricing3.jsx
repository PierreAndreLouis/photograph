import React from 'react';

const pricingPlans = [
  {
    title: 'Free',
    description: 'No credit card required. Ever',
    price: '$0',
    features: [
      'Use your own browser',
      'Use your own OpenAI key',
      'Data export',
      'Basic support',
      'Scheduled jobs',
      'Smart downloader and cost-optimized AI',
      'Dedicated server'
    ],
    isComingSoon: false,
    buttonText: 'Get Started',
    buttonClass: 'bg-teal-500'
  },
  {
    title: 'Cloud',
    description: 'For Hobbyist.',
    price: '$15',
    features: [
      'Use our servers',
      'Use our specialized AI',
      'Data export',
      'Full support',
      'Scheduled jobs',
      'Smart downloader and cost-optimized AI',
      'Dedicated server'
    ],
    isComingSoon: true,
    buttonText: 'Coming soon ...',
    buttonClass: 'bg-gray-500'
  },
  {
    title: 'Enterprise',
    description: 'For professionals.',
    price: '$100',
    features: [
      'Your own server',
      'Use our specialized AI',
      'Data export',
      'Premium support',
      'Scheduled jobs',
      'Smart downloader and cost-optimized AI',
      'Dedicated server'
    ],
    isComingSoon: false,
    buttonText: 'Get Started',
    buttonClass: 'bg-teal-500'
  }
];

const Pricing3 = () => {
  return (
    <section className="p-4 md:p-8 bg-sky-50 dark:bg-gray-900 dark:text-sky-50">
      <div className="py-8 max-w-6xl mx-auto lg:py-16">
        <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
          <h2 className="text-3xl font-bold text-sky-600 sm:text-4xl mb-4 dark:text-gray-200">Pricing Plans</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Choose a plan that best suits your data needs.</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-4 xl:gap-5 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8 border border-base-300 dark:border-gray-700 shadow-primary/10 dark:shadow-primary/20 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20 dark:hover:border-primary-focus/30 dark:hover:shadow-primary-focus/30"
            >
              <h3 className="mb-4 text-2xl textsk font-semibold dark:text-gray-200">{plan.title}</h3>
              <div className="flex justify-center items-baseline my-1 h-10">
                <p className="font-light sm:text-lg dark:text-gray-400">{plan.description}</p>
              </div>
              <div className="flex justify-center items-baseline my-9">
                <span className="mr-2 text-5xl font-extrabold dark:text-gray-100">{plan.price}</span>
                <span>/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className={`w-6 h-6 ${idx < 5 ? 'text-sky-500 dark:text-sky-400' : 'text-red-500 dark:text-red-400'}`}
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
                className={`w-full bg-sky-600 font-bold gap-2 shadow uppercase p-2 text-white ${plan.buttonClass}`}
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
