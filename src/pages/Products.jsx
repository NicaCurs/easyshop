import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products({ cart, setCart }) {
  return (
    <div className="page">
      <h1 className="page-header">🎄 CHRISTMAS SALE!! 🎁</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => setCart([...cart, product])}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
