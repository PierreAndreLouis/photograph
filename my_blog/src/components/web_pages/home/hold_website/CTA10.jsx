export default function CTA10() {
    return (
        <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
            <div className="max-w-xl mx-auto text-center relative">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                        Inscris-toi pour Ne Rien Manquer 
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-3">
                        eçois directement dans ta boîte mail des astuces photo, des inspirations exclusives et des nouveautés pour sublimer tes clichés. Rejoins notre communauté et reste à jour avec tout ce qui fait vibrer le monde de la photographie !
                    </p>
                </div>
              
                <div className="input-form max-w-2xl mx-auto w-full flex flex-col md:flex-row gap-y-2 items-center justify-center lg:justify-start gap-x-5 lg:gap-x-5 mt-5">
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="py-2.5 text-white px-5 placeholder:text-gray-300 placeholder:text-sm rounded-lg bg-white/20 border border-zinc-400/40 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200"
                        />
                    </div>
                    <button
                        className="bg-white w-full md:w-[14rem]  hover:shadow-md focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 
                        ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200  text-zinc-800 text-sm rounded-lg 
                        px-5 py-[.73rem] shadow-md group font-clash font-[500]"
                    >
                        Send an Email
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="inline-block ml-2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
