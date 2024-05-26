import "./Logo.css";

export default function Logo(props) {
  return (
    <div>
      <a href="blank">
        <img
          className="logo3"
          src={"/images/" + props.logoImage}
          alt="Logo of TradeGlobaX"
        ></img>
      </a>
    </div>
  );
}
