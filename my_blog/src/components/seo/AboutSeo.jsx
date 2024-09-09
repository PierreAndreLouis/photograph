import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>À Propos - Pierre-André Louis | Services de Marketing Digital</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez Pierre-André Louis, expert en marketing digital dédié à aider les entreprises à maximiser leur visibilité en ligne. Apprenez-en plus sur notre expertise et notre engagement pour votre succès digital."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="marketing digital, stratégie marketing, SEO, publicité en ligne, réseaux sociaux, marketing de contenu, branding, Pierre-André Louis" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="À Propos - Pierre-André Louis | Services de Marketing Digital" />
                <meta property="og:description" content="En savoir plus sur Pierre-André Louis, spécialiste en marketing digital qui aide les entreprises à atteindre leurs objectifs en ligne." />
                <meta property="og:image" content="https://mon-site.com/images/marketing-about-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="À Propos - Pierre-André Louis | Services de Marketing Digital" />
                <meta name="twitter:description" content="Apprenez-en plus sur l'approche de Pierre-André Louis pour booster votre visibilité en ligne grâce à des stratégies de marketing digital." />
                <meta name="twitter:image" content="https://mon-site.com/images/marketing-about-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "http://schema.org",
                      "@type": "Organization",
                      "name": "Pierre-André Louis Marketing Digital",
                      "url": "https://mon-site.com/about",
                      "logo": "https://mon-site.com/images/logo.png",
                      "description": "Expertise en marketing digital pour optimiser la visibilité en ligne des entreprises.",
                      "founder": {
                        "@type": "Person",
                        "name": "Pierre-André Louis",
                        "jobTitle": "Spécialiste en Marketing Digital"
                      },
                      "sameAs": [
                        "https://www.linkedin.com/in/pierre-andre-louis",
                        "https://twitter.com/pierreandrelouis"
                      ]
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
