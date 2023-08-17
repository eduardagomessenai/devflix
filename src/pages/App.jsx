import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";

import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  const handleKeyPress = (e) => {
    e === "Enter" && searchMovies(searchTerm);
  };

  return (
    <div id="app">
      <div className="logo">
        <img src={logo} alt="logo devflix" />
      </div>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Pesquise por filmes"
        />
        <img
          src={searchIcon}
          alt="Icone de Pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
    </div>
  );
};

export default App;
