import React, { useState } from 'react';

const testimonialsData = [
    {
        image: 'https://img.freepik.com/photos-gratuite/homme-afro-americain-portant-chapeau-elegant_23-2148634061.jpg?t=st=1723570792~exp=1723574392~hmac=4645de614fcdee6caf2d24acba11ff5de08a9b0a01f79e1e788360814cd3229f&w=740',
        name: 'Ema Watson',
        position: 'Responsable Marketing chez Stech',
        text: '“ Grâce à ce coaching, notre équipe a réussi à surmonter de nombreux défis et à atteindre ses objectifs avec une nouvelle énergie. Je recommande vivement !”',
    },
    {
        image: 'https://img.freepik.com/photos-gratuite/portrait-etudiant-peau-sombre-attrayant-portant-chemise-carreaux-expression-confiante-joyeuse-debout-mur-du-tableau_273609-5907.jpg?t=st=1723570902~exp=1723574502~hmac=620933b68073e7c7dc2b07e9ad85112aba81d945628a7ec52bd175f0d882009f&w=900',
        name: 'John Doe',
        position: 'Développeur Senior chez Techie',
        text: '“ Le coaching a été une révélation pour moi. J’ai appris des techniques précieuses qui ont directement impacté mes performances au travail. Merci !”',
    },
    {
        image: 'https://img.freepik.com/photos-gratuite/plan-horizontal-etudiant-satisfait-utilise-nouvelle-application-cool-son-telephone-portable-porte-bloc-notes-pour-ecrire-notes-porte-lunettes-foulard-soie-pull-tricot-isole-mur-bleu_273609-26316.jpg?t=st=1723570924~exp=1723574524~hmac=4ec6c0f28c5b9b3cad367099b249132e3958864fca359250388e5a521a4e12ea&w=900',
        name: 'Marie Dupont',
        position: 'Responsable des Ressources Humaines chez Innovatech',
        text: '“ L’accompagnement a été exceptionnel. Notre équipe a développé des compétences nouvelles et a amélioré sa cohésion. Une expérience très enrichissante !”',
    },
    {
        image: 'https://img.freepik.com/photos-gratuite/portrait-employe-bureau-masculin-confiant-serieux-lunettes-chemise-formelle-peau-foncee-pose-dans-armoire-spacieuse_273609-3441.jpg?t=st=1723570974~exp=1723574574~hmac=26537581f0c0b7f3ce73ad30b34071e3a5a4ce649ef21cb1cb5d59e22a78b4a6&w=900',
        name: 'Alice Martin',
        position: 'Consultante en stratégie chez Nexa',
        text: '“ Un coaching de grande qualité qui a apporté des changements significatifs dans notre manière de travailler. Les résultats ont été au-delà de nos attentes.”',
    },
];

export default function Testimonial5() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    const { image, name, position, text } = testimonialsData[currentIndex];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl px-6 py-20 mx-auto">
                <p className="text-center text-xl font-medium text-gray-500">Témoignages</p>
                <h1 className="mt-2 text-center text-sky-600 text-3xl font-semibold capitalize lg:text-3xl">
                    Ce que nos clients disent
                </h1>

                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-sky-600 -z-10 md:h-96 rounded-2xl"></div>

                    <div className="w-full p-6 bg-sky-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img
                            src={image}
                            alt={`Témoignage de ${name}`}
                            className="h-24 w-24 border md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:min-w-80 md:max-w-80 lg:min-w-[25rem] lg:max-w-[25rem] lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                        />
                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">{name}</p>
                                <p className="text-sky-200">{position}</p>
                            </div>
                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                {text}
                            </p>

                            <div className="flex items-center justify-between mt-6 md:justify-start">
                                <button
                                    onClick={handlePrevClick}
                                    title="Témoignage précédent"
                                    className="p-2 text-white transition-colors duration-300 border rounded-full hover:bg-sky-400"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleNextClick}
                                    title="Témoignage suivant"
                                    className="p-2 text-white transition-colors duration-300 border rounded-full hover:bg-sky-400 md:mx-6"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}
