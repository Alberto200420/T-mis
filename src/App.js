import Error404 from "containers/errors/Error404";
import PublicPage from "containers/pages/PublicRound";
import Home from "containers/pages/Home";
import HowItIsFor from "containers/pages/HowItIsFor";
import ComoFunciona from "containers/pages/HowItWorks";
import TipsForInvesting from "containers/pages/TipsForInvesting";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Matnejar la rutas 
import { MoralisProvider } from "react-moralis";
import PrivatePage from "containers/pages/PrivateRound";
import Dashboard from "containers/pages/Dashboard";

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Router>
        <Routes>
          {/* Home Display */}
          <Route path="/" element={<Home />} />
          {/* ¿Como funciona? */}
          <Route path="/how-it-works" element={<ComoFunciona />} />
          {/* ¿Para quien es T-mis? */}
          <Route path="/how-is-tmis-for" element={<HowItIsFor/>} />
          {/* Consejos para invertir */}
          <Route path="/tips-for-investing" element={<TipsForInvesting/>} />
          {/* Pagina Publica */}
          <Route path="/public" element={<PublicPage/>} />
          { /* Pagina Privada */}
          <Route path="/private" element={<PrivatePage/>} />
          {/* Dashboard */}
          <Route path="/creator" element={<Dashboard/>} />
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </MoralisProvider>
  );
}

export default App;
