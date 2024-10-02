import React from "react";
import ItemLivro from "./ItemLivro";
import estilos from "../EstanteLivros.module.css";
import { FaBookOpen } from "react-icons/fa6";

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    capa: "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg",
    avaliacao: 95,
  },
  {
    id: 2,
    titulo: "Harry Potter e a pedra filosofal",
    capa: "https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg",
    avaliacao: 85,
  },
  {
    id: 3,
    titulo: "1984",
    capa: "https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg",
    avaliacao: 55,
  },
  {
    id: 4,
    titulo: "Dom Quixote",
    capa: "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg",
    avaliacao: 78,
  },
  {
    id: 5,
    titulo: "O Hobbit",
    capa: "https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UF1000,1000_QL80_.jpg",
    avaliacao: 35,
  },
  {
    id: 6,
    titulo: "A Revolução dos Bichos",
    capa: "https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg",
    avaliacao: 100,
  },
];

function EstanteLivros({ abrirModal }) {
  return (
    <div>
      <div className={estilos.titulo}>
        <h1>
          Livros <FaBookOpen />
        </h1>
      </div>
      <section className={estilos.estanteLivros}>
        {livros.map((livro) => (
          <ItemLivro key={livro.id} livro={livro} abrirModal={abrirModal} />
        ))}
      </section>
    </div>
  );
}

export default EstanteLivros;
