import Confetti from "../components/Confetti";
import HeroGraph from "../components/HeroGraph";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import Motif from "../components/Motif";
import OrangeDots from "../components/OrangeDots";
import HeroImage from "../assets/img/hero-image.png";
import HeroCheck from "../components/HeroCheck";

export default function BaseLayout() {
  return (
    <div>
      <Loader />

      {/* build up 2.0 */}

      <div className="ad-cover">
        <div>
          {/* confetti */}
          <Confetti />
        </div>

        <div>
          <p className="description">
            Build Up 2.0 is happening{" "}
            <a href="#" className="read-more-link">
              Read more
            </a>
          </p>
        </div>
      </div>

      <main className="homepage">
        <nav>
          <div className="brand">
            <Logo fg="#fff" bg="none" big />
          </div>

          <div className="nav-links">
            <a href="#" className="link">
              about us
            </a>
            <a href="#" className="link">
              showcase
            </a>
            <a href="#" className="link">
              academy
            </a>
            <a href="#" className="link work-link">
              <span className="wo-text">wo</span>rk with us
            </a>
          </div>
          
          <span className="nav-menu">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
              <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
              <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
            </svg>
          </span>
        </nav>

        <div className="intro-content">
          <div className="section-one">
            <Motif className="flower" />

            <div className="landing-text">
              <label className="label-landing">
                Build and ship products efficiently with Enyata
              </label>
              <p className="paragraph-landing">
                Leverage Enyata's world-class engineering teams to get your
                ideas and projects up and running quickly.
              </p>

              <button className="hero-btn">Get started</button>
            </div>
          </div>
          <div className="section-two">
            <OrangeDots className="orange-dots" />
            <HeroGraph className="hero-graph" />
            <img className="hero-image" src={HeroImage} />
            <div className="hero-check-card">
              <HeroCheck className="hero-check" />
              <p>Best in class engineering for the finest ideas.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
