import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";

export default function Faq6() {
    const [active_id, setActive_id] = useState(null);

    const faqItems = [
        {
            id: 1,
            question: 'Combien de temps faut-il pour voir les premiers résultats de votre coaching ?',
            answer: 'Les premiers résultats peuvent généralement être observés après 4 à 6 semaines, en fonction de votre engagement et de la nature des objectifs fixés.'
        },
        {
            id: 2,
            question: 'Quels sont les formats de coaching que vous proposez ?',
            answer: 'Nous proposons des séances de coaching individuelles, des sessions de groupe, ainsi que des programmes de coaching en ligne pour répondre à vos besoins spécifiques.'
        },
        {
            id: 3,
            question: 'Comment puis-je réserver une séance de coaching ?',
            answer: 'Vous pouvez réserver une séance de coaching directement depuis notre site web en accédant à l\'onglet "Réservation" ou en nous contactant par e-mail.'
        },
        {
            id: 4,
            question: 'Y a-t-il des offres spéciales pour les nouveaux clients ?',
            answer: 'Oui, nous offrons souvent des réductions ou des séances gratuites pour les nouveaux clients. Consultez notre page d\'accueil pour plus d\'informations sur les offres actuelles.'
        },
        {
            id: 5,
            question: 'Quelles sont vos méthodes de paiement ?',
            answer: 'Nous acceptons les paiements par carte bancaire, PayPal et virement bancaire pour plus de flexibilité.'
        },
        {
            id: 6,
            question: 'Que faire si je dois annuler ou reprogrammer une séance ?',
            answer: 'Si vous devez annuler ou reprogrammer une séance, veuillez nous en informer au moins 24 heures à l\'avance pour éviter des frais d\'annulation.'
        },
        {
            id: 7,
            question: 'Offrez-vous des sessions de coaching gratuites ?',
            answer: 'Nous proposons des séances de découverte gratuites pour les nouveaux clients afin d\'évaluer vos besoins et vous présenter nos services.'
        },
        {
            id: 8,
            question: 'Comment puis-je contacter mon coach en dehors des séances ?',
            answer: 'Vous pouvez contacter votre coach par e-mail ou via la plateforme de coaching en ligne que nous utilisons, selon l\'accord que vous avez établi lors de votre inscription.'
        },
    ];

    const toggleFAQ = (id) => {
        setActive_id(active_id === id ? null : id);
    };

    return (
        <div className='pb-20 relative overflow-hidden min-h-screen bg-gray-100 pt-20 px-4 dark:bg-slate-900'>

            <div className="hidden md:block absolute inset-0 -left-40 ">
                <div className='w-[105rem] h-[35rem] bg-sky-300/10 dark:bg-sky-800/5 rotate-45'></div>
            </div>

            <div className='relative bg-gray-300'></div>
            <div className='relative max-w-6xl mx-auto'>
                <div className='flex flex-col items-center justify-center text-center pb-16'>
                    <h3 className='font-semibold text-xl dark:text-gray-300'>FAQ</h3>
                    <h1 className='font-semibold text-3xl text-sky-500'>Des questions ? regardez ici</h1>
                </div>
                <div className='grid lg:grid-cols-2 gap-6 justify-start items-start'>





                    <div className='grid gap-8 '>
                        {faqItems.slice(0, 4).map((item, index) => (
                            <div key={item.id} className='grid bg-white rounded-xl dark:bg-slate-800'>
                                <h3
                                    onClick={() => toggleFAQ(item.id)}
                                    className={`bg-white rounded-xl text-[1.1rem] leading-[1.5rem] transition-all duration-300 ${active_id === item.id ? 'sh-[100%] rounded-t-xl' : 'sh-[1rem] rounded-xl'} 
                                border border-gray-50 dark:border-gray-600 cursor-pointer bg-gray-100 flex gap-3 items-center p-3 text-lg 
                                 text-gray-600 dark:bg-slate-800 dark:text-gray-300`}
                                >
                                    <FaChevronDown
                                        className={`${active_id === item.id ? "rotate-180" : "rotate-0"} text-3xl xl:text-xl transition-all duration-300}`} />
                                    {item.question}
                                </h3>
                                <p
                                    className={`overflow-hidden dark:bg-slate-800 dark:text-gray-300 text-gray-600 bg-white rounded-b-xl transition-all duration-300 px-4 ${active_id === item.id ? 'h-[11rem] py-4' : ' h-[0rem] '}`}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>


                    <div className='grid gap-8 '>
                        {faqItems.slice(4, 8).map((item, index) => (
                            <div key={item.id} className='grid bg-white rounded-xl dark:bg-slate-800'>
                                <h3
                                    onClick={() => toggleFAQ(item.id)}
                                    className={`bg-white rounded-xl text-[1.1rem] leading-[1.5rem] transition-all duration-300 ${active_id === item.id ? 'sh-[100%] rounded-t-xl' : 'sh-[1rem] rounded-xl'} 
                                border border-gray-50 dark:border-gray-600 cursor-pointer bg-gray-100 flex gap-3 items-center p-3 text-lg 
                                 text-gray-600 dark:bg-slate-800 dark:text-gray-300`}
                                >
                                    <FaChevronDown
                                        className={`${active_id === item.id ? "rotate-180" : "rotate-0"} text-3xl xl:text-xl transition-all duration-300}`} />
                                    {item.question}
                                </h3>
                                <p
                                    className={`overflow-hidden dark:bg-slate-800 dark:text-gray-300 text-gray-600 bg-white rounded-b-xl transition-all duration-300 px-4 ${active_id === item.id ? 'h-[11rem] py-4' : ' h-[0rem] '}`}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}











