import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav>
      <Link to="/">
        <h1>Ratefy</h1>
      </Link>
      <div className="right-nav">
        <Link to="/profile">
          <p>{auth.name}</p>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
