import React, { useState } from 'react';
import Hero19 from './Hero19';
import Service9 from './Service9';
import Statistic4 from './Statistic4';
import Service8 from './Service8';
import Service8_2 from './Service8_2';
import Service8_3 from './Service8_3';
import Service8_4 from './Service8_4';
import Testimonial5 from './Testimonial5';
import Company3 from './Company3';
import Pricing3 from './Pricing3';
import CTA12 from './CTA12';
import Faq6 from './Faq6';
import Contact4 from './Contact4';
import Blog from './Blog';
import CTA3 from './CTA3';
import Footer3 from './Footer3';
import HomeSeo from '../../seo/HomeSeo';
import Product from './Product';

/**
 * Page d'accueil du site
 */
export default function HomePage() {
  const [voirEtaps, setVoirEtaps] = useState(false);

  return (
    <div>
      {/* SEO pour la page d'accueil */}
      <HomeSeo />

      {/* Sections de la page */}
      <Hero19 />
      <Service9 />
      <Statistic4 />
      <Service8 />
      <Service8_2 setVoirEtaps={setVoirEtaps} voirEtaps={voirEtaps} />
      {voirEtaps && <Service8_3 />}
      {voirEtaps && <Service8_4 setVoirEtaps={setVoirEtaps} voirEtaps={voirEtaps} />}
      <Testimonial5 />
      <Company3 />
      <Product grid={true} />
      <Pricing3 />
      <CTA12 />
      <Faq6 />
      <Blog />
      <CTA3 />
      <Contact4 />
      <Footer3 />
    </div>
  );
}
