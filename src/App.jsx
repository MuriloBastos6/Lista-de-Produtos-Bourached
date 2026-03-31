import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Carrosel from "./components/Carrosel.jsx";
import BlocoDados from "./components/BlocoDados.jsx";
import ListaDeProdutos from "./components/ListaDeProdutos.jsx";
import AmendoimPage from "./pages/AmendoimPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArrozPage from "./pages/ArrozPage.jsx";
import ChaPage from "./pages/ChaPage.jsx";
import SucrilhosPage from "./pages/SucrilhosPage.jsx";
import FarinhaPage from "./pages/FarinhaPage.jsx";
import GraosPage from "./pages/GraosPage.jsx";
import PanificacaoPage from "./pages/PanificacaoPage.jsx";
import EspeciariasPage from "./pages/EspeciariasPage.jsx";
import FrutasPage from "./pages/FrutasPage.jsx";
import SementesPage from "./pages/SementesPage.jsx";
import ProdutosNaturaisPage from "./pages/ProdutosNaturaisPage.jsx";
import RefrisPage from "./pages/RefrisPage.jsx";
import OleoPage from "./pages/OleoPage.jsx";
import GomaPage from "./pages/GomaPage.jsx";
import SalgadinhosPage from "./pages/SalgadinhosPage.jsx";
import DocesPage from "./pages/DocesPage.jsx";
import PotesPage from "./pages/PotesPage.jsx";

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
            <Route path="/arroz" element={<ArrozPage />} />
            <Route path="/cha" element={<ChaPage />} />
            <Route path="/sucrilhos" element={<SucrilhosPage />} />
            <Route path="/farinhas" element={<FarinhaPage />} />
            <Route path="/graos" element={<GraosPage />} />
            <Route path="/panificacao" element={<PanificacaoPage />} />
            <Route path="/especiarias" element={<EspeciariasPage />} />
            <Route path="/frutas" element={<FrutasPage />} />
            <Route path="/sementes" element={<SementesPage />} />
            <Route path="/produtosnaturais" element={<ProdutosNaturaisPage />} />
            <Route path="/refris" element={<RefrisPage />} />
            <Route path="/oleo" element={<OleoPage />} />
            <Route path="/goma" element={<GomaPage />} />
            <Route path="/salgadinhos" element={<SalgadinhosPage />} />
            <Route path="/doces" element={<DocesPage />} />
            <Route path="/potes" element={<PotesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
