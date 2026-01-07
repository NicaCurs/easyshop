import { useEffect, useState } from "react";

function Snowflakes() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const flakeArray = Array.from({ length: 30 }, (_, i) => i);
    setFlakes(flakeArray);
  }, []);

  return (
    <>
      {flakes.map((f) => (
        <div
          key={f}
          className="snowflake"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 5 + Math.random() * 5 + "s",
            fontSize: 12 + Math.random() * 18 + "px",
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
}

export default Snowflakes;
