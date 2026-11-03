const { calculateTotal } = require('./pricingService');

function getShippingFee(cart) {
  return calculateTotal(cart) >= 50 ? 0 : 10;
}

module.exports = { getShippingFee };