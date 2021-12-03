import Logo from "./Logo";

export default function Loader() {
  return (
    <div className="loader">
      <div className="fake-loader">
        <div className="loader-animate">
          <div className="loader-image">
            <Logo className="logo" bg="white" fg="#481788" big />
          </div>

          <div className="boxes">
            <div className="fake-boxes">
              <div className="box-one"></div>
              <div className="box-two"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
