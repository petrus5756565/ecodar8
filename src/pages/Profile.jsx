import Layout from '../components/Layout.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function Profile() {
  const { user, logout } = useAuth();

  // Ao sair, o user vira null e a rota protegida redireciona para o login.
  return (
    <Layout theme="turquoise">
      <h2 className="page-title">Perfil</h2>

      <section className="card-green profile">
        <span className="avatar" aria-hidden="true">
          {user.name.charAt(0).toUpperCase()}
        </span>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </section>

      <button className="btn btn--danger btn--block" onClick={logout}>
        Sair da conta
      </button>
    </Layout>
  );
}
