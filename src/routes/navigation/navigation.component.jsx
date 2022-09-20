import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <div>Logo</div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
