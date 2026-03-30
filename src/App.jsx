import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Carrosel from "./components/Carrosel.jsx";
import BlocoDados from "./components/BlocoDados.jsx";
import ListaDeProdutos from "./components/ListaDeProdutos.jsx";
import AmendoimPage from "./pages/AmendoimPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Main /> 
                  <BlocoDados />
                  <Carrosel />
                  <ListaDeProdutos />
                </div>
              }
            />
            <Route path="/amendoim" element={<AmendoimPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
