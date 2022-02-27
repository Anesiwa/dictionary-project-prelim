import React from "react";

export default function Phonetics(props) {
  console.log(props);
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
