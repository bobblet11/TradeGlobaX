import { useParams, useNavigate} from "react-router-dom";

export default function CoinPage(props){
    const navigate = useNavigate();
    function getCoinPage(coinID){
        if (props.APIdata === undefined || props.APIdata[0] === ""){
            return "";
        }
        return props.APIdata.find(({symbol}) => coinID === symbol);
    }

    const { coinID } = useParams();
    const page = getCoinPage(coinID);

    return (
        <div className="coin-page"> 
            <h2>{page===""?"undefined":page.symbol}</h2>
            <h2>{page===""?"undefined":page.name}</h2>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
        );
}