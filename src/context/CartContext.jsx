import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { findProduct } from '../data.js';

const KEY = 'ecodar.cart';
// Estado inicial igual ao da tela do Figma: 3x Gerador, 2x Bateria, 1x Camisa GG
const DEFAULT_CART = { gerador: 3, bateria: 2, camisa: 1 };

const CartContext = createContext(null);

function readCart() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw === null ? { ...DEFAULT_CART } : JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readCart);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(cart));
  }, [cart]);

  const change = useCallback((id, delta) => {
    setCart((prev) => {
      const next = { ...prev };
      const qty = Math.min(99, (prev[id] || 0) + delta);
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const clear = useCallback(() => setCart({}), []);

  const items = useMemo(
    () =>
      Object.keys(cart)
        .filter((id) => cart[id] > 0 && findProduct(id))
        .map((id) => ({ ...findProduct(id), qty: cart[id] })),
    [cart]
  );

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const value = {
    items,
    count,
    total,
    add: (id) => change(id, 1),
    change,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
