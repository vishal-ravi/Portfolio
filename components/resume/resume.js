import React from 'react';
import { MENULINKS } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {MENULINKS.map((link) => (
          link.link ? (
            <li key={link.ref}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ) : (
            <li key={link.ref}>
              <a href={`#${link.ref}`}>
                {link.name}
              </a>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
