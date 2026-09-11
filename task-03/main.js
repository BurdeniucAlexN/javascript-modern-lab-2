import { addProduct, removeProduct, updateQuantity, calculateTotal } from "./cart.js";

let cart = [];

cart = addProduct(cart, { id: 1, name: "Căști wireless", price: 450, quantity: 1 });
cart = addProduct(cart, { id: 2, name: "Mouse gaming", price: 320, quantity: 2 });
cart = addProduct(cart, { id: 3, name: "Încărcător rapid", price: 180, quantity: 1 });

console.log("--- Coș inițial ---");
cart.forEach(({ name, price, quantity }) => {
  console.log(`${name}: ${quantity} x ${price} MDL`);
});

console.log(`\nTotal: ${calculateTotal(cart)} MDL`);

console.log("\n--- Modificare cantitate (Mouse gaming -> 3 buc) ---");
cart = updateQuantity(cart, 2, 3);
console.log(`Total nou: ${calculateTotal(cart)} MDL`);

console.log("\n--- Ștergere produs (id 3) ---");
cart = removeProduct(cart, 3);
console.log(`Total după ștergere: ${calculateTotal(cart)} MDL`);

console.log("\n--- Încercare ștergere produs inexistent ---");
try {
  cart = removeProduct(cart, 99);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}
