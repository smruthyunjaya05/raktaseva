import React from "react";
import bimg from "./blood.jpg"

export default function Header({ menuItems, activeMenuItem, onMenuItemClick }) {
  return (
  
    <div className="Header">
      <img src={bimg} alt="business_image" height={100} width={200}/>
      
      <menu>
        {menuItems.map((menuItem) => (
          <li
            key={menuItem}
            className={activeMenuItem === menuItem ? "active" : ""}
            onClick={() => onMenuItemClick(menuItem)}
          >
            {menuItem}
          </li>
        ))}
      </menu>
    </div>
  );
}
