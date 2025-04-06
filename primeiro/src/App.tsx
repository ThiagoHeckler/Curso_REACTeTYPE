import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("Olá visitante");

  function handleLogin() {
    setUser("Olá Thiago Emanuel");
  }
  return (
    <div>
      <h1>Conhecendo usaState</h1>
      <button onClick={handleLogin}>Entrar</button>
      <h4>{user}</h4>
    </div>
  );
}
