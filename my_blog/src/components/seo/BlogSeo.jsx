import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Blog - Pierre-André Louis | Conseils en Marketing Digital</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Explorez notre blog pour des conseils pratiques en marketing digital, stratégies SEO, publicité en ligne, et gestion de marque. Suivez les dernières tendances pour optimiser votre présence en ligne."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="marketing digital, SEO, publicité en ligne, gestion de marque, stratégie marketing, branding, marketing de contenu, blog marketing" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Blog - Pierre-André Louis | Conseils en Marketing Digital" />
                <meta property="og:description" content="Découvrez des articles inspirants et des conseils pratiques en marketing digital pour améliorer la visibilité de votre entreprise en ligne." />
                <meta property="og:image" content="https://mon-site.com/images/marketing-blog-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Pierre-André Louis | Conseils en Marketing Digital" />
                <meta name="twitter:description" content="Suivez notre blog pour des articles sur le marketing digital, les stratégies SEO, et la publicité en ligne." />
                <meta name="twitter:image" content="https://mon-site.com/images/marketing-blog-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "http://schema.org",
                      "@type": "Blog",
                      "name": "Blog - Pierre-André Louis",
                      "url": "https://mon-site.com/blog",
                      "description": "Le blog de Pierre-André Louis offre des conseils pratiques en marketing digital pour aider les entreprises à optimiser leur présence en ligne.",
                      "publisher": {
                        "@type": "Organization",
                        "name": "Pierre-André Louis Marketing Digital",
                        "url": "https://mon-site.com",
                        "logo": "https://mon-site.com/images/logo.png"
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
