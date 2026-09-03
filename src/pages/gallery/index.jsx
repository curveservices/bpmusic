import { useState } from "react";

import "./index.scss";
import HeroImage from "../../components/heroImage";
import useScrollState from "../../components/scrollState";
import Metrics from "../../components/metrics";
import ImageGallery from "../../components/imageGallery";
import hero from "../../assets/images/gallery.jpg";

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
          p="Take a look at some of our favourite photos from performances, events and behind the scenes."
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
      <FadeInSection>
        <div className="second__section">
          <ImageGallery />
        </div>
      </FadeInSection>
    </div>
  );
};

export default Gallery;
