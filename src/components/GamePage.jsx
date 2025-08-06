import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Pong from "./Pong";
import { useGlobalContext } from "./context";

const GamePage = () => {
  const [gameSelected, setGameSelected] = useState(false);
  const [runPong, setRunPong] = useState(false);
  const { bgColor, setBgColor } = useGlobalContext();
  const { dark, setDar } = useGlobalContext();

  function setAllgames() {
    setRunPong(false);
  }

  return (
    <div
      style={{
        background: bgColor,
        height: "calc(100vh - 60px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginTop: "40px", color: "#0f0" }}>Games</h1>
        <div style={{ flexBasis: "100%", height: "40px" }}></div>
        {!gameSelected ? (
          <div>
            <Button
              onClick={() => {
                setGameSelected(true), setRunPong(true);
              }}
            >
              Pong
            </Button>
            <div style={{ flexBasis: "100%", height: "20px" }}></div>
            <Button disabled>...</Button>
            <div style={{ flexBasis: "100%", height: "20px" }}></div>
            <Button disabled>...</Button>
          </div>
        ) : (
          <Button
            onClick={() => {
              setGameSelected(false), setAllgames();
            }}
          >
            Close Game
          </Button>
        )}
        <div style={{ flexBasis: "100%", height: "20px" }}></div>
        {runPong ? <Pong /> : ""}
      </div>
    </div>
  );
};

export default GamePage;
