import React, { useState } from "react";
import "./DropDownMenu.css";

const DropDownMenu = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={() => setIsOpen(true)}>
      <button className="dropdown-toggle" onClick={toggle}>
        {value}
      </button>
      <div className="dropdown-menu">
        <ul>
          <li>
            <a href="">Option 1</a>
          </li>
          <li>
            <a href="">Option 2</a>
          </li>
          <li>
            <a href="">Option 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
