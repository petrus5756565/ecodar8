import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { DELIVERIES, findProduct, fmt } from '../data.js';
import { useCart } from '../context/CartContext.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Delivery() {
  const gerador = findProduct('gerador');
  const { add } = useCart();
  const showToast = useToast();

  return (
    <Layout theme="turquoise">
      <article className="card-green product-hero">
        <span className="thumb thumb--lg">
          <Icon name={gerador.icon} />
        </span>
        <h2>{gerador.name}</h2>
        <p>{gerador.desc}</p>
        <p className="price">{fmt(gerador.price)}</p>
        <button
          className="btn btn--light btn--block"
          onClick={() => {
            add(gerador.id);
            showToast(`${gerador.name} adicionado ao carrinho`);
          }}
        >
          Adicionar ao carrinho
        </button>
      </article>

      <h3 className="section-title">Lista de entregas</h3>
      <ul className="deliveries">
        {DELIVERIES.map((d) => (
          <li key={d.item + d.date}>
            <div className="meta">
              <strong>{d.item}</strong>
              <span>{d.date}</span>
            </div>
            <span className="pill">{d.status}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
