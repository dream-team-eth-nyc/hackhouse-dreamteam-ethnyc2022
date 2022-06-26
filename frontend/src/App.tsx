import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { useColorMode } from "@chakra-ui/react";
import ViewGuild from "./pages/ViewGuild";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => (colorMode === "light" ? toggleColorMode() : undefined), []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/guilds/:id" element={<ViewGuild />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
