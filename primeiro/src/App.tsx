import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");

  const [aluno, setAluno] = useState("");

  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setAluno(input);
    console.log(idade);
  }

  function adicionar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function diminuir() {
    if (contador === 0) {
      return;
    }
    setContador((valorAtual) => valorAtual - 1);
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
      <hr />
      <br />
      <h1>Contator com useState</h1>
      <button onClick={adicionar}>+</button>
      {contador}
      <button onClick={diminuir}>-</button>
    </div>
  );
}
