import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";

import { db } from "../../../firebase.config.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../loadingSpinner/index.jsx";

import "./index.scss";

const PAGE_SIZE = 9;

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const [activeImage, setActiveImage] = useState(null);

  // ==========================================
  // FETCH GALLERY
  // ==========================================

  const fetchImages = async (loadMore = false) => {
    try {
      if (loadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const galleryRef = collection(db, "gallery");

      let galleryQuery;

      if (loadMore && lastDoc) {
        galleryQuery = query(
          galleryRef,
          orderBy("createdAt", "desc"),
          startAfter(lastDoc),
          limit(PAGE_SIZE),
        );
      } else {
        galleryQuery = query(
          galleryRef,
          orderBy("createdAt", "desc"),
          limit(PAGE_SIZE),
        );
      }

      const snapshot = await getDocs(galleryQuery);

      const newImages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setImages((currentImages) =>
        loadMore ? [...currentImages, ...newImages] : newImages,
      );

      if (snapshot.docs.length > 0) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      }

      setHasMore(snapshot.docs.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error loading gallery:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    fetchImages();
  }, []);

  // ==========================================
  // LOAD MORE
  // ==========================================

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchImages(true);
    }
  };

  // ==========================================
  // LIGHTBOX
  // ==========================================

  const openLightbox = (id) => {
    setActiveImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = "";
  };

  // ==========================================
  // NEXT / PREVIOUS
  // ==========================================

  const activeIndex = images.findIndex((image) => image.id === activeImage);

  const nextImage = (e) => {
    e.stopPropagation();

    setActiveImage(
      images[activeIndex === images.length - 1 ? 0 : activeIndex + 1].id,
    );
  };

  const previousImage = (e) => {
    e.stopPropagation();

    setActiveImage(
      images[activeIndex === 0 ? images.length - 1 : activeIndex - 1].id,
    );
  };

  // ==========================================
  // KEYBOARD CONTROLS
  // ==========================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activeImage === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage(event);
      }

      if (event.key === "ArrowLeft") {
        previousImage(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, activeIndex]);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <section className="image-gallery">
        <div className="image-gallery__loading">
          <span>Loading gallery</span>
          <span><LoadingSpinner /></span>
        </div>
      </section>
    );
  }

  // ==========================================
  // ACTIVE LIGHTBOX IMAGE
  // ==========================================

  const selectedImage = images.find((image) => image.id === activeImage);

  return (
    <section className="image-gallery">
      {/* ======================================
          HEADING
      ====================================== */}

      <div className="heading">
        <div className="h2-title">
          <span className="divider" />

          <h2>Moments from the Stage</h2>

          <span className="divider" />
        </div>

        <p>
          From the golden age of swing to today's live performances, take a look
          behind the music.
        </p>
      </div>

      {/* ======================================
          GALLERY GRID
      ====================================== */}

      <div className="image-gallery__grid">
        {images.map((image) => (
          <button
            type="button"
            className="image-gallery__item"
            key={image.id}
            onClick={() => openLightbox(image.id)}
            aria-label={`View ${image.alt || "gallery image"}`}
          >
            <div className="image-gallery__frame">
              <img
                src={image.thumbnailUrl || image.imageUrl}
                alt={image.alt || "Peninsula Big Band"}
                loading="lazy"
              />

              {/* Inner Art Deco frame */}

              <span className="frame-line frame-line--top" />
              <span className="frame-line frame-line--bottom" />
              <span className="frame-line frame-line--left" />
              <span className="frame-line frame-line--right" />

              {/* Corners */}

              <span className="corner corner--tl" />
              <span className="corner corner--tr" />
              <span className="corner corner--bl" />
              <span className="corner corner--br" />

              {/* Hover */}

              <span className="image-gallery__overlay">
                <FontAwesomeIcon icon={faExpand} />
              </span>
            </div>

            {image.caption && (
              <span className="image-gallery__caption">{image.caption}</span>
            )}
          </button>
        ))}
      </div>

      {/* ======================================
          LOAD MORE
      ====================================== */}

      {hasMore && (
        <div className="image-gallery__load">
          <button
            type="button"
            className="image-gallery__load-button"
            onClick={handleLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "View More"}
          </button>
        </div>
      )}

      {/* ======================================
          LIGHTBOX
      ====================================== */}

      {selectedImage && (
        <div className="image-gallery__lightbox" onClick={closeLightbox}>
          {/* Close */}

          <button
            type="button"
            className="image-gallery__close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          {/* Previous */}

          <button
            type="button"
            className="image-gallery__arrow image-gallery__arrow--left"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Image */}

          <div
            className="image-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-gallery__lightbox-frame">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.alt || "Peninsula Big Band"}
              />
            </div>

            {selectedImage.caption && <p>{selectedImage.caption}</p>}
          </div>

          {/* Next */}

          <button
            type="button"
            className="image-gallery__arrow image-gallery__arrow--right"
            onClick={nextImage}
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
