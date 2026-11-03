const { calculateSubtotal } = require('./pricingService');

function getShippingFee(cart) {
  const subtotal = calculateSubtotal(cart);
  if (subtotal >= 100) return 0;
  if (subtotal >= 50) return 5;
  return 15;
}

module.exports = { getShippingFee };