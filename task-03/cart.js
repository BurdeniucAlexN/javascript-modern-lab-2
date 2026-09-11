// Modul pentru gestionarea unui coș de cumpărături
// Produs: { id, name, price, quantity }

export function addProduct(cart, product) {
  return [...cart, product];
}

export function removeProduct(cart, id) {
  const exists = cart.find((product) => product.id === id);
  if (!exists) {
    throw new Error(`Produsul cu id ${id} nu există în coș.`);
  }
  return cart.filter((product) => product.id !== id);
}

export function updateQuantity(cart, id, newQuantity) {
  const exists = cart.find((product) => product.id === id);
  if (!exists) {
    throw new Error(`Produsul cu id ${id} nu există în coș.`);
  }
  return cart.map((product) =>
    product.id === id ? { ...product, quantity: newQuantity } : product
  );
}

export function calculateTotal(cart) {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
}
