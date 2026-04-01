import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Categorias from "./Categorias";
import BuscaProdutos from "./BuscaProdutos";

function Navbar(props) {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  useEffect(() => {
    fecharMenu();
  }, [location.pathname]);

  return (
    <nav className="nav-bar">
      <div className="div-logo">
        <Link to="/" onClick={fecharMenu}>
          <img src="logoBourached.png" alt="Logo da bourached" />
        </Link>
      </div>
      <div>
        <h1>Lista de Produtos</h1>
      </div>
      <div className="input-div">
        <BuscaProdutos />
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
            <Categorias onSelectCategory={fecharMenu} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
