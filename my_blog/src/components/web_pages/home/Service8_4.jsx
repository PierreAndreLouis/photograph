import React from 'react';

const Service8_2 = ({ setVoir_etaps, voir_etaps }) => {
    return (
        <div className="py-14 dark:bg-slate-900 bg-slate-100 duration-300 px-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 lg:flex flex-row-reverse place-items-center max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="border-4 w-full lg:w-[100%]">
                        <img
                            src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2015/07/Comprendre-et-analyser-un-compte-de-r%C3%A9sultat.png"
                            alt="Photography Service"
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
                                    <h1 className="text-2xl sm:text-4xl font-bold dark:text-white">Session bilan</h1>
                                </div>
                            </div>
                            <p data-aos="fade-up" className="dark:text-white tracking-wide">
                                Il s'agit d'un échange interactif qui permet de rassembler des informations sur le contexte organisationnel, les attentes et les objectifs à atteindre. Cette séance initiale permet au coaché de verbaliser les problématiques rencontrées et ses objectifs.
                                <br /><br />
                                Le but est d'obtenir des informations afin de mieux conseiller le coaché et de le guider vers des pistes de solutions auxquelles il n’avait pas pensé.
                            </p>

                            <button data-aos="fade-up" className="bg-sky-600 text-white px-10 py-3 font-bold">
                                Commencer
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex mt-10">
                    <button
                        onClick={() => setVoir_etaps(!voir_etaps)}
                        className="bg-transparent border border-sky-600 text-sky-600 font-semibold py-2 px-7 mx-auto">
                        Cacher 2 étapes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service8_2;
