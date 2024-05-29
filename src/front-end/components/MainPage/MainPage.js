import "./MainPage.css";
import DashBoard from "../DashBoard/DashBoard";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import Nav from "../Nav/Nav";

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
      
      <Nav direction = {"center"} buttons = {[{id:1, title:"<"}, {id:2, title:"1"}, {id:3, title:">"}]}/>
    </div>
  </div>);
}
