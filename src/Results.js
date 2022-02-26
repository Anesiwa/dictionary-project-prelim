import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <div className="phonetics">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <span key={index}>
                  <Phonetics phonetic={phonetic} />
                </span>
              );
            })}
          </div>
        </section>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
