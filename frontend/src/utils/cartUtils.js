export const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

export const updareCard = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, x) => acc + x.price * x.qty, 0)
  );
  // Calculate shipping price ( If order over $100 then free, else $10 price)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  // Calculate tax price (15%)
  state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));
  // Calculate total price
  state.total = addDecimals(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
  );

  localStorage.setItem("cart", JSON.stringify(state));
};
