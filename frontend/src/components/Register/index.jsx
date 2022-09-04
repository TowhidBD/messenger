import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  required
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  id="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                  id="confirm_password"
                />
              </div>
              <div className="form-group">
                <div className="file-image">
                  <div className="image"></div>
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Upload Profile Picture"
                  />
                </div>
              </div>
              <div className="from-group">
                <input type="submit" className="btn btn-" value="register" />
              </div>
              <div className="from-group">
                <span> Already a member? 
                  <Link to="/messenger/login">Login here</Link>
                </span>
              </div>
            </form>

            <footer className="blockquote-footer"></footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Register;
