import "./CryptoListItem.css";

export default function CryptoListItem(props){
    return(
      <div className="crypto-list-item-main">
        <h1>{props.symbol} :</h1>
        <h1>{props.name} </h1>  
      </div>
    );
}