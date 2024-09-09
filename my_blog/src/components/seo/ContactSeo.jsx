import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Contact - Pierre-André Louis | Services de Marketing Digital</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Contactez-nous pour découvrir nos services de marketing digital, incluant la création de sites web optimisés, le SEO, et la gestion de campagnes publicitaires pour booster votre visibilité en ligne."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="marketing digital, création site web, SEO, publicité en ligne, design UX, stratégie digitale, gestion de campagnes, optimisation site web" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Contact - Pierre-André Louis | Services de Marketing Digital" />
                <meta property="og:description" content="Découvrez nos services de marketing digital pour optimiser votre présence en ligne avec des solutions sur mesure." />
                <meta property="og:image" content="https://mon-site.com/images/contact-page.jpg" /> {/* Remplace avec une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - Pierre-André Louis | Services de Marketing Digital" />
                <meta name="twitter:description" content="Contactez-nous pour des services de marketing digital sur mesure pour votre entreprise." />
                <meta name="twitter:image" content="https://mon-site.com/images/contact-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "http://schema.org",
                      "@type": "Organization",
                      "name": "Pierre-André Louis Marketing Digital",
                      "url": "https://mon-site.com",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-555-555-5555",
                        "contactType": "Customer Service",
                        "areaServed": "FR",
                        "availableLanguage": ["French", "English"]
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
