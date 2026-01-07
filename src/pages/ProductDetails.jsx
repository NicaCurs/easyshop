import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="page">
      {/* Image and name outside the box */}
      <img src={product.image} alt={product.name} className="product-image-top" />
      <h2 className="product-name-top">{product.name}</h2>

      {/* Boxed details */}
      <div className="product-details-box">
        <p className="product-price">
          Price: ₱{product.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
        </p>

        <p className="product-description">{product.description}</p>

        {/* Buttons side by side */}
        <div className="product-buttons">
          <button className="go-back" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
          <button
            className="add-to-cart-btn"
            onClick={() => setCart([...cart, product])}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
