import { useState } from 'react';
import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { PRODUCTS, fmt } from '../data.js';
import { useCart } from '../context/CartContext.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Search() {
  const [query, setQuery] = useState('');
  const { add } = useCart();
  const showToast = useToast();

  const q = query.trim().toLowerCase();
  const list = PRODUCTS.filter(
    (p) => !q || (p.name + ' ' + p.short).toLowerCase().includes(q)
  );

  function handleAdd(product) {
    add(product.id);
    showToast(`${product.name} adicionado ao carrinho`);
  }

  return (
    <Layout theme="olive">
      <label className="search">
        <Icon name="search" />
        <span className="visually-hidden">Pesquisar produtos</span>
        <input
          type="search"
          placeholder="Pesquisar"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <div className="list">
        {list.length === 0 && (
          <p className="empty">Nenhum produto encontrado para “{query.trim()}”.</p>
        )}

        {list.map((p) => (
          <article className="product" key={p.id}>
            <span className="thumb">
              <Icon name={p.icon} />
            </span>
            <div>
              <h3>{p.name}</h3>
              <p>{p.short}</p>
              <strong>{fmt(p.price)}</strong>
            </div>
            <button
              className="btn btn--primary btn--small"
              onClick={() => handleAdd(p)}
              aria-label={`Adicionar ${p.name} ao carrinho`}
            >
              Adicionar
            </button>
          </article>
        ))}
      </div>
    </Layout>
  );
}
