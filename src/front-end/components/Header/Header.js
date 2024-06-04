import HeaderBar from "./HeaderBar";
import CryptoNewsBar from "./CryptoNewsBar";
import AccountInterfaceBar from "./AccountInterfaceBar";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div className="bar ceiling">
        <CryptoNewsBar APIdata={props.APIdata}/>
        <AccountInterfaceBar />
      </div>

      <HeaderBar />
    </div>
  );
}
