import React, { useEffect, useState } from "react";

export default function Movie({ match }) {
  useEffect(() => {
    fetchItems();
    console.log(match.params);
  }, []);

  const [items, setItems] = useState({});
  const fetchItems = async () => {
    const fetchItems = await fetch(
      `http://www.omdbapi.com/?i=${match.params.imdbID}&apikey=8973477f`
    );
    const items = await fetchItems.json();
    setItems(items);
    console.log(items);
  };

  return (
      <div className="sections">

    <section id="movieDetailsPage" style={{ color: "white" }}>
      <header>
        <h2>{items.Title} <span style={{fontSize:"1rem"}}>({items.Year})</span></h2>
      </header>
        <div className="rating">
          <h5>Imdb Rating : {items.imdbRating}</h5>
        </div>
      <section>
        <div className="details-img">
          <img src={items.Poster} alt="" />
        </div>
        <div className="Actors">
          <h4>{items.Actors}</h4>
          <h4><span className="spans">Director </span>: {items.Director}</h4>
        </div>
        <div className="runtime">
          <h5><span className="spans">Runtime</span>: {items.Runtime}</h5>
        </div>
        <div className="boxOffice">
          <h5><span className="spans">BoxOffice</span> : {items.BoxOffice}</h5>
        </div>
      </section>
    </section>
      <section className="plot">
            <p><span className="spans plots">Plot : </span>{items.Plot}</p>
      </section>
      </div>
  );
}
