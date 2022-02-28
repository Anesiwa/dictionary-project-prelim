import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <ul>
        <li>
          <span className="phonetic-text">{props.phonetic.text}</span>
          <a
            href={props.phonetic.audio}
            target="_blank"
            className="phonetic-sound"
            rel="noreferrer"
          >
            Listen
          </a>
        </li>
      </ul>
      <br />
    </div>
  );
}
