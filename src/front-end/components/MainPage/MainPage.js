import "./MainPage.css";
import DashBoard from "../DashBoard/DashBoard";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import Nav from "../Nav/Nav";

export default function MainPage(props) {
  return (

  <div className="main-page"> 
  
    <DashBoard/>
    
    <div className="list-item-container">
    <ul className="list-item-container">
      {props.APIdata.map(coin => {
        return (
          <li key={coin.id}>
            <CryptoListItem symbol={coin.symbol} name={coin.name}/>
          </li>
        )
      })}
    </ul>
    <Nav direction = {"center"} buttons = {[{id:1, title:"<"}, {id:2, title:"1"}, {id:3, title:">"}]}/>
    </div>
  </div>
  );
}
