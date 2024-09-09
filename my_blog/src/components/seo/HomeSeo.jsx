import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomeSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Accueil - Pierre-André Louis | Services de Marketing Digital</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez nos services de marketing digital, incluant la création de sites web optimisés, le SEO, et la gestion de campagnes publicitaires. Boostez votre présence en ligne avec des solutions sur mesure."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="marketing digital, création site web, SEO, publicité en ligne, gestion de campagnes, design UX, optimisation site web" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Accueil - Pierre-André Louis | Services de Marketing Digital" />
                <meta property="og:description" content="Découvrez nos services de marketing digital pour améliorer votre visibilité en ligne avec des solutions personnalisées." />
                <meta property="og:image" content="https://mon-site.com/images/marketing-home-page.jpg" /> {/* Remplace avec une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Pierre-André Louis | Services de Marketing Digital" />
                <meta name="twitter:description" content="Boostez votre présence en ligne avec nos services de marketing digital. Découvrez comment nous pouvons vous aider à atteindre vos objectifs." />
                <meta name="twitter:image" content="https://mon-site.com/images/marketing-home-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "http://schema.org",
                      "@type": "WebSite",
                      "name": "Pierre-André Louis Marketing Digital",
                      "url": "https://mon-site.com",
                      "description": "Pierre-André Louis propose des services de marketing digital pour aider les entreprises à améliorer leur visibilité en ligne avec des solutions sur mesure.",
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
    );
}
