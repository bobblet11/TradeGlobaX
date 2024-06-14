import { useParams, useNavigate, Link} from "react-router-dom";
import "./CoinPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAsc } from "@fortawesome/free-solid-svg-icons";
import { faSortDesc } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { registerCharts } from '../../graphs/registerCharts.ts';
import LineChartForCoin from "../../graphs/line/LineChartForCoin"

registerCharts();

export default function CoinPage(props){
    const { coinID } = useParams();
    const page = getCoinPage(coinID);
    
    //api call to my storage server
    //only 1 call! hmmm, but I dont want API call to happen everytime this refreshes,
    //because this page will rerender if the state changes, and if it rerenders, it will run the api call


    




    let id = page===""?"undefined":page.id;
    let name = page===""?"undefined":page.name;
    let symbol = page===""?"undefined":page.symbol;
    let price = page===""?"undefined":  Math.round((+page.quote.USD.price  + Number.EPSILON) * 100) / 100;
    let change_24hr = page===""?"undefined":page.quote.USD.percent_change_24h;
    let colour = page===""?"undefined":change_24hr >= 0 ? "green" : "red";
    let market_cap = page===""?"undefined":page.quote.USD.market_cap;
    let fully_diluted_val = page===""?"undefined":page.quote.USD.fully_diluted_market_cap;
    let twenty_four_hr_vol = page===""?"undefined":page.quote.USD.volume_24h;
    let circulating_supply = page===""?"undefined":page.circulating_supply;
    let total_supply = page===""?"undefined":page.total_supply;
    let max_supply = page===""?"undefined":page.max_supply;
     
    const navigate = useNavigate();
    function getCoinPage(coinID){
        if (props.APIdata === undefined || props.APIdata[0] === ""){
            return "";
        }
        return props.APIdata.find(({symbol}) => coinID === symbol);
    }

    return (
        <div className="coin-page">
            <div className="coin-info-left">
                <div className="section1L">
                    <div>
                        <div className="coin-title-container">
                            <div>
                                <h3><Link to={"/Home"} >Home </Link>{" > " + name + " price"}</h3>
                            </div>
                            <div>
                                <h3>{name} <span>{symbol}</span> <span>{" (" + id + ")" }</span></h3>
                            </div>
                        </div>

                        <div className={"coin-price-container"}>
                            <div className="price black">
                                <h1>$ {price} USD</h1>
                            </div>
                            <div className={"price-change " + colour}>
                                {Math.round((Math.abs(change_24hr) + Number.EPSILON) * 100) / 100}
                                <FontAwesomeIcon
                                    icon={
                                    change_24hr === ""
                                        ? faSpinner
                                        : change_24hr >= 0
                                        ? faSortAsc
                                        : faSortDesc
                                    }
                                    size="2x"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="favourites-button">
                        Add to favourites
                    </button>

                    <div className="coin-data">
                        <table>
                            <tr>
                                <div className="coin-data-row">
                                    <div className="coin-data-row-title"><h3>Market Cap</h3></div>
                                    <div className="coin-data-row-value"><h3>${market_cap}</h3></div>
                                </div>
                            </tr>

                            <tr>
                                <div className="coin-data-row">
                                    <div className="coin-data-row-title"><h3>Fully Diluted Valuation</h3></div>
                                    <div className="coin-data-row-value"><h3>${fully_diluted_val}</h3></div>
                                </div>
                            </tr>

                            <tr>
                                <div className="coin-data-row">
                                    <div className="coin-data-row-title"><h3>24 Hour Trading Vol</h3></div>
                                    <div className="coin-data-row-value"><h3>${twenty_four_hr_vol}</h3></div>
                                </div>
                            </tr>

                            <tr>
                                <div className="coin-data-row">
                                    <div className="coin-data-row-title"><h3>Circulating Supply</h3></div>
                                    <div className="coin-data-row-value"><h3>{circulating_supply}</h3></div>
                                </div>
                            </tr>

                            <tr>
                                <div className="coin-data-row">
                                    <div className="coin-data-row-title"><h3>Total Supply</h3></div>
                                    <div className="coin-data-row-value"><h3>{total_supply}</h3></div>
                                </div>
                            </tr>

                            <tr>
                                <div className="coin-data-row">
                                    <div className="coin-data-row-title"><h3>Max Supply</h3></div>
                                    <div className="coin-data-row-value"><h3>{max_supply}</h3></div>
                                </div>
                            </tr>
                        
                        </table>
                    </div>
                </div>
                <div className="coin-converter">
                    <h2>{symbol} Converter</h2>
                    <table>
                        <tr>
                            <div className="coin-data-row">
                                <div className="coin-data-row-title"><h3>1</h3></div>
                                <div className="coin-data-row-value"><h3>{symbol}</h3></div>
                            </div>
                        </tr>

                        <tr>
                            <div className="coin-data-row">
                                <div className="coin-data-row-title"><h3>{price}</h3></div>
                                <div className="coin-data-row-value"><h3>USD</h3></div>
                            </div>
                        </tr>
                    </table>
                </div>

            </div>
            
            <div className="coin-info-right ">
                
                <div className="coin-graph-container section1R">
                    <LineChartForCoin coinRepresented={name} timeInterval={"Year"}/>
                </div>

                <div className="coin-change">
                    <table>
                        <tr className="equalise">
                            <th>
                                1h
                            </th>

                            <th>
                                24h
                            </th>

                            <th>
                                7d
                            </th>
                            
                            <th>
                                30d
                            </th>

                            
                            <th>
                                90d
                            </th>

                        </tr>

                        <tr className="equalise">
                            <td>
                                <div>
                                    13
                                </div>
                            </td>

                            <td>
                                13
                            </td>

                            <td>
                                13
                            </td>

                            <td>
                                13
                            </td>

                            <td>
                                13
                            </td>
                        </tr>
                    </table>
                </div>
                

                               
                <div className="section2R">
                    <div className="wallet">
                        <div className="account_balance">

                        </div>
                        <div className="coin_purchase_interface">
                            <div></div>
                            <div>
                                <h3>
                                    Action
                                </h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    //make this a component

        );
}