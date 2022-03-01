import React from "react";

export default function Footer() {
  return (
    <section className="Footer">
      <div className="row d-flex">
        <div className="col-3">Built with React</div>
        <div className="col-3">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/ameliaarku/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          Amelia Arku
        </div>
        <div className="col-3">
          Open-sourced on{" "}
          <a
            href="https://reactdictionaryaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="col-3">
          Hosted on{" "}
          <a
            href="https://github.com/Anesiwa/dictionary-project-prelim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </div>
      </div>
    </section>
  );
}
