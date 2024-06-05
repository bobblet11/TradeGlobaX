import "./CryptoNewsFooter.css";
import Card from "../Card/Card"


export default function CryptoNewsFooter({title}) {
  return (
  <div className="main-crypto-footer"> 
  <h1 className="title">{title}</h1>
        <div className="main-crypto-footer-cards">
            <Card title = {"TITLE"} image={"/images/logo3.png"} author={"BEN GLOVER"} date={"Today"}/>
            <Card title = {"TITLE"} image={"/images/logo3.png"} author={"BEN GLOVER"} date={"Today"}/>
            <Card title = {"TITLE"} image={"/images/logo3.png"} author={"BEN GLOVER"} date={"Today"}/>
            <Card title = {"TITLE"} image={"/images/logo3.png"} author={"BEN GLOVER"} date={"Today"}/>
        </div>
    <hr/>
  </div>);
}
