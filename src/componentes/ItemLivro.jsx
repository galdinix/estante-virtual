import React from "react";
import estilos from "../ItemLivro.module.css";

function ItemLivro({ livro, abrirModal }) {
  return (
    <div className={estilos.itemLivro} onClick={() => abrirModal(livro)}>
      <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`} />
      <h2>{livro.titulo}</h2>
    </div>
  );
}

export default ItemLivro;
