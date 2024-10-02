import React, { useState } from "react";
import estilos from "../Carrossel.module.css";

const imagens = [
  "https://via.placeholder.com/300x400.png?text=Livro+1+sem+criatividade",
  "https://via.placeholder.com/300x400.png?text=Livro+2",
  "https://via.placeholder.com/300x400.png?text=Livro+3",
  "https://via.placeholder.com/300x400.png?text=Livro+4",
  "https://via.placeholder.com/300x400.png?text=Livro+5",
];

function Carrossel() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximo = () => {
    setIndiceAtual((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  const anterior = () => {
    setIndiceAtual(
      (prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length
    );
  };

  return (
    <div className={estilos.carrossel}>
      <h1>Melhores da semana</h1>
      <button onClick={anterior} className={estilos.botao}>
        &#10094;
      </button>
      <img
        src={imagens[indiceAtual]}
        alt={`Imagem ${indiceAtual + 1}`}
        className={estilos.imagem}
      />
      <button onClick={proximo} className={estilos.botao}>
        &#10095;
      </button>
    </div>
  );
}

export default Carrossel;
