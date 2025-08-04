import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import NavbarComp from "./components/NavbarComp";
import Pong from "./components/Pong";
import About from "./components/About";
import { CookiesProvider } from "react-cookie";
import GamePage from "./components/GamePage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CookiesProvider>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </CookiesProvider>
  </BrowserRouter>
);
