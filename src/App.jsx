import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Carrosel from "./components/Carrosel.jsx";
import BlocoDados from "./components/BlocoDados.jsx";
import ListaDeProdutos from "./components/ListaDeProdutos.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoriaPage from "./pages/CategoriaPage.jsx";
import BuscaPage from "./pages/BuscaPage.jsx";

function App() {
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
            <Route path="/busca" element={<BuscaPage />} />
            <Route path="/:slug" element={<CategoriaPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
