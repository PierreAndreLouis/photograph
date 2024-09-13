import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomeSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Accueil - Pierre-André Louis | Photographe Professionnel</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez les services de photographie professionnelle de Pierre-André Louis. Spécialisé en portraits, événements, et séances photos, capturez vos moments inoubliables avec un style unique."
                />

                {/* Mots-clés SEO */}
                <meta
                    name="keywords"
                    content="photographie professionnelle, photographe, séance photo, portraits, événements, photo de mariage, photographie artistique, photographie commerciale"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Accueil - Pierre-André Louis | Photographe Professionnel" />
                <meta property="og:description" content="Découvrez les services de photographie de Pierre-André Louis, offrant des solutions créatives pour capturer vos moments importants." />
                <meta property="og:image" content="https://mon-site.com/images/photography-home-page.jpg" /> {/* Assurez-vous d'utiliser une URL d'image appropriée */}
                <meta property="og:url" content="https://mon-site.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Pierre-André Louis | Photographe Professionnel" />
                <meta name="twitter:description" content="Pierre-André Louis offre des services de photographie professionnelle pour capturer vos moments mémorables." />
                <meta name="twitter:image" content="https://mon-site.com/images/photography-home-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Photographer",
                            "name": "Pierre-André Louis",
                            "url": "https://mon-site.com",
                            "description": "Photographe professionnel spécialisé dans les portraits, événements, et séances photos.",
                            "sameAs": [
                                "https://www.linkedin.com/in/pierreandrelouis",
                                "https://twitter.com/pierreandrelouis"
                            ],
                            "image": "https://mon-site.com/images/photography-home-page.jpg"
                        }
                    `}
                </script>

                {/* Site verification */}
                {/* <meta name="google-site-verification" content="3RQHYdN_AI2CBfB6GxDsbkxcKlyMCJG9txckWBtODiI" /> */}

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
