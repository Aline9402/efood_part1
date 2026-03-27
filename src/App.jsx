import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import { GlobalStyle } from "./styles/global";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";


import Cart from "./Components/Cart";

function App() {
    return (

        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restaurante/:id" element={<Perfil />} />
                    <Route path="*" element={<h1 style={{color: 'black', textAlign: 'center', marginTop: '50px'}}>PÁGINA NÃO ENCONTRADA (Erro na Rota)</h1>} />
                </Routes>

                <Cart />
            </Router>
        </Provider>
    );
}

export default App;