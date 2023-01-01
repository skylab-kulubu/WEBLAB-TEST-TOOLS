import "./styles.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#food">Category</a>
            </li>
            <li>
              <a href="#food-menu">Menu</a>
            </li>
            <li>
              <a href="#testimonials">Members</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <h1 className="logo">SkyLab</h1>
        </div>
      </nav>
      <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home">
            Code Right Now
          </h1>
          <p>For a better future.</p>
          <a href="#food-menu" className="btn btn-primary">
            Menu
          </a>
        </div>
      </section>
    </div>
  );
}
