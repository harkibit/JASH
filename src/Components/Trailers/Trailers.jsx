import React, { useState, useEffect } from "react";
import { Modal, Embed } from "semantic-ui-react";
import "./Trailers.css";

export default function Trailers({ movieID, open, setClose }) {
  const [trailer, setTrailer] = useState([]);
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${movieID}/videos`))
      .then((response) => response.json())
      .then((data) => setTrailer(data.results[0]));
  }, []);

  return (
    <div>
      <Modal closeIcon open={open} onClose={setClose} size="fullscreen">
        <Modal.Content>
          <Embed
            id="O6Xo21L0ybE"
            placeholder="Trailer"
            src="youtube"
            hd={true}
            aspectRatio="2:5"
            url={`https://www.youtube.com/embed/${trailer.key}`}
          />
        </Modal.Content>
      </Modal>
    </div>
  );
}
