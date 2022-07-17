import logo from "./app-logo.png";
import social from "./social-img.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <div className="social">
          <a
            href="https://www.instagram.com/hacker___baby/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={social}
              className="Social-img img-fluid"
              alt="social-link"
            />
          </a>
        </div>
        <footer className="App-footer">
          This is an{" "}
          <a
            href="https://github.com/hacker-baby/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>{" "}
          project built by Tais Elize.
        </footer>
      </div>
    </div>
  );
}
