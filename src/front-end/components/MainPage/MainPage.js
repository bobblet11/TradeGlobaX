import "./MainPage.css";
import DashBoard from "../DashBoard/DashBoard";
import CryptoListItem from "../CryptoListItem/CryptoListItem";

export default function MainPage() {
  return (
  <div className="main-page"> 
    <DashBoard/>

    <div className="list-item-container">
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
      <CryptoListItem/>
    </div>
    
  </div>);
}
