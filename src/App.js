import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import MoviePage from "./Containers/SingleMovie/SingleMovie.jsx";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState("");
  const [query, setQuery] = useState("");

  function handleQuery(query) {
    setQuery(query);
  }
  function handleMovies(movies) {
    setMovies(movies);
  }

  return (
    <Router>
      <div className="App dark-mode">
        <Navbar
          handleQuery={handleQuery}
          query={query}
          handleMovies={handleMovies}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home query={query} movies={movies} />}
          />
          <Route path="/moviePage/:id" exact component={MoviePage} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
