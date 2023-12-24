import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <div className="conteudo">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
