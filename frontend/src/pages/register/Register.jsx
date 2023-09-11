import './register.css'
import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { registerUser } from "../../../redux/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(formData))
  }

  useEffect(() => {
    if(auth.id) {
      navigate('/')
    }
  }, [auth.id])

  return (
    <div className="form-section">
        <form onSubmit={handleSubmit} className="form">
        <h2> Register</h2>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
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
          <button type="submit">Register</button>
          <Link to="/login" className="register-link">
            CLICK HERE TO LOGIN
          </Link>
        </form>
      </div>
  );
};

export default Register;
