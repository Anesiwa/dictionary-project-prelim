import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div>
      <ul>
        <li>
          {props.phonetic.text}
          <button className="phonetic-sound">
            <a href={props.phonetic.audio} target="_blank">
              Listen
            </a>
          </button>
        </li>
      </ul>
      <br />
    </div>
  );
}
