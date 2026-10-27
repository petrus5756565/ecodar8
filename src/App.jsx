import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Cart from './pages/Cart.jsx';
import Delivery from './pages/Delivery.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

// Só deixa entrar nas telas internas se houver usuário logado.
function RequireAuth() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/home" replace /> : <Login />} />

      <Route element={<RequireAuth />}>
        <Route path="/home" element={<Home />} />
        <Route path="/pesquisa" element={<Search />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/gerador" element={<Delivery />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/perfil" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to={user ? '/home' : '/login'} replace />} />
    </Routes>
  );
}
