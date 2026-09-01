import { Suspense } from "react";
import LazyVideo from "../LazyVideo";
import Button from "../button";
import LoadingSpinner from "../loadingSpinner";

import fan from "../../assets/images/bg_5.png";

import "./index.scss";

const HeroVideo = ({
  VidSrc,
  eyebrow,
  h1,
  p,
  button1Link,
  button1Text,
  button2Link,
  button2Text,
  background,
  color,
  about,
  href
}) => {
  return (
    <section className="hero">
      {/* Video background */}
      <Suspense fallback={<LoadingSpinner />}>
        <div className="hero__video">
          <LazyVideo
            alt="Pensinsular Big Band in Kent"
            src={VidSrc}
            type="video/mp4"
            className="about-video"
          />
        </div>
      </Suspense>
      <div className="hero__video-overlay" />
      {/* Art Deco fan */}
      <div className="hero__fan" aria-hidden="true">
        <img src={fan} alt="Peninsular big band" />
      </div>
      <div className="hero__content">
        <div className="hero__inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{h1}</h1>

          <div className="divider">
            <span />
          </div>

          <p>{p}</p>

          <div className="btn-container">
            <Button text={button1Text} link={button1Link} />

            <Button
              text={button2Text}
              link={button2Link}
              background={background}
              color={color}
            />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <a href={href} className="scroll" aria-label="Scroll to about">
        <span className="scroll-line" />
        <span>Scroll</span>
      </a>
    </section>
  );
};

export default HeroVideo;
