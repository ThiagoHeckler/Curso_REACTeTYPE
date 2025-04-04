import { Header } from "./components/header";
import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";
export default function App() {
  return (
    <div>
      <Header />
      <h1>Meu Projeto</h1>
      <Aluno nome="Matheus" idade={19} />
      <Aluno nome="Thiago Emanuel" idade={20} />
      <Aluno nome="Lucas" idade={21} />
      <Footer />
    </div>
  );
}
