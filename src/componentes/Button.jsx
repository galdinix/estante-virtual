import React from "react";
import estilos from "../Button.module.css"; // Importe o CSS Module

function Button({ primary, size, children, onClick }) {
  const classNames = [
    estilos.botao,
    primary ? estilos.primario : estilos.secundario,
    size === "grande" ? estilos.grande : estilos.pequeno,
  ].join(" ");

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
