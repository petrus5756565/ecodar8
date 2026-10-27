import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { fmt } from '../data.js';
import { useCart } from '../context/CartContext.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Cart() {
  const { items, total, change, clear } = useCart();
  const showToast = useToast();

  function handleCancel() {
    clear();
    showToast('Carrinho esvaziado');
  }

  function handleBuy() {
    clear();
    showToast('Compra realizada! Obrigado por escolher a Ecodar.');
  }

  return (
    <Layout theme="olive">
      <h2 className="page-title">Carrinho</h2>

      <section className="card-green cart-panel">
        {items.length > 0 ? (
          <>
            <ul className="cart-list">
              {items.map((i) => (
                <li className="cart-item" key={i.id}>
                  <div>
                    <strong>
                      {i.qty}x {i.name}
                    </strong>
                    <span>{fmt(i.price * i.qty)}</span>
                  </div>
                  <div className="qty">
                    <button
                      type="button"
                      onClick={() => change(i.id, -1)}
                      aria-label={`Diminuir ${i.name}`}
                    >
                      −
                    </button>
                    <button
                      type="button"
                      onClick={() => change(i.id, 1)}
                      aria-label={`Aumentar ${i.name}`}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="total">
              <span>Total</span>
              <strong>{fmt(total)}</strong>
            </p>
          </>
        ) : (
          <>
            <p className="empty-light">Seu carrinho está vazio.</p>
            <Link to="/pesquisa" className="btn btn--light btn--block">
              Ver produtos do seu carinho de compras
            </Link>
          </>
        )}
      </section>

      {items.length > 0 && (
        <div className="cart-actions">
          <button className="btn btn--danger" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="btn btn--primary" onClick={handleBuy}>
            Comprar
          </button>
        </div>
      )}
    </Layout>
  );
}
