import React from "react";
import estilos from "../ProgressBar.module.css";

function ProgressBar({ progresso }) {
  return (
    <div className={estilos.barra}>
      <div className={estilos.progresso} style={{ width: `${progresso}%` }}>
        <p>{progresso}%</p>
      </div>
    </div>
  );
}

export default ProgressBar;
