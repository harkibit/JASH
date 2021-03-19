import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import MoviePage from "./Containers/SingleMovie/SingleMovie.jsx";
import Home from "./Containers/Home/Home"

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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
