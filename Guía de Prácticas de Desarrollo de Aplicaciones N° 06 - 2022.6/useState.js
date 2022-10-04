import { useState } from "react";
//import ReactDOM from "react-dom/client";


function FavoriteCarrera() {
  const [carrera, setCarrera] = useState("red");
  return (
    <div>
      <h1>Escoge tu carrera favorita {carrera}!</h1>
      <button type="button" onClick={() => setCarrera("blue")}>Blue</button>
    </div>
  );
}

export default FavoriteCarrera;