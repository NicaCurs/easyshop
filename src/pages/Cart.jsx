import { useState } from "react";

function Cart({ cart, setCart }) {
  // Increase quantity
  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].quantity = (newCart[index].quantity || 1) + 1;
    setCart(newCart);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(
      (newCart[index].quantity || 1) - 1,
      1
    );
    setCart(newCart);
  };

  // Remove product
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="page">
      <h1 className="page-header">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((product, index) => (
            <div className="cart-item" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="cart-image"
              />

              <div className="cart-info">
                <h3>{product.name}</h3>
                <p>Price: ₱{product.price.toLocaleString()}</p>

                {/* Quantity controls */}
                <div className="quantity-controls">
  <button
    onClick={() => decreaseQty(index)}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "28px",
      height: "28px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      cursor: "pointer",
      padding: 0
    }}
  >
    <span style={{ color: "#000", fontSize: "18px", fontWeight: "normal" }}>−</span>
  </button>

  <span style={{ margin: "0 12px", minWidth: "20px", textAlign: "center", fontSize: "1rem" }}>
    {product.quantity || 1}
  </span>

  <button
    onClick={() => increaseQty(index)}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "28px",
      height: "28px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      cursor: "pointer",
      padding: 0
    }}
  >
    <span style={{ color: "#000", fontSize: "18px", fontWeight: "normal" }}>+</span>
  </button>
</div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart footer */}
          <div className="cart-footer">
            <h3>Total: ₱{totalPrice.toLocaleString()}</h3>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
