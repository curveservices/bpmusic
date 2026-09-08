import { Suspense } from "react";
import about from "../../assets/images/about_video.mp4";
import pbb from "../../assets/images/about_PBB.jpg";
import fan from "../../assets/images/bg_5.png";
import sax from "../../assets/images/mainly-sax.jpg";
import Button from "../../components/button";
import useScrollState from "../../components/scrollState";
import LoadingSpinner from "../../components/loadingSpinner";
import LazyVideo from "../../components/LazyVideo";
import Textbox from "../../components/textBox";
import CTA from "../../components/cta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMusic,
  faUsers,
  faStar,
  faHeartMusicCameraBolt,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import AboutCards from "../../components/cards/aboutCards";
import HeroVideo from "../../components/heroVideo";
import Helmet from "../../components/helmet";
const cardItems = [
  {
    icon: faMusic,
    title: "Timless Music",
    description:
      "From swing classics to modern arrangments, we play it with style",
  },
  {
    icon: faUsers,
    title: "Professional Musicians",
    description: "Experienced, passionate and dedicated to excellence",
  },
  {
    icon: faHeartMusicCameraBolt,
    title: "Perfect for any event",
    description: "Concerts, festivals, weddings, functions and more",
  },
  {
    icon: faStar,
    title: "Where to find us",
    description: "Proudly local, performing across Kent and the South east",
  },
  {
    icon: faHeart,
    title: "Our Passion",
    description: "Keeping the spirit of swing alive for generations to come",
  },
];

const About = () => {
  const FadeInSection = ({ children }) => {
    useScrollState();
    return <div className={`fade-in-on-scroll`}>{children}</div>;
  };
  return (
    <>
      <Helmet
        title="About Us | Peninsula Big Band in Kent"
        description="Learn more about the Peninsula Big Band and our journey since 2007."
        keywords="big band, swing, Kent, south east, music, Peninsula Big Band"
        link="https://www.pbmusic.org.uk/about-us"
      schemaMarkup={{
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        name: "Peninsula Big Band",
        description:
          "The Peninsula Big Band is a 15-18 piece traditional swing orchestra based in Kent, performing timeless classics from the great dance bands alongside modern favourites.",
        url: "https://www.pbmusic.org.uk/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kent",
          addressRegion: "South East England",
          addressCountry: "United Kingdom",
        },
        telephone: "+44 7702 056378",
        email: "bprankard@me.com",
      }}
      />
      <div className="about-page">
        <FadeInSection>
          <HeroVideo
            VidSrc={about}
            fallback={<LoadingSpinner />}
            eyebrow="KEEPING THE GOLDEN AGE OF SWING ALIVE"
            h1="The Peninsular Big Band"
            p="The Peinnsula Big Band is a 18-piece ensemble dedicated to the
                timeless music of the swing era. From the iconic sounds of
                Count Basie and Duke Ellington to the classic arrangements of
                Glenn Miller, we bring energy, elegance and excitement to
                every stage."
            button1Text="Upcoming events"
            button1Link="/events"
            button2Text="Book the Band"
            button2Link="/contact-us?band=peninsula-big-band"
            background="var(--navy)"
            color="var(--ivory)"
            href="#the-band"
          />
        </FadeInSection>
        <CTA />
        <FadeInSection>
          <section className="second__section">
            <div className="about__fan" aria-hidden="true">
              <img src={fan} alt="Peninsular big band" />
            </div>
            <div className="second__inner" id="the-band">
              <Textbox
                src={pbb}
                eyebrow="The Spirit of Live Music."
                h1="Our Story"
                p="Since 2007, the Peninsula Big Band has been bringing the timeless energy of the big band era to audiences across Kent and beyond."

                p1="From Glenn Miller and Count Basie to The Beatles, Sade and Michael Jackson, our 18-piece orchestra blends classic swing with modern favourites — creating unforgettable live music for festivals, dinner dances, fundraisers and special events."
                buttonText="Book the band"
                link="/contact-us?band=peninsula-big-band"
              />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="third__section" id="mainly-sax">
            <div className="third__inner">
              <div className="heading">
                <div className="h2-title">
                  <span className="divider" />
                  <h2>Mainly Sax</h2>
                  <span className="divider" />
                </div>
              </div>
              <Textbox
                src={sax}
                eyebrow="A HIGH-ENERGY SAXOPHONE ENSEMBLE"
                h1="An Elegant off-shoot"
                p="Mainly Sax is the dynamic sibling of The Peninsula
                    Big Band."

                p1=" Featuring four saxophonists and a tight rhythm section, this
                    ensemble delivers a fresh, modern take on jazz favourites,
                    funk, Latin and contemporary tunes."
                p2=" Perfect for smaller venues, cocktail parties and corporate
                    events."
                buttonText="BOOK MAINLY SAX"
                link="/contact-us?band=mainly-sax"
                reverse
              />
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <AboutCards mainTitle="Peninsular Big Band" items={cardItems} />
        </FadeInSection>
      </div>
    </>
  );
};

export default About;
