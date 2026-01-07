import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">🎄 EasyShop 🎁</Link>

      {/* Navigation links */}
      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/purchases">Purchases</Link> {/* Added after Cart */}
      </div>
    </nav>
  );
}

export default Navbar;
