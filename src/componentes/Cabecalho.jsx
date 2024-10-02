import React, { useState } from "react";
import estilos from "../Cabecalho.module.css";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import logo from "../imagens/logo.jpeg";

function Cabecalho({ alternarModo, modoEscuro }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [menuLivrosAberto, setMenuLivrosAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const toggleMenuLivros = () => {
    setMenuLivrosAberto(!menuLivrosAberto);
  };

  const handleCadastrarLivros = () => {
    alert("Cadastrar Livro clicado!");
  };

  return (
    <header className={estilos.cabecalho}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjqkXQlZxCKtXkQxtaowtMddoRGOeZ7_Mtw&s"
        alt="Logotipo"
        style={{
          height: "80px",
          marginRight: "20px",
          borderRadius: "8px",
        }}
      />
      <nav>
        <button className={estilos.botaoHamburguer} onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`${estilos.menu} ${menuAberto ? estilos.aberto : ""}`}>
          <li>Início</li>
          <li onMouseEnter={toggleMenuLivros} onMouseLeave={toggleMenuLivros}>
            Livros
            {menuLivrosAberto && (
              <ul className={estilos.dropdown}>
                <li>Romance</li>
                <li>Ação</li>
                <li>Ficção Científica</li>
                <li>Fantasia</li>
              </ul>
            )}
          </li>
          <li>Vídeos</li>
          <li>
            <ToggleSwitch
              ativado={modoEscuro}
              alternar={(e) => {
                e.stopPropagation();
                alternarModo();
              }}
            />
          </li>
          <li>
            <Button primary size="pequeno" onClick={handleCadastrarLivros}>
              Cadastrar Livros
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
