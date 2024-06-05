import "./CryptoListItem.css";
import { Link } from "react-router-dom";

export default function CryptoListItem(props) {
  return (
    <div className="crypto-list-item-main">
      <div className="index">{props.index}</div>
      <Link to={props.symbol} className="name-link">
        <div className="clickable-container">
          <div className="name">{props.name}</div>
          <div className="symbol">{props.symbol}</div>
        </div>
      </Link>

      <div className="price">
        {`$${(
          Math.round((props.price + Number.EPSILON) * 100) / 100
        ).toLocaleString()}`}
      </div>
      <div className="oneHour">{`$${(
        Math.round((props.oneHour + Number.EPSILON) * 100) / 100
      ).toLocaleString()}`}</div>
      <div className="twentyfourHour">{`$${(
        Math.round((props.twentyFourHour + Number.EPSILON) * 100) / 100
      ).toLocaleString()}`}</div>
      <div className="sevenDay">{`$${(
        Math.round((props.sevenDay + Number.EPSILON) * 100) / 100
      ).toLocaleString()}`}</div>
      <div className="twentyfourVol">{`$${(
        Math.round((props.twentyFourHourVolume + Number.EPSILON) * 100) / 100
      ).toLocaleString()}`}</div>
      <div className="marketCap">{`$${(
        Math.round((props.marketCap + Number.EPSILON) * 100) / 100
      ).toLocaleString()}`}</div>
    </div>
  );
}
