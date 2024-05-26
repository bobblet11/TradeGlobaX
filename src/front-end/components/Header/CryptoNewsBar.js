import "./Header.css";
import CryptoNewsDiv from "./CryptoNewsDiv";
export default function CryptoNewsBar() {
  return (
    <div className="left-bar crypto-news-bar">
      <CryptoNewsDiv value={0}/>
    </div>
  );
}
