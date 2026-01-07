import React from "react";

function Purchases() {
  // Dummy purchases data
  const purchases = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2500,
    quantity: 1,
    image: "/images/wireless-headphones.jpg", // note leading slash
    date: "2026-05-07",
  },
  {
    id: 2,
    name: "Christmas Mug",
    price: 499,
    quantity: 2,
    image: "/images/christmas-mug.jpg",
    date: "2026-12-17",
  },
];


  return (
    <div className="page">
      <h1 className="page-header">🎁 Your Purchases</h1>

      {purchases.length === 0 ? (
        <p>You haven't purchased anything yet!</p>
      ) : (
        <div className="cart-items">
          {purchases.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Price: ₱{item.price.toLocaleString()}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Date: {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Purchases;
