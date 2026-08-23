import { useState, useEffect } from "react";
import NavBar from "../nav";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
// import Footer from "../footer";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Hide footer on specific routes
    const timeout = setTimeout(() => {
      setShowFooter(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar />
      <main className="app">
        <Outlet />
      </main>
      {showButton && (
        <>
          <button
            className="back-to-top"
            name="back-to-top"
            aria-label="back to top"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        </>
      )}
      {/* <Footer isVisible={showFooter} /> */}
      <ScrollRestoration />
    </>
  );
};

export default Layout;
