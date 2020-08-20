import React from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Table({ results, myFun }) {
  return (
    <section className="table-section">
      {results.map((item) => (
        <Card key={item.imdbID} style={{ width: "100%", marginBottom: "5rem" }} className="card">
          <Card.Img variant="top" src={item.Poster} className="card-image" />
          <Card.Body>
            <Card.Title>
              <Link to={`/movie/${item.imdbID}`} > {item.Title} </Link>
              </Card.Title>
            <Card.Text>
              Year = {item.Year} <br />
              ImdbID = {item.imdbID}
            </Card.Text>           
          </Card.Body>
             
        </Card>
      ))}
    </section>
  );
}
