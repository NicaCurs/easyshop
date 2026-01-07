import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Purchases from "./pages/Purchases";
import Checkout from "./pages/Checkout";
import Snowflakes from "./components/Snowflakes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import music from "./assets/audio/christmas-music.mp3";

function App() {
  const [cart, setCart] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      {/* Snowflakes for all pages */}
      <Snowflakes />

      {/* Hidden audio element */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating music button */}
      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
