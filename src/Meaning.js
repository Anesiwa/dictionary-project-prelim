import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <div>
                {definitions.definition}
                <br />
                <div className="examples">{definitions.example}</div>
                <br />
                <Synonyms synonyms={definitions.synonyms} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
