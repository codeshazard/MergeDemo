const TAX_RATE = 0.15;

function calculateTotal(cart) {
  return cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

module.exports = { calculateTotal };