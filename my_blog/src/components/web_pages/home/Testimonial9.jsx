import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// npm install react - slick slick - carousel


const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "L'équipe a vraiment compris notre vision et a livré une solution qui a dépassé nos attentes. Leur expertise a été un atout majeur pour notre succès.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Un partenaire stratégique exceptionnel. Leur approche personnalisée et leur soutien constant nous ont permis de réaliser des progrès significatifs.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "Leur compréhension approfondie de nos besoins a conduit à des résultats impressionnants. Je recommande vivement leurs services à toute entreprise.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 4,
        name: "Sachin Tendulkar",
        text: "Travailler avec eux a été une expérience fantastique. Leur capacité à adapter les solutions à notre entreprise a été cruciale pour notre succès.",
        img: "https://picsum.photos/103/103",
    },
];


const Testimonial9 = () => {
    const sliderRef = useRef(null);

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="py-10 dark:bg-gray-900 bg-indigo-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400">
                        What our customers are saying
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold py-3 dark:text-white">
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className="text-md text-gray-600 dark:text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>

                <div data-aos="zoom-in" className="relative   mx-auto">
                    <Slider className=" max-w-6xl w-[95vw] mx-auto" {...settings} ref={sliderRef}>
                        {TestimonialData.map((data) => (
                            <div className="my-6 " key={data.id}>
                                <div className="flex flex-col bg-white gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                    <div className="mb-4">
                                        <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{data.text}</p>
                                            <h1 className="text-xl dark:text-gray-300 font-bold text-black/80 dark:text-light">
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl dark:text-gray-400 font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center gap-36 ">

                        <button
                            onClick={handlePrev}
                            className=" w-12 h-12   transform  bg-gray-300 text-2xl  dark:text-white dark:bg-slate-800 rounded-full"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNext}
                            className=" w-12 h-12   transform  bg-gray-300 text-2xl  dark:text-white dark:bg-slate-800 rounded-full"
                        >
                            &gt;
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial9;
