import React,{ useState } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Main2 from "./Components/Main_2/Main_2";
import MoviePage from './Components/Main_2/MoviePage'
import Registration from "./Components/Navbar/Registration"
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Loader from "./Components/Loading"
import Trailers from "./Components/Main_2/Trailers";

export default function App() {
    const [movies, setMovies] = useState("")
    const [query, setQuery] = useState("");
 
    function handleQuery(query) {
        setQuery(query);
      }
    function handleMovies(movies){
      setMovies(movies);
    }

  return (
    <Router>
      <div className="App dark-mode">
            <Navbar handleQuery={handleQuery} query={query}  handleMovies={handleMovies} />
              <Switch>
                <Route path = "/movie/trailers" component = {Trailers}/>
                <Route exact path="/" component={() => <Main2 query= {query} movies={movies}/> } />
                <Route path="/register" component={Registration}/>
                  < Route path = "/moviePage/:id" exact component = {MoviePage}/>
              </Switch>          
        <Footer />
      </div>
    </Router>
  );
}
