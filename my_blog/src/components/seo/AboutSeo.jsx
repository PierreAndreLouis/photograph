import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function AboutSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>À Propos - Pierre-André Louis | Coaching Professionnel</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="En savoir plus sur Pierre-André Louis, coach professionnel dédié à aider les individus à atteindre leurs objectifs personnels et professionnels. Découvrez notre approche et notre engagement envers votre succès."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="coaching professionnel, développement personnel, gestion de carrière, mentorat, coach, accompagnement professionnel, coaching en ligne" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="À Propos - Pierre-André Louis | Coaching Professionnel" />
                <meta property="og:description" content="En savoir plus sur Pierre-André Louis, coach professionnel dédié à votre succès personnel et professionnel." />
                <meta property="og:image" content="https://mon-site.com/images/about-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="À Propos - Pierre-André Louis | Coaching Professionnel" />
                <meta name="twitter:description" content="Découvrez l'approche et l'engagement de Pierre-André Louis pour vous aider à atteindre vos objectifs professionnels." />
                <meta name="twitter:image" content="https://mon-site.com/images/about-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Pierre-André Louis",
              "jobTitle": "Coach Professionnel",
              "url": "https://mon-site.com/about",
              "image": "https://mon-site.com/images/about-page.jpg",
              "description": "Pierre-André Louis est un coach professionnel spécialisé dans l'accompagnement des individus pour atteindre leurs objectifs personnels et professionnels.",
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
    )
}
