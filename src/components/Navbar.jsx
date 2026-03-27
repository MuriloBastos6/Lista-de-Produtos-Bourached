import React, { useState } from "react";
import Categorias from "./Categorias";

function Navbar(props) {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="nav-bar">
      <div className="div-logo">
        <a href="/">
          <img src="bourached-logo-350.png" alt="Logo da bourached" />
        </a>
      </div>
      <div className="input-div">
        <input type="search" placeholder="Buscar produtos..." />
        <button type="submit" value="Buscar" className="btn-pesquisar">
          Pesquisar
        </button>
      </div>

      {/* Menu Hamburger */}
      <button
        className="btn-menu-hamburger"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu de Categorias */}
      <div className={`menu-categorias ${menuAberto ? "aberto" : ""}`}>
        <ul className="lista-categorias">
          <li className="item-categoria">
            <Categorias />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
