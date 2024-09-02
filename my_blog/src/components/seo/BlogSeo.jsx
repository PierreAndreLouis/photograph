import React from 'react'
import { Helmet } from 'react-helmet-async';


export default function BlogSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Blog - Pierre-André Louis | Création de Sites Web Professionnels</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez nos services de création de sites web professionnels pour freelancers et entrepreneurs. Boostez votre présence en ligne avec un site moderne et attractif."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="création site web, web design, développement web, freelance, portfolio, site vitrine, design UX, site responsive" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Accueil - Pierre-André Louis | Création de Sites Web Professionnels" />
                <meta property="og:description" content="Découvrez nos services de création de sites web professionnels pour freelancers et entrepreneurs." />
                <meta property="og:image" content="https://mon-site.com/images/home-page.jpg" />{/* <!-- Remplace avec une URL d'image appropriée --> */}

                <meta property="og:url" content="https://mon-site.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Pierre-André Louis | Création de Sites Web Professionnels" />
                <meta name="twitter:description" content="Découvrez nos services de création de sites web professionnels pour freelancers et entrepreneurs." />
                <meta name="twitter:image" content="https://mon-site.com/images/home-page.jpg" />

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
            </Helmet>
        </div>
    )
}
