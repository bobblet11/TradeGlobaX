import "./Header.css";
import CryptoNewsDiv from "./CryptoNewsDiv";

export default function CryptoNewsBar(props) {

  return (
    <div className="left-bar crypto-news-bar">
        <CryptoNewsDiv value={0} data={props.APIdata}/>
        <CryptoNewsDiv value={1} data={props.APIdata}/>
        <CryptoNewsDiv value={2} data={props.APIdata}/>
        <CryptoNewsDiv value={3} data={props.APIdata}/>
        <CryptoNewsDiv value={4} data={props.APIdata}/>
    </div>
  );
}
