// Dados do Ecodar. Edite aqui para trocar produtos, preços e entregas.

export const PRODUCTS = [
  {
    id: 'gerador',
    name: 'Gerador',
    icon: 'bolt',
    price: 1890.0,
    short: 'Energia de reserva para casa',
    desc: 'Gerador silencioso de 5 kVA com motor de baixo consumo, pensado para quedas de energia em casa ou em pequenos negócios.',
  },
  {
    id: 'bateria',
    name: 'Bateria',
    icon: 'battery',
    price: 459.9,
    short: 'Armazenamento de energia',
    desc: 'Bateria de ciclo profundo 12V 150Ah, compatível com painéis solares e sistemas eólicos.',
  },
  {
    id: 'painel',
    name: 'Painel solar',
    icon: 'sun',
    price: 899.0,
    short: 'Geração limpa de energia',
    desc: 'Painel fotovoltaico de 450W com alta eficiência e moldura de alumínio resistente.',
  },
  {
    id: 'camisa',
    name: 'Camisa GG',
    icon: 'shirt',
    price: 79.9,
    short: 'Algodão orgânico',
    desc: 'Camisa da linha Ecodar, em algodão orgânico, tamanho GG.',
  },
];

export const DELIVERIES = [
  { item: 'Gerador', date: '24/10/2026', status: 'Em trânsito' },
  { item: 'Bateria', date: '22/10/2026', status: 'Entregue' },
  { item: 'Painel solar', date: '28/10/2026', status: 'Preparando' },
];

export const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const fmt = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
