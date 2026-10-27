import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { findProduct, fmt } from '../data.js';

export default function Home() {
  const gerador = findProduct('gerador');

  return (
    <Layout theme="olive">
      <h2 className="page-title">Home</h2>
      <p className="section-kicker">Bem vindo ao nosso aplicativo</p>
      <p className="lead">Energia limpa para a sua casa e para o seu negócio.</p>

      <div className="stack">
        <article className="card-green feature">
          <span className="thumb thumb--lg">
            <Icon name="bolt" />
          </span>
          <h3>{gerador.name}</h3>
          <p className="price">{fmt(gerador.price)}</p>
          <Link to="/gerador" className="btn btn--light btn--block">
            Ver detalhes
          </Link>
        </article>

        <Link to="/pesquisa" className="btn btn--primary btn--block">
          Explorar produtos
        </Link>
      </div>
    </Layout>
  );
}
