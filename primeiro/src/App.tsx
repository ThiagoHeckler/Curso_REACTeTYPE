import { useState } from "react";

interface UserProps {
  nome: string;
  cargo: string;
}

export default function App() {
  const [user, setUser] = useState<UserProps>({
    nome: "Visitante",
    cargo: "",
  });

  function handleLogin() {
    setUser({
      nome: "Sujeito Programador",
      cargo: "Programador",
    });
  }
  function handleLogout() {
    setUser({
      nome: "Visitante",
      cargo: "",
    });
  }
  return (
    <div>
      <h1>Conhecendo usaState</h1>
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleLogout}>Fazer logout</button>
      <h4>Olá {user.nome}</h4>
      <strong>{user.cargo}</strong>
    </div>
  );
}
