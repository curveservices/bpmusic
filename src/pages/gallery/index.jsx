import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import g1 from "../../assets/images/g1.jpg";
import g2 from "../../assets/images/g2.jpg";
import g3 from "../../assets/images/g3.webp";
import g4 from "../../assets/images/g4.jpg";
import g5 from "../../assets/images/g5.webp";
import g6 from "../../assets/images/g6.jpg";

import "./index.scss";
import HeroImage from "../../components/heroImage";
import useScrollState from "../../components/scrollState";
import Metrics from "../../components/metrics";
import ImageGallery from "../../components/imageGallery";

const Gallery = ({ images = [] }) => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };

  return (
    <div className="gallery-page">
      <FadeInSection>
        <HeroImage
          eyebrow="Gallery"
          h1="Step Into the Golden Age of Swing"
          p="We perform at a variety of venues and events across Kent and the south-east.
            Come and experience the timeless sound of a full big band, live."
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
