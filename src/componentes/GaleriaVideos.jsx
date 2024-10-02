import React from "react";
import estilos from "../GaleriaVideos.module.css";
import { BiSolidVideos } from "react-icons/bi";

const videos = [
  {
    id: 1,
    titulo: "Resenha de O Senhor dos Anéis (a sociedade do anel)",
    url: "https://www.youtube.com/embed/CMKlSxItEoA?si=sVrkBqahPLZaV1uC",
  },
  {
    id: 2,
    titulo: "Análise de Harry Potter e pedra filosofal",
    url: "https://www.youtube.com/embed/VvOc1RzWnaY?si=0_dOx9syERX0mL3e",
  },
  {
    id: 3,
    titulo: "1984 - Explicação Completa",
    url: "https://www.youtube.com/embed/cJjEMy8ZQWU?si=125x6eXpcUl54oIB",
  },
  {
    id: 4,
    titulo: "Dom Quixote - História e Contexto",
    url: "https://www.youtube.com/embed/4CcjLDxjiQk?si=DomF3NV1RdI8pvHI",
  },
  {
    id: 5,
    titulo: "O Hobbit - Análise",
    url: "https://www.youtube.com/embed/GI4WmgZC1ZA?si=3t5LBjDjQS-ZcE_s",
  },
  {
    id: 6,
    titulo: "A Revolução dos Bichos - Comentário",
    url: "https://www.youtube.com/embed/9LT5MszBAE0?si=3gdP5SuzdWUTSmyp",
  },
];

function GaleriaVideos() {
  return (
    <div>
      <h1 className={estilos.titulo}>
        Vídeos <BiSolidVideos />{" "}
      </h1>
      <section className={estilos.galeriaVideos}>
        {videos.map((video) => (
          <div key={video.id} className={estilos.itemVideo}>
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.titulo}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

export default GaleriaVideos;
