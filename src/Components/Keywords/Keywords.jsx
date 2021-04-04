import React, { useState, useEffect } from "react";
import { Label } from "semantic-ui-react";

export default function Keywords({ movieID }) {
  const [keywords, setKeywords] = useState([]);
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`;
  };
  useEffect(() => {
    fetch(constructUrl(`movie/${movieID}/keywords`))
      .then((response) => response.json())
      .then((data) => setKeywords(data.results));
  }, []);

  return (
    <div>
      {keywords && keywords.map((tag) => <Label color="red">{tag.name}</Label>)}
    </div>
  );
}
