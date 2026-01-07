import Snowflakes from "../components/Snowflakes";

function Home() {
  return (
    <div className="page home-page">
      <Snowflakes />

      <div className="animated-welcome">
        <h1>🎄 Welcome to EasyShop 🎁</h1>
        <p className="subtext">Shop your favorite gifts this Christmas!</p>
      </div>
    </div>
  );
}

export default Home;
