import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Accueil from './pages/accueil';
import Connexion from './pages/connexion';
import Utilisateur from './pages/utilisateur';
/*import Test from './pages/test';
<Route exact path="/test" element={<Test />} />*/


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/sign-in" element={<Connexion />} />
        <Route exact path="/user" element={<Utilisateur />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;