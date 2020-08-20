import React from "react";
import { Jumbotron , Container } from 'react-bootstrap';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function Header() {
  return (
    <div className="Header">
       <h1>Movie Search App</h1> 
      <Link to="/" ><h3>HOME</h3></Link>  
    </div>
  );
}
