import React from "react";
import ProgressBar from "./ProgressBar";
import estilos from "../ModalLivro.module.css";

function ModalLivro({ livro, fecharModal }) {
  return (
    <div className={estilos.modalFundo} onClick={fecharModal}>
      <div
        className={estilos.modalConteudo}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={estilos.botaoFechar} onClick={fecharModal}>
          X
        </button>
        <h2>{livro.titulo}</h2>
        <p>{livro.descricao}</p>
        <p>rating do livro </p>
        <ProgressBar progresso={livro.avaliacao} /> {/* Passa a porcentagem */}
      </div>
    </div>
  );
}

export default ModalLivro;
