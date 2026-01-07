function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <>
          <p>Total: ₱{total}</p>
          <button disabled>Place Order</button>
          <p>(Payment not implemented)</p>
        </>
      )}
    </div>
  );
}

export default Checkout;
