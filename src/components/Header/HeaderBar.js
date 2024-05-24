import "./Header.css";
import Logo from "../Logo/Logo";
export default function HeaderBar() {
  return (
    <div className="bar header-bar">
      <Logo logoImage="logo3.png" />
      <div className="nav"></div>
      <div className="search"></div>
    </div>
  );
}
