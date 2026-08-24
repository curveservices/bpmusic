import { Link } from "react-router-dom";
import fan from "../../assets/images/bg_5.png";

import "./index.scss";

const NotFound = () => {
  return (
    <main className="not-found">


      <div className="not-found__frame">
        <div className="not-found__content">
          <span className="not-found__eyebrow">The Peninsula Big Band</span>

          <div className="not-found__divider">
            <span />
            <i>◇</i>
            <span />
          </div>

          <span className="not-found__number">404</span>

          <h1>
            Lost in the
            <em> rhythm?</em>
          </h1>

          <p>
            It looks like this page has taken a little detour. Let's get you
            back to the music.
          </p>

          <Link to="/" className="not-found__button">
            Return Home
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
