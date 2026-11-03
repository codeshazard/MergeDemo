const TAX_RATE = 0.18;

function calculateSubtotal(cart) {
  return cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function calculateTotal(cart) {
  return calculateSubtotal(cart) * 0.90;
}

module.exports = { calculateTotal, calculateSubtotal };