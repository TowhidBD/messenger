import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <form action="">
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
                <input type="submit" className="btn" value="Login" />
            </div>
            <div className="form-group">
                <span>
                Don't have account? <Link  href="/messenger/register">Register now</Link>
                </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
