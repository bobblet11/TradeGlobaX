import HeaderLogo from "./HeaderLogo";
import CeilingBar from "./CeilingBar";
import HeaderBar from "./HeaderBar";
import "./Header.css";

export default function Header() {
  return (
    <div className="bar">
      <h1>header</h1>
      <HeaderLogo />
      <CeilingBar />
      <HeaderBar />
    </div>
  );
}
