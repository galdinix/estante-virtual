import React from "react";

const ToggleSwitch = ({ ativado, alternar }) => {
  const estilosToggle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  const estilosSwitch = {
    width: "60px",
    height: "30px",
    backgroundColor: ativado ? "#4caf50" : "#ccc",
    borderRadius: "30px",
    position: "relative",
    transition: "background-color 0.3s",
  };

  const estilosBotao = {
    content: '""',
    position: "absolute",
    top: "50%",
    left: ativado ? "32px" : "2px",
    width: "26px",
    height: "26px",
    backgroundColor: "white",
    borderRadius: "50%",
    transform: "translateY(-50%)",
    transition: "left 0.3s",
  };

  return (
    <div style={estilosToggle} onClick={alternar}>
      <div style={estilosSwitch}>
        <div style={estilosBotao}></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
