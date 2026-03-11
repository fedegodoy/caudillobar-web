import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuGeneral from './pages/MenuGeneral';
import MenuMediodia from './pages/MenuMediodia';
import MenuVinos from './pages/MenuVinos';
import MenuTragos from './pages/MenuTragos';
import Reservas from './pages/Reservas';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col pt-20"> {/* pt-20 added for fixed navbar offset */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuGeneral />} />
            <Route path="/mediodia" element={<MenuMediodia />} />
            <Route path="/vinos" element={<MenuVinos />} />
            <Route path="/tragos" element={<MenuTragos />} />
            <Route path="/reservas" element={<Reservas />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
