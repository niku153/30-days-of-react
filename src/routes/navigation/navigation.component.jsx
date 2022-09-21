import { Outlet, Link } from "react-router-dom";
import "./navigation.component.css";
import logo from "../../logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <div>
          <Link to="/" className="app-header">
            {" "}
            <img src={logo} className="react-logo" alt="logo" />
            <span>30 DAYS OF REACT</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
