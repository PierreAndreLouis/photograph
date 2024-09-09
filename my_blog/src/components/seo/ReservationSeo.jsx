import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ReservationSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Réservez Votre Séance - Pierre-André Louis | Coaching Professionnel</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Réservez une séance de coaching professionnel avec Pierre-André Louis pour un accompagnement sur mesure. Développez vos compétences et atteignez vos objectifs de carrière avec notre expertise."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="réservation coaching, coaching professionnel, accompagnement personnalisé, développement de carrière, gestion de carrière, mentorat, séance de coaching, coaching en ligne" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Réservez Votre Séance - Pierre-André Louis | Coaching Professionnel" />
                <meta property="og:description" content="Réservez votre séance de coaching avec Pierre-André Louis. Profitez d'un accompagnement professionnel personnalisé pour accélérer votre développement personnel et professionnel." />
                <meta property="og:image" content="https://mon-site.com/images/reservation-page.jpg" /> {/* Assurez-vous de remplacer par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/reservation" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Réservez Votre Séance - Pierre-André Louis | Coaching Professionnel" />
                <meta name="twitter:description" content="Réservez une séance de coaching professionnel avec Pierre-André Louis pour un accompagnement sur mesure et boostez votre carrière." />
                <meta name="twitter:image" content="https://mon-site.com/images/reservation-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "http://schema.org",
                      "@type": "Service",
                      "name": "Réservation de Coaching Professionnel",
                      "description": "Réservez une séance de coaching professionnel avec Pierre-André Louis pour un accompagnement personnalisé afin de développer vos compétences et atteindre vos objectifs de carrière.",
                      "provider": {
                        "@type": "Person",
                        "name": "Pierre-André Louis",
                        "url": "https://mon-site.com"
                      },
                      "url": "https://mon-site.com/reservation"
                    }
                    `}
                </script>

                <meta name="google-site-verification" content="N-zeL1g6i8H01BkSrgIW_lM7MYrYGG3lVzsGMGvSq4o" />

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFV9GQVC5K"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-GFV9GQVC5K');
                    `}
                </script>
            </Helmet>
        </div>
    );
}
