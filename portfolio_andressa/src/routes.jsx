import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Estudos from './pages/Estudos';
import Certificacoes from './pages/Certificacoes';
import Contatos from './pages/Contatos';


function AppRoutes(){
return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>  </Route>
                <Route path="/SobreMim" element={<SobreMim/>}>  </Route>
                <Route path="/Estudos" element={<Estudos/>}>  </Route>
                <Route path="Certificacoes" element={<Certificacoes/>}>  </Route>
                <Route path="Contatos" element={<Contatos/>}>  </Route>
            </Routes>
        </BrowserRouter>
);
}

export default AppRoutes;