import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div>
            <img src={logo} className="app-logo img-fluid" alt="logo" />
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">
          Open sourced by Amelia Arku on GitHub
        </footer>
      </div>
    </div>
  );
}
