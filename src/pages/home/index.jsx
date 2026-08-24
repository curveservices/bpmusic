import { Suspense } from "react";
import home from "../../assets/images/hero.mp4";
import sax from "../../assets/images/sax.webp";
import about from "../../assets/images/about.webp";
import rep from "../../assets/images/g4.jpg";
import modern from "../../assets/images/rep1.jpg";
import fan from "../../assets/images/bg_5.png";
import artex from "../../assets/images/bg_4.jpg";
import LazyVideo from "../../components/LazyVideo";
import useScrollState from "../../components/scrollState";
import LoadingSpinner from "../../components/loadingSpinner";
import Button from "../../components/button";
import Metrics from "../../components/metrics";
import salute from "../../assets/images/salute-40s.jpg";
import Textbox from "../../components/textBox";
import AboutCards from "../../components/cards/aboutCards";
import Featured from "../../components/featured";

import "./index.scss";
import Events from "../../components/cards/eventCards";
import Repertoire from "../../components/repertoire";
import GalleryPreview from "../../components/galleryPreview";
import CTA from "../../components/cta";

const Home = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <>
      <div className="home-page">
        <FadeInSection>
          <section className="hero">
            {/* Video background */}
            <Suspense fallback={<LoadingSpinner />}>
              <div className="hero__video">
                <LazyVideo
                  alt="Pensinsular Big Band in Kent"
                  src={home}
                  type="video/mp4"
                  className="video"
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
                <span className="eyebrow">The Peninsula Big Band</span>
                <h1>Experience the Golden Age of Swing</h1>

                <div className="divider">
                  <span />
                </div>

                <p>
                  The Peninsula Big Band is a 15-18 piece traditional swing
                  orchestra based in Kent, performing timeless classics from the
                  great dance bands alongside modern favourites.
                </p>

                <div className="btn-container">
                  <Button text="Upcomming events" link="/events" />

                  <Button
                    text="Book the band"
                    link="/contact"
                    background="var(--navy-light)"
                    color="var(--ivory)"
                  />
                </div>
              </div>
            </div>

            {/* Bottom scroll indicator */}
            <a href="#about" className="scroll" aria-label="Scroll to about">
              <span className="scroll-line" />
              <span>Scroll</span>
            </a>
          </section>
        </FadeInSection>

        <section className="metrics">
          <Metrics />
        </section>
        <section className="second-section" id="about">
          <FadeInSection>
            <div className="about__fan" aria-hidden="true">
              <img src={fan} alt="Peninsular big band" />
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="second-inner">
              <Textbox
                src={about}
                eyebrow="about Peninsular Big Band"
                h1="A tradition of swing since 2007"
                p="Formed in Kent, The Peninsula Big Band brings together professional and experienced amateur musicians who share a passion for the timeless sound of the big band erd
                        For over 15 years we have been delighting audiences across the South East with authentic swing classics and modern favourites."
                buttonText="learn more about us"
                link="/about"
              />
              <a href="#sax" className="scroll" aria-label="Scroll to about">
                <span className="scroll-line" />
                <span>Scroll</span>
              </a>
              <Textbox
                src={sax}
                eyebrow="Mainly Sax"
                h1="Another sound from the Peninsula Big Band"
                p="Meet Mainly Sax — a smaller ensemble bringing the distinctive sound of live saxophones to bandstands, community events and venues across the South East."
                buttonText="Discover Mainly Sax"
                link="/mainly-sax"
                reverse={true}
              />
              <a href="#where" className="scroll" aria-label="Scroll to about">
                <span className="scroll-line" />
                <span>Scroll</span>
              </a>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="section" id="where">
              <AboutCards mainTitle="Where We Perform" />
            </div>
          </FadeInSection>
          <Featured
            src={salute}
            eyebrow="FEATURED APPEARANCE"
            featureTitle="SALUTE TO THE '40S"
            featureP="we are proud perform annually at the Historic Dockyard, highlight of our calendar and a much-loved tradition."
            featurebtn="Find out more"
            link="/events"
          />
        </section>
        <section className="third-section">
          <div className="event__image" aria-hidden="true">
            <img className="event__img" src={artex} alt="" />
          </div>
          <FadeInSection>
            <div className="third__inner">
              <Events />
              <Repertoire />
            </div>
          </FadeInSection>
        </section>
        <section className="fourth-section">
          <FadeInSection>
            <GalleryPreview />
          </FadeInSection>
        </section>
        <FadeInSection>
          <CTA />
        </FadeInSection>
      </div>
    </>
  );
};

export default Home;
