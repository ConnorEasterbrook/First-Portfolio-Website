import React from "react";
// import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import { Route, Routes, Navigate } from "react-router-dom";
import { render } from "@testing-library/react";

function App()
{
  return (
    <header>
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </header>
  );
}

export default App;
