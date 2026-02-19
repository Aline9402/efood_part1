import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";

function App() {
    return (
    <Router>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Perfil />} />

        <Route path="*" element={<h1 style={{color: 'black', textAlign: 'center', marginTop: '50px'}}>PÁGINA NÃO ENCONTRADA (Erro na Rota)</h1>} />
        </Routes>
    </Router>
);
}

export default App;
