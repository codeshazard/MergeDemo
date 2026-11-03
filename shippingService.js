const { calculateTotal } = require('./pricingService');

// Assumes calculateTotal returns raw subtotal before promotional discounts
function getShippingFee(cart) {
  const subtotal = calculateTotal(cart);
  if (subtotal >= 100) return 0;
  if (subtotal >= 50) return 5;
  return 15;
}

module.exports = { getShippingFee };