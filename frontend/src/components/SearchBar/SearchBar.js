import "./SearchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar(){
    return (
        <div className="bar">
             <FontAwesomeIcon icon={faSearch} size="1x" />
            <input className="search-bar" placeholder="Search"/>
        </div>
    );
}