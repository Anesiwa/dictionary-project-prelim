import React from "react";
import netlify from "./netlify-logo.png";
import linkedin from "./linkedin-logo.png";
import github from "./github-logo.png";
import logo from "./react-logo.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-center mt-2 mb-4">
      <div className="Footer">
        <div className="row">
          <div className="col-3">
            <img
              src={logo}
              alt="React"
              width={50}
              className="Footer-logos img-fluid"
            />
          </div>
          <div className="col-3">
            <a
              href="https://www.linkedin.com/in/ameliaarku/"
              target="_blank"
              rel="noopener noreferrer"
            />
            <img
              src={linkedin}
              alt="Amelia Arku's LinkedIn"
              className="Footer-logos img-fluid"
            />
          </div>
          <div className="col-3">
            <a
              href="https://github.com/Anesiwa/dictionary-project-prelim"
              target="_blank"
              rel="noopener noreferrer"
            />
            <img
              src={github}
              alt="Amelia Arku's Github"
              className="Footer-logos img-fluid"
            />
          </div>
          <div className="col-3">
            <a
              href="https://reactdictionaryaa.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            />
            <img
              src={netlify}
              alt="Amelia Arku's Netlify"
              width={30}
              className="Footer-logos img-fluid"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">Built with React</div>
          <div className="col-3">Coded by Amelia Arku</div>
          <div className="col-3">Open-sourced on Github</div>
          <div className="col-3">Hosted on Netlify</div>
        </div>
      </div>
    </footer>
  );
}
