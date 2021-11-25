import sun from "./images/sun.png";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <img
        src={sun}
        className="main-image rotate"
        alt="animated weather image"
      />
      ;
      <div className="search-container">
        <form>
          <input
            type="text"
            placeholder="   Change city"
            className="search-bar"
          />
        </form>
        <div href="#" className="current-link">
          Current location{" "}
          <span role="img" aria-label="pin">
            📍
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
