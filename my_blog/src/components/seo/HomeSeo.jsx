import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function HomeSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Accueil - Pierre-André Louis | Coaching Professionnel</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Explorez nos services de coaching professionnel pour booster votre carrière. Pierre-André Louis vous accompagne dans votre développement personnel et professionnel avec des stratégies sur mesure."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="coaching professionnel, développement personnel, coaching de carrière, mentorat, gestion de carrière, coaching en ligne" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Accueil - Pierre-André Louis | Coaching Professionnel" />
                <meta property="og:description" content="Explorez nos services de coaching professionnel pour booster votre carrière." />
                <meta property="og:image" content="https://mon-site.com/images/coaching-home-page.jpg" /> {/* Assure-toi de remplacer par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Pierre-André Louis | Coaching Professionnel" />
                <meta name="twitter:description" content="Explorez nos services de coaching professionnel pour booster votre carrière." />
                <meta name="twitter:image" content="https://mon-site.com/images/coaching-home-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Pierre-André Louis",
              "url": "https://mon-site.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mon-site.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
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
