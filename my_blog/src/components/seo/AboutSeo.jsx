import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>À Propos - Pierre-André Louis | Photographie Professionnelle</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez les services de photographie professionnelle offerts par Pierre-André Louis. Capturez vos moments les plus précieux avec expertise et passion."
                />

                {/* Mots-clés SEO */}
                <meta
                    name="keywords"
                    content="photographie professionnelle, photographe, portrait, mariage, événement, photographie de produit, shooting photo, services de photographie"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="À Propos - Pierre-André Louis | Photographie Professionnelle" />
                <meta property="og:description" content="Explorez les services de photographie de Pierre-André Louis et laissez-vous capturer vos moments les plus importants." />
                <meta property="og:image" content="https://mon-site.com/images/photography-about-page.jpg" /> {/* Mets à jour l'URL de l'image */}
                <meta property="og:url" content="https://mon-site.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="À Propos - Pierre-André Louis | Photographie Professionnelle" />
                <meta name="twitter:description" content="Découvrez les services de photographie professionnelle de Pierre-André Louis et capturez vos moments précieux." />
                <meta name="twitter:image" content="https://mon-site.com/images/photography-about-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Person",
                            "name": "Pierre-André Louis",
                            "jobTitle": "Photographe Professionnel",
                            "url": "https://mon-site.com/about",
                            "image": "https://mon-site.com/images/photography-about-page.jpg",
                            "description": "Pierre-André Louis est un photographe professionnel offrant des services pour capturer vos moments spéciaux avec une touche artistique.",
                            "sameAs": [
                                "https://www.linkedin.com/in/pierre-andre-louis",
                                "https://twitter.com/pierreandrelouis"
                            ]
                        }
                    `}
                </script>

                {/* <meta name="google-site-verification" content="N-zeL1g6i8H01BkSrgIW_lM7MYrYGG3lVzsGMGvSq4o" /> */}

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
