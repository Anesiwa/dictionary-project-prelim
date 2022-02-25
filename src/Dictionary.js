import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} defintion`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="container">
        <div>What word do you want to look up? </div>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Search for a word"
            onChange={handleKeyword}
          />
        </form>
      </div>
    </div>
  );
}
