import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Carrosel from "./components/Carrosel.jsx";
import BlocoDados from "./components/BlocoDados.jsx";
import ListaDeProdutos from "./components/ListaDeProdutos.jsx";

function App(props) {
  return (
    <div>
      <Navbar />
      <main>
        <Main />
      <BlocoDados/>
      <Carrosel />
      <ListaDeProdutos />
      </main>
    </div>
  );
}

export default App;
