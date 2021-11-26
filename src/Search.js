import "./Search.css";

export default function Search() {
  return (
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
  );
}
