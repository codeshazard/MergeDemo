const TAX_RATE = 0.20;

function calculateTotal(cart) {
  const subtotal = cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return subtotal * (1 + TAX_RATE);
}

module.exports = { calculateTotal };