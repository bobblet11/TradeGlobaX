import "./Header.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

export default function HeaderBar() {
  const navs = [{title:"Cryptocurrencies", id:0}, {title:"Exchange", id:1},  {title:"NFT", id:2}, {title:"Learn", id:3}, {title:"Product", id:4}];
  console.log(navs);
  return (
    <div className="bar header-bar">
      <Logo logoImage="logo3.png" />
      <Nav buttons={navs} direction={"left"}/>
      <div className="search">
        <SearchBar/>
      </div>
    </div>
  );
}
