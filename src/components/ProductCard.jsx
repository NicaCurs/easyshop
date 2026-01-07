import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      {/* Product image */}
      <img src={product.image} alt={product.name} className="product-image" />

      {/* Product name */}
      <h3 className="product-name">{product.name}</h3>

      {/* Price in Philippine Peso with commas */}
      <p className="product-price">
        ₱{product.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
      </p>

      {/* Buttons */}
      <div className="card-buttons">
        <Link to={`/product/${product.id}`} className="view-details-btn">
          View Details
        </Link>
        <button className="add-to-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
