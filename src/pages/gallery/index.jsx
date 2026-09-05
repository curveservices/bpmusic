import { useState } from "react";

import "./index.scss";
import HeroImage from "../../components/heroImage";
import useScrollState from "../../components/scrollState";
import Metrics from "../../components/metrics";
import ImageGallery from "../../components/imageGallery";
import hero from "../../assets/images/gallery.jpg";
import CTA from "../../components/cta";

const Gallery = ({ images = [] }) => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };

  return (
    <div className="gallery-page">
      <FadeInSection>
        <HeroImage
          eyebrow="A GLIMPSE BEHIND THE MUSIC"
          h1="THE GOLDEN ERA, BROUGHT TO LIFE"
          p="Step behind the scenes and relive some of our favourite moments, from vibrant live performances and community events to the atmosphere, energy and unforgettable memories shared along the way."
          VidSrc={hero}
          button1Text="About the band"
          button1Link="/about-us"
          button2Link="/book-us"
          button2Text="book the band"
          background="var(--navy)"
          color="var(--ivory)"
        />
      </FadeInSection>
      <Metrics />

      <div className="second__section">
        <FadeInSection>
          <ImageGallery />
        </FadeInSection>
      </div>
      <CTA />
    </div>
  );
};

export default Gallery;
