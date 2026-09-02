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

const ImageGallery = ({ images = [] }) => {
    const [activeImage, setActiveImage] = useState(null);

    const defaultImages = [
        {
            src: g1,
            alt: "Peninsula Big Band performing live",
        },
        {
            src: g2,
            alt: "Peninsula Big Band musicians",
        },
        {
            src: g3,
            alt: "Peninsula Big Band performance",
        },
        {
            src: g4,
            alt: "Peninsula Big Band at an event",
        },
        {
            src: g5,
            alt: "Peninsula Big Band playing live",
        },
        {
            src: g6,
            alt: "Peninsula Big Band musicians performing",
        },
    ];

    const galleryImages = images.length ? images : defaultImages;

    const openImage = (index) => {
        setActiveImage(index);
    };

    const closeImage = () => {
        setActiveImage(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();

        setActiveImage((current) =>
            current === galleryImages.length - 1 ? 0 : current + 1,
        );
    };

    const previousImage = (e) => {
        e.stopPropagation();

        setActiveImage((current) =>
            current === 0 ? galleryImages.length - 1 : current - 1,
        );
    };
    return (
      <section className="gallery" id="gallery">
        <div className="heading">
          <div className="h2-title">
            <span className="divider" />

            <h2>Moments from the Stage</h2>

            <span className="divider" />
          </div>

          <p>
            A glimpse behind the music, from live performances to unforgettable
            nights of swing.
          </p>
        </div>

        {/* ----------------------------------------
          Gallery
      ---------------------------------------- */}

        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              className="gallery__item"
              key={`${image.src}-${index}`}
              onClick={() => openImage(index)}
              aria-label={`View ${image.alt}`}
            >
              <div className="gallery__frame">
                <img src={image.src} alt={image.alt} loading="lazy" />

                <span className="gallery__corner gallery__corner--tl" />
                <span className="gallery__corner gallery__corner--tr" />
                <span className="gallery__corner gallery__corner--bl" />
                <span className="gallery__corner gallery__corner--br" />

                <div className="gallery__overlay">
                  <FontAwesomeIcon icon={faExpand} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ----------------------------------------
          Lightbox
      ---------------------------------------- */}

        {activeImage !== null && (
          <div
            className="gallery__lightbox"
            onClick={closeImage}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              className="gallery__close"
              onClick={closeImage}
              aria-label="Close image"
            >
              ×
            </button>

            <button
              type="button"
              className="gallery__arrow gallery__arrow--left"
              onClick={previousImage}
              aria-label="Previous image"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div
              className="gallery__lightbox-image"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
              />
            </div>

            <button
              type="button"
              className="gallery__arrow gallery__arrow--right"
              onClick={nextImage}
              aria-label="Next image"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </section>
    );
}

export default ImageGallery;