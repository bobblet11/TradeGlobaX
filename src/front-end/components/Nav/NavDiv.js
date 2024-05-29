import "./Nav.css"
export default function NavDiv({value}){
    return (
        <div className="navButton">
            <a target="blank" href="blank">
                {value}
            </a>
        </div>
    );
}