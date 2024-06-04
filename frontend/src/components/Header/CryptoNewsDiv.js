import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAsc } from "@fortawesome/free-solid-svg-icons";
import { faSortDesc } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function CryptoNewsDiv({ data, value }) {
  var out = "";
  var colour = "";
  var change_24hr = "";
  if (data === undefined || data[value] === "") {
    console.log("nothing to update");
  } else {
    var symbol = data[value]["symbol"];
    var price = data[value]["quote"]["USD"]["price"];
    change_24hr = data[value]["quote"]["USD"]["percent_change_24h"];
    colour = change_24hr >= 0 ? "green" : "red";
    out = `${symbol}: $${
      Math.round((+price + Number.EPSILON) * 100) / 100
    } USD`;
  }

  return (
    <div className={"crypto-news-component " + colour}>
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
      <span className="black">{out}</span>
    </div>
  );
}
