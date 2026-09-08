import { useState } from "react";

import "./index.scss";
import HeroImage from "../../components/heroImage";
import useScrollState from "../../components/scrollState";
import Metrics from "../../components/metrics";
import ImageGallery from "../../components/imageGallery";
import hero from "../../assets/images/gallery.jpg";
import CTA from "../../components/cta";
import Helmet from "../../components/helmet";

const Gallery = ({ images = [] }) => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };

  return (
    <>
      <Helmet
        title="Gallery | Peninsula Big Band in Kent"
        description="Browse our gallery to see the Peninsula Big Band in action at various events and performances."
        keywords="gallery, photos, Peninsula Big Band, big band, swing, Kent, south east, music"
        link="https://www.pbmusic.org.uk/gallery"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Peninsula Big Band Gallery",
          description:
            "Browse our gallery to see the Peninsula Big Band in action at various events and performances.",
          url: "https://www.pbmusic.org.uk/gallery",
          sameAs: [
            "https://www.facebook.com/PeninsulaBigBand",
            "https://www.instagram.com/peninsulabigband/",
            "https://www.youtube.com/@PeninsulaBigBand",
          ],
        }}
      />
      <div className="gallery-page">
        <FadeInSection>
          <HeroImage
            eyebrow="A GLIMPSE BEHIND THE MUSIC"
            h1="THE GOLDEN ERA, BROUGHT TO LIFE"
            p="Step behind the scenes and relive some of our favourite moments, from vibrant live performances and community events to the atmosphere, energy and unforgettable memories shared along the way."
            VidSrc={hero}
            button1Text="About the band"
            button1Link="/about-us"
            button2Link="/contact-us?band=peninsula-big-band"
            button2Text="book the band"
            background="var(--navy)"
            color="var(--ivory)"
            href="#gallery"
          />
        </FadeInSection>
        <Metrics />

        <div className="second__section" id="gallery">
          <FadeInSection>
            <ImageGallery />
          </FadeInSection>
        </div>
        <CTA />
      </div>
    </>
  );
};

export default Gallery;
