import React, { useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import EstanteLivros from "./componentes/EstanteLivros";
import ModalLivro from "./componentes/ModalLivro";
import GaleriaVideos from "./componentes/GaleriaVideos";
import Carrossel from "./componentes/Carrossel";
import Footer from "./componentes/Footer";
// import ProgressBar from './componentes/ProgressBar';
import "./App.css";

function App() {
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [progresso, setProgresso] = useState(50);

  const abrirModal = (livro) => {
    setLivroSelecionado(livro);
  };

  const fecharModal = () => {
    setLivroSelecionado(null);
  };

  const alternarModo = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div className="container">
      <div className={`App ${modoEscuro ? "modo-escuro" : ""}`}>
        <Cabecalho alternarModo={alternarModo} modoEscuro={modoEscuro} />
        <main>
          <Carrossel />
          <EstanteLivros abrirModal={abrirModal} />
          <GaleriaVideos />
        </main>
        {livroSelecionado && (
          <ModalLivro livro={livroSelecionado} fecharModal={fecharModal} />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
