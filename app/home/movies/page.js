"use client";

import React from "react";
import "./page.css";

function page() {
  function SearchQuery(e) {
    e.preventDefault();
    const name = e.target.Mname.value;
    const year = e.target.Myear.value;
    if (name.trim() !== "" && year.trim() !== "") {
      const Mname = name.split(" ").join("-").toLowerCase();
      const api = `https://isaidub.spot/movie/${Mname}-${year}-tamil-dubbed-movie/`;
      window.location.href = `${api}`;
      console.log(name);
    } else {
      alert("Fields Are Empty");
    }

    // window.location.href=`https://isaidub.spot/movie/exit-2019-tamil-dubbed-movie/`
  }
  return (
    <>
      <div className="moviesContainer">
        <h3>Tamil Dubbed Movies</h3>
        <form onSubmit={SearchQuery}>
          <li>
            Movie Name:
            <input name="Mname" list="movies" />
          </li>
          <li>
            Year:
            <input name="Myear" />
          </li>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default page;
