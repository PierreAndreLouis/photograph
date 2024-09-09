import React, { useState } from "react";

const Faq4 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            header: "Quel est le délai pour obtenir votre premier article de blog ?",
            text: "Le délai pour préparer votre premier article de blog est de 2 à 3 semaines. Cela inclut la recherche approfondie et la création de votre stratégie de marketing de contenu mensuelle avant la rédaction de votre premier article."
        },
        {
            header: "Comment gérez-vous les ajustements après la publication ?",
            text: "Après la publication, nous surveillons les performances de l'article et ajustons la stratégie si nécessaire pour optimiser les résultats. Vous recevrez des rapports réguliers sur l'impact de l'article et les recommandations pour les prochaines étapes."
        },
        {
            header: "Quel est le coût des services de rédaction de blog ?",
            text: "Nos tarifs varient en fonction de la longueur et de la complexité des articles. Nous proposons des forfaits personnalisés pour répondre à vos besoins spécifiques, et nous vous fournirons un devis détaillé après une consultation initiale."
        },
        {
            header: "Offrez-vous des services de révision ?",
            text: "Oui, nous offrons des services de révision pour garantir que le contenu répond à vos attentes. Vous pouvez demander des modifications et des ajustements jusqu'à ce que vous soyez entièrement satisfait du résultat final."
        }
    ];

    return (
        <div className="relative bg-indigo-50 pb-12 pt-16 lg:pt-0 dark:bg-gray-900 overflow-hidden">
            <section className="relative mx-auto z-20 overflow-hidden lg:pb-[90px] lg:pt-[120px]">
                <div className="container mx-auto max-w-6xl">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] text-center lg:mb-20">
                                <span className="mb-2 block text-lg font-semibold text-primary dark:text-gray-400">
                                    FAQ
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                                    Des Questions ? Regardez Ici
                                </h2>
                                <p className="max-w-2xl mx-auto text-base text-body-color dark:text-gray-400">
                                    Nous avons répondu aux questions les plus fréquentes pour vous aider à mieux comprendre nos services et processus.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 items-centers">
                        <div className="mx-auto">
                            <img src="https://amincode.com/html/one-pages/flex-it/assets/images/faq/faq-illustration.png" alt="FAQ Illustration" />
                        </div>
                        <div className="grid gap-4">
                            {faqData.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div key={index} className="w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-gray-800 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
                                        <button
                                            className="faq-btn flex w-full text-left"
                                            onClick={() => handleToggle(index)}
                                        >
                                            <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                                                <svg
                                                    className={`fill-primary stroke-primary duration-200 ease-in-out ${isActive ? "rotate-180" : ""}`}
                                                    width="17"
                                                    height="10"
                                                    viewBox="0 0 17 10"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                                                        fill=""
                                                        stroke=""
                                                    />
                                                </svg>
                                            </div>
                                            <div className="w-full">
                                                <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white/80">
                                                    {item.header}
                                                </h4>
                                            </div>
                                        </button>
                                        <div
                                            className={`pl-[62px] duration-300 ease-in-out overflow-hidden ${isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                                        >
                                            <p className="py-3 text-base leading-relaxed text-body-color dark:text-gray-400">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                        width="1440"
                        height="886"
                        viewBox="0 0 1440 886"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1308.65"
                                y1="1142.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#3056D3" stopOpacity="0.36" />
                                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Faq4;
