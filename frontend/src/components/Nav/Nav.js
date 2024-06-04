import NavDiv from "./NavDiv";
import "./Nav.css";

export default function Nav({buttons, direction}){
    const listItems = buttons.map(buttons =>
        <NavDiv key={buttons.id} value={buttons.title}/>
      );
    return (    
        <div className={direction + " nav"}>
            {listItems}
        </div>
    );
}

Nav.defaultProps = {
    direction:"left"
}