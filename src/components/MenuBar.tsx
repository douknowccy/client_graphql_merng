import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e: any, { name }: { name: string }) => {
    setActiveItem(name);
  };

  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={(e) => {
          handleItemClick(e, { name: "home" });
        }}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={(e) => handleItemClick(e, { name: "login" })}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={(e) => handleItemClick(e, { name: "register" })}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );
};
export default MenuBar;
