import "./CryptoListItem.css";

export default function CryptoListItem(props) {
  return (
    <div className="crypto-list-item-main">
      <div className="index">{props.index}</div>
      <div className="symbol">{props.symbol} :</div>
      <div className="name">{props.name} </div>
    </div>
  );
}
