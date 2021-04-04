import React from "react";
import "./Button.css";

export default function Button({ text, onClick }) {
  return (
    <div>
      <button className="btn btn-outline btn-style" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
