import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key= {`navlink-${index}`} href={`#{link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
