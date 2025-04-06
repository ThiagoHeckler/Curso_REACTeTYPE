import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");
  const [aluno, setAluno] = useState("");
  function mostrarAluno() {
    setAluno(input);
    console.log(idade);
  }
  return (
    <div>
      <h1>Conhecendo usaState</h1>

      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Digite a sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br />
      <br />
      <button onClick={mostrarAluno}> Mostrar Aluno </button>
      <hr />
      <h3>Bem vindo: {aluno}</h3>
      <h3>A sua idade é {idade}</h3>
    </div>
  );
}
