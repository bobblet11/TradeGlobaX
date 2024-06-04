import "./MainPage.css";
import DashBoard from "../DashBoard/DashBoard";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import Nav from "../Nav/Nav";

export default function MainPage(props) {
  return (
    <div className="main-page">
      <DashBoard />

      <div className="list-item-container">
        <table>
          <tr>
            <th className="th1">#</th>
            <th className="th2">Coin</th>
            <th className="th3">Price</th>
            <th className="th4">1h</th>
            <th className="th5">24h</th>
            <th className="th6">7d</th>
            <th className="th7">24h Volume</th>
            <th className="th8">Market Cap</th>
            <th className="th9">Change</th>
          </tr>
        </table>
        <ul className="listul">
          {props.APIdata.map((coin, idx) => {
            return (
              <li key={coin.id}>
                <CryptoListItem
                  index={idx}
                  symbol={coin.symbol}
                  name={coin.name}
                />
              </li>
            );
          })}
        </ul>
        <Nav
          direction={"center"}
          buttons={[
            { id: 1, title: "<" },
            { id: 2, title: "1" },
            { id: 3, title: ">" },
          ]}
        />
      </div>
    </div>
  );
}
