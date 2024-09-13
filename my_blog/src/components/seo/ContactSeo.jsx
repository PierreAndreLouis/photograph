import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Contact - Pierre-André Louis | Photographe Professionnel</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Contactez Pierre-André Louis, photographe professionnel, pour capturer vos moments précieux avec un style unique. Que ce soit pour des portraits, des événements ou des séances photos, nous sommes là pour répondre à vos besoins."
                />

                {/* Mots-clés SEO */}
                <meta
                    name="keywords"
                    content="photographie professionnelle, photographe, séance photo, portraits, photographie événementielle, photo de mariage, contact photographe, réservation shooting photo"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Contact - Pierre-André Louis | Photographe Professionnel" />
                <meta property="og:description" content="Contactez Pierre-André Louis pour vos besoins en photographie professionnelle. Nous offrons des services de photographie de haute qualité pour capturer vos moments spéciaux." />
                <meta property="og:image" content="https://mon-site.com/images/contact-page.jpg" />{/* Remplace avec une URL d'image appropriée */}
                <meta property="og:url" content="https://mon-site.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - Pierre-André Louis | Photographe Professionnel" />
                <meta name="twitter:description" content="Besoin d'un photographe ? Contactez Pierre-André Louis pour des services de photographie professionnelle adaptés à vos besoins." />
                <meta name="twitter:image" content="https://mon-site.com/images/contact-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Photographer",
                            "name": "Pierre-André Louis",
                            "url": "https://mon-site.com/contact",
                            "description": "Photographe professionnel spécialisé dans les portraits, événements, et séances photos.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-234-567-890",
                                "contactType": "Customer Service",
                                "areaServed": "HT",
                                "availableLanguage": "French"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/in/pierre-andre-louis",
                                "https://twitter.com/pierreandrelouis"
                            ]
                        }
                    `}
                </script>

                {/* <meta name="google-site-verification" content="N-zeL1g6i8H01BkSrgIW_lM7MYrYGG3lVzsGMGvSq4o" /> */}

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-NFQCP2FJJZ"></script>
                <script>
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NFQCP2FJJZ');
          `}
                </script>
            </Helmet>
        </div>
    );
}
