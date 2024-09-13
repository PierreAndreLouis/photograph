import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ReservationSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Réservation - Pierre-André Louis | Photographe Professionnel</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Réservez une séance photo avec Pierre-André Louis, photographe professionnel. Capturez vos moments précieux avec des photos de qualité et un service personnalisé."
                />

                {/* Mots-clés SEO */}
                <meta
                    name="keywords"
                    content="réservation séance photo, photographe professionnel, photographie, shooting photo, séance photo, portrait, événements, photographie artistique, photographie commerciale"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Réservation - Pierre-André Louis | Photographe Professionnel" />
                <meta property="og:description" content="Réservez votre séance photo avec Pierre-André Louis pour immortaliser vos moments spéciaux avec des images exceptionnelles." />
                <meta property="og:image" content="https://mon-site.com/images/reservation-page.jpg" /> {/* Remplace par une URL d'image appropriée */}
                <meta property="og:url" content="https://mon-site.com/reservation" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Réservation - Pierre-André Louis | Photographe Professionnel" />
                <meta name="twitter:description" content="Prenez rendez-vous pour une séance photo avec Pierre-André Louis et capturez vos moments inoubliables." />
                <meta name="twitter:image" content="https://mon-site.com/images/reservation-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "PhotographyService",
                            "name": "Réservation de Séance Photo",
                            "description": "Réservez une séance photo avec Pierre-André Louis, photographe professionnel offrant des services de qualité pour portraits, événements, et plus.",
                            "provider": {
                                "@type": "Person",
                                "name": "Pierre-André Louis",
                                "url": "https://mon-site.com"
                            },
                            "url": "https://mon-site.com/reservation"
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
