import React, { useState, useEffect } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import "./Trailers.css"
export default function Trailers({ movieID }) {
  const [open, setOpen] = React.useState(false);
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
      <Modal
        closeIcon
        open={open}
        trigger={<Button>Show Modal</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        size = "fullscreen"
      >
        <Modal.Content>
          <iframe
            width="1300"
            height="650"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal.Content>
      </Modal>
    </div>
  );
}
