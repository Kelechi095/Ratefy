import "./login.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/authSlice";
import Alert from "../../../helpers/Alert";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (auth.id) {
      navigate("/");
    }
  }, [auth.id, navigate]);

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="card-title">Login</h2>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <label>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <Alert />
        <button>Login</button>
        <Link to="/register" className="login-link">CLICK HERE TO REGISTER</Link>
      </form>
    </div>
  );
};

export default Login;
