import React from "react";

const Service8_3 = () => {
    return (
        <div className="py-14 dark:bg-slate-900 bg-slate-100 duration-300 px-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="border-4 w-full">
                        <img
                            src="https://www.medoucine.com/blog/wp-content/uploads/2020/11/coaching-3-1140x665.jpg"
                            alt="Sessions de coaching"
                            className="w-full drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>
                    <div>
                        <div className="space-y-5 pb-6">
                            <div data-aos="zoom-in" className="flex items-center gap-4">
                                <div className="text-sky-600 text-7xl">
                                    <h1 className="font-bold">03</h1>
                                </div>
                                <div>
                                    <p className="text-sky-600">Étape 3</p>
                                    <h1 className="text-xl sm:text-3xl font-bold dark:text-white">Sessions de coaching</h1>
                                </div>
                            </div>
                            <p data-aos="fade-up" className="dark:text-white text-gray-600 tracking-wide">
                                Les sessions de coaching consistent en des rencontres régulières visant à atteindre les objectifs définis lors des étapes précédentes. Elles permettent d'explorer les défis rencontrés, d'ajuster les stratégies et de renforcer les compétences nécessaires.
                                <br /><br />
                                Chaque session est conçue pour être interactive et productive, offrant au coaché un espace pour progresser efficacement avec le soutien du coach.
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

export default Service8_3;
