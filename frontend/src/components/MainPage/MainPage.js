import "./MainPage.css";
import DashBoard from "../DashBoard/DashBoard";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

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
          {props.APIdata.map((coin, idx) => {
            return (
              <tr key={coin.id}>
                {console.log(coin)}
                <td>{idx + 1}</td>
                <td>
                  {" "}
                  <Link
                    to={coin === "" ? "" : coin.symbol}
                    className="name-link"
                  >
                    <div className="clickable-container">
                      <div className="name">{coin === "" ? "" : coin.name}</div>
                      <div className="symbol">
                        {coin === "" ? "" : coin.symbol}
                      </div>
                    </div>
                  </Link>
                </td>
                <td>{`$${(
                  Math.round(
                    (coin === "" ? "" : coin.quote.USD.price + Number.EPSILON) *
                      100
                  ) / 100
                ).toLocaleString()}`}</td>
                <td>
                  {`$${(
                    Math.round(
                      (coin === ""
                        ? ""
                        : coin.quote.USD.percent_change_1h + Number.EPSILON) *
                        100
                    ) / 100
                  ).toLocaleString()}`}
                </td>
                <td>
                  {`$${(
                    Math.round(
                      (coin === ""
                        ? ""
                        : coin.quote.USD.percent_change_24h + Number.EPSILON) *
                        100
                    ) / 100
                  ).toLocaleString()}
                  `}
                </td>
                <td>
                  {`$${(
                    Math.round(
                      (coin === ""
                        ? ""
                        : coin.quote.USD.percent_change_7d + Number.EPSILON) *
                        100
                    ) / 100
                  ).toLocaleString()}
                  `}
                </td>
                <td>
                  {`$${(
                    Math.round(
                      (coin === ""
                        ? ""
                        : coin.quote.USD.volume_24h + Number.EPSILON) * 100
                    ) / 100
                  ).toLocaleString()}
                  `}
                </td>
                <td>
                  {`$${(
                    Math.round(
                      (coin === ""
                        ? ""
                        : coin.quote.USD.market_cap + Number.EPSILON) * 100
                    ) / 100
                  ).toLocaleString()}
                  `}
                </td>
              </tr>
            );
          })}
        </table>

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
