import CryptoNewsBar from "./CryptoNewsBar";
import AccountInterfaceBar from "./AccountInterfaceBar";
import "./Header.css";

export default function CeilingBar() {
  return (
    <div className="bar">
      <h1>ceiling bar</h1>
      <CryptoNewsBar />
      <AccountInterfaceBar />
    </div>
  );
}
