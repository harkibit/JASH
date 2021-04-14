import React from "react";
import "./FooterIcons.css";

export default function FooterIcons({ teams, act }) {
  return (
    <div className="d-space-around">
      {teams &&
        teams.map(() => (
          <a
            href={act}
            target="_blank"
            className="social-media-icons icons"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        ))}
    </div>
  );
}
