import React from "react";

function Navbar(props) {
  return (
    <nav className="nav-bar">
      <div className="div-logo">
        <a href="/">
          <img src="bourached-logo-350.png" alt="Logo da bourached" />
        </a>
      </div>
      <div  className="input-div"> 
        <input type="search" placeholder="Buscar produtos..." />
        <button type="submit" value="Buscar" className="btn-pesquisar">
          Pesquisar
        </button>
      </div>
        <a href="/menu">Menu</a>
    </nav>
  );
}

export default Navbar;
