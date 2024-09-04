import React from 'react';

const Service8_2 = ({ voirEtaps, setVoirEtaps }) => {
    return (
        <div className="py-14 dark:bg-slate-900 bg-slate-100 duration-300 px-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 lg:flex flex-row-reverse max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="border-4 w-full lg:w-[100%]">
                        <img
                            src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2015/07/Comprendre-et-analyser-un-compte-de-r%C3%A9sultat.png"
                            alt="Session bilan"
                            className="w-full drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>

                    <div className="lg:w-[100%]">
                        <div className="space-y-5 pb-6">
                            <div data-aos="zoom-in" className="flex items-center gap-4">
                                <div className="text-sky-600 text-7xl">
                                    <h1 className="font-bold">04</h1>
                                </div>
                                <div>
                                    <p className="text-sky-600">Étape 4</p>
                                    <h1 className="text-xl sm:text-3xl font-bold dark:text-white">Session bilan</h1>
                                </div>
                            </div>
                            <p data-aos="fade-up" className="dark:text-white text-gray-600 tracking-wide">
                                La session bilan est un moment clé pour faire le point sur les progrès réalisés, discuter des défis rencontrés et ajuster les stratégies si nécessaire. C’est l’occasion de valider les résultats obtenus par rapport aux objectifs initiaux et de planifier les prochaines étapes si besoin.
                                <br /><br />
                                Cette étape permet au coaché et au coach de s'assurer que les objectifs sont atteints et de déterminer les actions futures pour maintenir la progression.
                            </p>

                            {/* <button data-aos="fade-up" className="bg-sky-600 text-white px-10 py-3 font-bold">
                                Commencer
                            </button> */}
                        </div>
                    </div>
                </div>
                <div className="w-full flex lg:mt-10">
                    <button
                        onClick={() => setVoirEtaps(!voirEtaps)}
                        className="bg-transparent border border-sky-600 text-sky-600 font-semibold py-2 px-7 mx-auto">
                        Cacher 2 étapes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service8_2;
