import NavDiv from "./NavDiv";
import "./Nav.css";

export default function Nav({buttons}){
    const listItems = buttons.map(buttons =>
        <NavDiv key={buttons.id} value={buttons.title}/>
      );
    return (    
        <div className="nav">
            {listItems}
        </div>
    );
}