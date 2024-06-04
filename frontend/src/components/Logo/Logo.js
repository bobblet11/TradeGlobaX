import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <div>
      <Link to="/">
        <img
          className="logo3"
          src={"/images/" + props.logoImage}
          alt="Logo of TradeGlobaX"
        ></img>
      </Link>
    </div>
  );
}
