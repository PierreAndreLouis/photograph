import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function BlogSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Blog - Pierre-André Louis | Conseils en Coaching Professionnel</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Explorez notre blog pour des conseils pratiques en coaching professionnel, développement personnel, et gestion de carrière. Suivez les dernières tendances pour booster votre parcours professionnel."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="coaching professionnel, développement personnel, gestion de carrière, mentorat, conseils en coaching, coaching en ligne, blog de coaching" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Blog - Pierre-André Louis | Conseils en Coaching Professionnel" />
                <meta property="og:description" content="Découvrez des articles inspirants et des conseils pratiques en coaching professionnel pour améliorer votre carrière et atteindre vos objectifs." />
                <meta property="og:image" content="https://mon-site.com/images/blog-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Pierre-André Louis | Conseils en Coaching Professionnel" />
                <meta name="twitter:description" content="Suivez notre blog pour des articles sur le coaching professionnel, la gestion de carrière et le développement personnel." />
                <meta name="twitter:image" content="https://mon-site.com/images/blog-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Blog",
              "name": "Blog - Pierre-André Louis",
              "url": "https://mon-site.com/blog",
              "description": "Le blog de Pierre-André Louis propose des conseils pratiques en coaching professionnel et en développement personnel pour aider les individus à atteindre leurs objectifs.",
              "publisher": {
                "@type": "Person",
                "name": "Pierre-André Louis",
                "url": "https://mon-site.com"
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
