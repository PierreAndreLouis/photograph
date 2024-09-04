import React from "react";

const Service8 = () => {
    return (
        <div className="py-14 dark:bg-slate-900 bg-slate-100 duration-300 px-5">
            <h1 className="text-sky-600 text-3xl font-semibold max-w-2xl mx-auto text-center mb-16">
                Comment se déroule un parcours de coaching
            </h1>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="border-4 w-full">
                        <img
                            src="https://dia-creationweb.ca/wp-content/uploads/2024/07/RencontreExploratoire.jpg"
                            alt="Rencontre exploratoire"
                            className="w-full drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>
                    <div>
                        <div className="space-y-5 pb-6">
                            <div data-aos="zoom-in" className="flex items-center gap-4">
                                <div className="text-sky-600 text-7xl">
                                    <h1 className="font-bold">01</h1>
                                </div>
                                <div>
                                    <p className="text-sky-600">Étape 1</p>
                                    <h1 className="text-xl sm:text-3xl font-bold dark:text-white">Rencontre exploratoire</h1>
                                </div>
                            </div>
                            <p data-aos="fade-up" className="dark:text-white text-gray-600 tracking-wide">
                                Cette étape consiste à faire connaissance, à expliquer les objectifs du coaching, le rôle du coach, ainsi que le mode de fonctionnement. C’est aussi l’occasion pour vous de vérifier si vous vous sentez à l’aise pour poursuivre les séances avec ce coach en particulier.
                                <br /><br />
                                La rencontre exploratoire est gratuite et sans engagement. N’hésitez pas à nous contacter dès maintenant, un de nos coachs se fera un plaisir de venir vous rencontrer !
                            </p>

                            {/* <button data-aos="fade-up" className="bg-sky-600 text-white px-10 py-3 font-bold">
                                Commencer
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service8;
