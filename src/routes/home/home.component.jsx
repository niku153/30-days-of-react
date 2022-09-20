import { Outlet, Link } from "react-router-dom";

import logo from "../../logo.svg";

const Home = () => {
  return (
    <div className="App">
      <Outlet />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 Days of React</h1>
        <Link to="text-to-speech">Text to Speech</Link>
      </header>
    </div>
  );
};

export default Home;
