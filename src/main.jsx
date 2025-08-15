import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import NavbarComp from "./components/NavbarComp";
import Pong from "./components/Pong";
import About from "./components/About";
import { CookiesProvider } from "react-cookie";
import GamePage from "./components/GamePage";
import { GlobalProvider } from "./components/context.jsx";
import Register from "./components/Register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalProvider>
      <CookiesProvider>
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gamepage" element={<GamePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CookiesProvider>
    </GlobalProvider>
  </BrowserRouter>
);
