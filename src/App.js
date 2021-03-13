import React,{ useState, useReducer, createContext} from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer.js";
import Main2 from "./Components/Main_2/Main_2.js";
import MoviePage from './Components/Main_2/MoviePage'
import Registration from "./Components/Navbar/Registration.js"
// import Main1 from "./Components/Main_1/Main_1.js";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Loader from "./Components/Loading.js"
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
    // const initialState = { loading : false , dark_mode : true }
    // const reducer = (state, action) => {
    //   switch (action.type) {
    //     case 1:
          
    //       break;
      
    //     default:
    //       break;
    //   }
    // }
  return (
    <Router>
      {/* <Loader></Loader> */}
      <div className="App dark-mode">
            <Navbar handleQuery={handleQuery} query={query}  handleMovies={handleMovies} />
            {/* <Main2   /> */}
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
