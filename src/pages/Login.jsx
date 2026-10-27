import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const mail = email.trim();

    if (!EMAIL_RE.test(mail)) {
      setError('Informe um email válido.');
      return;
    }
    if (senha.length < 4) {
      setError('A senha precisa ter pelo menos 4 caracteres.');
      return;
    }

    setError('');
    login(mail);
    navigate('/home', { replace: true });
  }

  return (
    <div className="phone theme-login">
      <div className="login-art" aria-hidden="true" />
      <section className="login">
        <h1 className="brand">Ecodar</h1>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="field">
            <span>Senha</span>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="mínimo 4 caracteres"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>

          <p className="form-error" role="alert">{error}</p>
          <button className="btn btn--primary btn--block" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
