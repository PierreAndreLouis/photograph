import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Blog - Pierre-André Louis | Photographie Professionnelle</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Explorez notre blog pour des conseils en photographie professionnelle, astuces de shooting, et inspirations pour capturer vos moments les plus précieux. Restez à jour avec les dernières tendances en photographie."
                />

                {/* Mots-clés SEO */}
                <meta
                    name="keywords"
                    content="photographie professionnelle, astuces photo, shooting, portrait, photographie de mariage, photographie événementielle, blog de photographie"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Blog - Pierre-André Louis | Photographie Professionnelle" />
                <meta property="og:description" content="Découvrez des articles inspirants sur la photographie, des conseils pratiques pour améliorer vos compétences et capturer des moments inoubliables." />
                <meta property="og:image" content="https://mon-site.com/images/photography-blog-page.jpg" /> {/* Remplace par une URL d'image appropriée */}
                <meta property="og:url" content="https://mon-site.com/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Pierre-André Louis | Photographie Professionnelle" />
                <meta name="twitter:description" content="Suivez notre blog pour des articles sur la photographie, des astuces de shooting, et des inspirations pour vos projets photo." />
                <meta name="twitter:image" content="https://mon-site.com/images/photography-blog-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Blog",
                            "name": "Blog - Pierre-André Louis",
                            "url": "https://mon-site.com/blog",
                            "description": "Le blog de Pierre-André Louis propose des conseils pratiques en photographie pour capturer vos moments précieux et améliorer vos compétences photo.",
                            "publisher": {
                                "@type": "Person",
                                "name": "Pierre-André Louis",
                                "url": "https://mon-site.com"
                            }
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
