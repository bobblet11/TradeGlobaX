import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function AccountInterfaceBar() {
  return (
    <div className="bar account-interface-bar">
      <ul className="bar-list">
        <li>
          <a href="blank" target="blank">
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </a>
        </li>
        <li>
          <a href="blank" target="blank">
            <FontAwesomeIcon icon={faCog} size="2x" />
          </a>
        </li>
      </ul>
    </div>
  );
}
