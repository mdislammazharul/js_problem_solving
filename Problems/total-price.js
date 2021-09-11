const products = [
    { name: 'iphone', price: 100000, quantity: 1 },
    { name: 'jphone', price: 140000, quantity: 2 },
    { name: 'kphone', price: 150000, quantity: 3 },
    { name: 'lphone', price: 120000, quantity: 4 },
    { name: 'mphone', price: 160000, quantity: 1 }
]

let totalPrice = 0;
for (const product of products) {
    totalPrice = product.price * product.quantity + totalPrice;
}
console.log(totalPrice)