import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function ReservationSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Réservation - Pierre-André Louis | Coaching Professionnel et Accompagnement</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Réservez une séance de coaching professionnel avec Pierre-André Louis. Profitez d'un accompagnement personnalisé pour atteindre vos objectifs de carrière et de développement personnel."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="réservation coaching, coaching professionnel, développement personnel, gestion de carrière, accompagnement personnalisé, séance de coaching, mentorat, coaching en ligne" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Réservation - Pierre-André Louis | Coaching Professionnel et Accompagnement" />
                <meta property="og:description" content="Réservez une séance de coaching professionnel avec Pierre-André Louis pour booster votre carrière et atteindre vos objectifs personnels." />
                <meta property="og:image" content="https://mon-site.com/images/reservation-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/reservation" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Réservation - Pierre-André Louis | Coaching Professionnel et Accompagnement" />
                <meta name="twitter:description" content="Prenez rendez-vous pour une séance de coaching professionnel avec Pierre-André Louis. Faites le premier pas vers vos objectifs." />
                <meta name="twitter:image" content="https://mon-site.com/images/reservation-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "name": "Réservation de Coaching Professionnel",
              "description": "Réservez une séance de coaching professionnel avec Pierre-André Louis pour un accompagnement personnalisé dans votre parcours de carrière.",
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
    )
}
