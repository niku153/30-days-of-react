import { Outlet, Link } from "react-router-dom";
import "./home.component.css";

const Home = () => {
  return (
    <div>
      <Outlet />
      <div className="home-container">
        <div className="project-preview">
          <div>
            <img
              src="https://cdn.britannica.com/28/8028-004-8469CD5B/Diamond.jpg?s=1500x700&q=85"
              className="project-snapshot"
              alt="project-snapshot"
            />
          </div>
          <div className="project-blurb">
            <h2>Day 1: Text-to-Speech Converter</h2>
            <p>
              A simple text-to-speech converter created with React. Includes
              options to change voices, rate, and pitch.{" "}
            </p>
            <Link to="text-to-speech" className="button-link">
              Text to Speech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
