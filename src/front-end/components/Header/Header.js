import HeaderBar from "./HeaderBar";
import CryptoNewsBar from "./CryptoNewsBar";
import AccountInterfaceBar from "./AccountInterfaceBar";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="bar ceiling">
        <CryptoNewsBar />
        <AccountInterfaceBar />
      </div>

      <HeaderBar />
    </div>
  );
}
