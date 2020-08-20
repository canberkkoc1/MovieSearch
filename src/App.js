import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Movie from "./components/Movie";
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 



  const [state, setState] = useState({
    query: "",
    results: [],    
  });
   const [pages, setPages] = useState(1);
   const [perPage, setPerPage] = useState(5);

  
  const url = "http://www.omdbapi.com/?apikey=8973477f";
  
  
  const search = async (e) => {
    if (e.key === "Enter") {      
       await axios.get(url + "&s="+  state.query + "&plot=full" , {
         params:{
           _limit:100
         }
       }  )   
       .then(( {data} ) => {
         let results = data.Search;
        
         setState((prevState) => {
           return { ...prevState, results: results };
         });
         console.log(data);
       });
    }
  };
  
    const indexOfLastMovie = pages * perPage;
    const indexOfFirstMovie = indexOfLastMovie - perPage;
    const moviePost = state.results.slice(indexOfFirstMovie, indexOfLastMovie);


   const paginate = (pageNumber) => setPages(pageNumber);
   const handleInput = (e) => {
     let query = e.target.value;

    setState((prevState) => {
      return { ...prevState, query: query };
    });
  };

  return (
    <Router>
      <div className="App">
        
        <Header />        
        <Route path="/" exact
        render= {(props) => <Search handleInput={handleInput} search={search} /> }
        />
        
       <Route path="/" exact render={(props) => <Table results={moviePost}  />} />
        
        <Route path="/movie/:imdbID" 
        render={( {match} ) => <Movie  match={match} />} />

        
       <Route path="/" exact render={(props) =><Pagination
          perPage={perPage}
          totalPage={state.results.length}
          paginate={paginate}
        /> }  />
      </div>
    </Router>
  );
}



export default App;
