import { useState } from "react";

import Confetti from "../components/Confetti";
import HeroGraph from "../components/HeroGraph";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import Motif from "../components/Motif";
import OrangeDots from "../components/OrangeDots";
import HeroImage from "../assets/img/hero-image.png";
import HeroCheck from "../components/HeroCheck";

export default function BaseLayout() {
  const [is_open, toggle_state] = useState(false);

  const openNavMenu = () => {
    toggle_state(!is_open);
  };

  const bar_cords = ["M0,5 30,5", "M0,14 30,14", "M0,23 30,23"];
  const times_cords = ["m 23 0 l -23 30 z", "m 0 0 l 30 30 z"];

  const path1 = is_open ? "m 23 0 l -23 30 z" : "M0,5 30,5";
  const path2 = "M0,14 30,14";
  const path3 = is_open ? "m 0 0 l 30 30 z" : "M0,23 30,23";

  // var tween = KUTE.fromTo(
  //   "#rectangle",
  //   { path: "#rectangle" },
  //   { path: "#star" }
  // ).start();

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

          <a
            href="#"
            className={
              is_open ? "nav-menu menu-icon active" : " menu-icon nav-menu"
            }
            onClick={openNavMenu}
          ></a>
          {/* <a href="#" class="menu-icon"></a> */}
        </nav>

        <div className={is_open ? "nav-menu-links" : "nav-menu-opened"}>
          <a href="#" className="link">
            about us
          </a>
          <a href="#" className="link">
            showcase
          </a>
          <a href="#" className="link">
            academy
          </a>
          <a href="#" className="link">
            work with us
          </a>
        </div>

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
