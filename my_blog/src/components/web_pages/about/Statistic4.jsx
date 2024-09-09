export default function Statistic4() {

    const stats = [
        {
            data: "35K",
            title: "Clients"
        },
        {
            data: "10K+",
            title: "Téléchargements"
        },
        {
            data: "40+",
            title: "Pays"
        },
        {
            data: "30M+",
            title: "Revenus totaux"
        },
    ]

    return (
        <section className="py-20 dark:bg-gray-900 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 dark:text-gray-300 gap-12 items-start justify-between flex flex-col-reverse lg:flex-row md:px-8">
                <div className="lg:max-w-xl">
                    <img
                        src="https://www.69dropsstudio.co.uk/wp-content/uploads/2016/11/benefits-of-photography.jpg.webp"
                        className="rounded-lg"
                        alt="Pourquoi choisir nos services"
                    />
                </div>
                <div className="mt-0 gap-10 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 dark:text-gray-100 text-3xl font-semibold sm:text-4xl">
                            Nous faisons tout pour satisfaire nos clients
                        </h3>
                        <p className="mt-3 max-w-xl dark:text-gray-300">
                            Nous nous engageons à fournir des services de qualité et à répondre aux besoins de nos clients de manière efficace et professionnelle.
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="dark:text-gray-100">
                                        <h4 className="text-4xl text-sky-600 dark:text-sky-400 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
