import { NavLink } from 'react-router-dom';
import Icon from './Icon.jsx';
import { useCart } from '../context/CartContext.jsx';

const NAV = [
  { to: '/home', icon: 'home', label: 'Início' },
  { to: '/pesquisa', icon: 'box', label: 'Produtos' },
  { to: '/gerador', icon: 'list', label: 'Entregas' },
  { to: '/sobre', icon: 'heart', label: 'Sobre nós' },
  { to: '/perfil', icon: 'user', label: 'Perfil' },
];

// Moldura do celular com barra superior, conteúdo e barra inferior.
export default function Layout({ theme, children }) {
  const { count } = useCart();

  return (
    <div className={`phone theme-${theme}`}>
      <header className="topbar">
        <NavLink to="/home" className="icon-btn" aria-label="Ir para o início">
          <Icon name="logo" />
        </NavLink>
        <NavLink
          to="/carrinho"
          className="icon-btn"
          aria-label={`Carrinho (${count} ${count === 1 ? 'item' : 'itens'})`}
        >
          <Icon name="cart" />
          {count > 0 && <span className="badge">{count}</span>}
        </NavLink>
      </header>

      <main className="content">{children}</main>

      <nav className="bottombar" aria-label="Navegação principal do aplicativo.">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            aria-label={n.label}
            className={({ isActive }) => `nav-btn${isActive ? ' is-active' : ''}`}
          >
            <Icon name={n.icon} />
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
