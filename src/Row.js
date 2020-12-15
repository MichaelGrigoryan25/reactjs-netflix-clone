import "./Row.css";
import axios from "./axios";
// import YouTube from "react-youtube";
// import youtubeSearch from "youtube-search";
import React, { useEffect, useState } from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // This doesn't work because there are issues with movie-trailers package
  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     console.log(movie.name);
  //     youtubeSearch(
  //       movie?.name + "trailer" || "",
  //       { maxResults: 1, key: "" },
  //       (err, result) => {
  //         // const urlParams = new URLSearchParams(new URL().search);
  //         // setTrailerUrl(urlParams.get("v"));
  //         console.log(result);
  //       }
  //     );
  //   }
  // };

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  return (
    <div className="row">
      <h2 align="left">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              // onClick={handleClick(movie)}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
};

export default Row;
