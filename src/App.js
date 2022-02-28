import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary.js";
import Footer from "./Footer";

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
          <Dictionary defaultKeyword="sunset" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
