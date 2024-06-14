import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function AccountInterfaceBar() {
  return (
    <div className="bar account-interface-bar">
      <ul className="bar-list">
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <FontAwesomeIcon icon={faCog} size="2x" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
