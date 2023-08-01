import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Search({ isActive, toggleActive }) {
  return (
    <div className={`search ${isActive ? "active" : ""}`}>
      <input type="text" className="input" placeholder="Search..." />
      <button className="btn" onClick={toggleActive}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
export default Search;
