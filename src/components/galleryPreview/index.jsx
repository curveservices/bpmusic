import g1 from "../../assets/images/g1.jpg";
import g2 from "../../assets/images/g2.jpg";
import g3 from "../../assets/images/g3.webp";
import g4 from "../../assets/images/g4.jpg";
import g5 from "../../assets/images/g5.webp";
import g6 from "../../assets/images/g6.jpg";
import g7 from "../../assets/images/g7.jpg";
import rep1 from "../../assets/images/rep1.jpg";
import "./index.scss";

const galleryImages = [
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
    alt: "Peninsula Big Band performing",
  },
  {
    src: g4,
    alt: "Live swing performance",
  },
  {
    src: g5,
    alt: "Peninsula Big Band event",
  },
  {
    src: g6,
    alt: "Peninsula Big Band musicians performing",
  },
  {
    src: g7,
    alt: "Peninsula Big Band performing live",
  },
  {
    src: rep1,
    alt: "Peninsula Big Band rehearsal",
  },
];

const GalleryPreview = () => {
  return (
    <section className="gallery-preview">
      <div className="heading">

        <div className="h2-title">
          <span className="divider" />

          <h2>Our Gallery</h2>

          <span className="divider" />
        </div>

        <p>
          A glimpse behind the scenes and highlights from performances across
          Kent and the South East.
        </p>
      </div>

      <div className="gallery-preview__viewport">
        <div className="gallery-preview__track">
          {galleryImages.map((image, index) => (
            <div
              className="gallery-preview__item"
              key={`${image.src}-${index}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />

              <div className="gallery-preview__frame" />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-preview__footer">
        <a href="/gallery" className="gallery-preview__link">
          <span>View Full Gallery</span>
          <span className="gallery-preview__arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default GalleryPreview;
