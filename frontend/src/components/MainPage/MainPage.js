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
          </tr>
        </table>
        <ul className="listul">
          {props.APIdata.map((coin, idx) => {
            return (
              <li key={coin.id}>
                {console.log(coin)}
                <CryptoListItem
                  index={idx + 1}
                  symbol={coin === "" ? "" : coin.symbol}
                  name={coin === "" ? "" : coin.name}
                  price={coin === "" ? "" : coin.quote.USD.price}
                  oneHour={coin === "" ? "" : coin.quote.USD.percent_change_1h}
                  twentyFourHour={
                    coin === "" ? "" : coin.quote.USD.percent_change_24h
                  }
                  sevenDay={coin === "" ? "" : coin.quote.USD.percent_change_7d}
                  twentyFourHourVolume={
                    coin === "" ? "" : coin.quote.USD.volume_24h
                  }
                  marketCap={coin === "" ? "" : coin.quote.USD.market_cap}
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
