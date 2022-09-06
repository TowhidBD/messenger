import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../redux/actions/authAction";

const Register = () => {
    const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const { username, email, password, confirmPassword, image } = state;

  const [loadImage, setLoadImage] = useState("");

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const fileHandler = (e) => {
    if (e.target.files.length !== 0) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }

    const reader = new FileReader();
    reader.onload = () => {
      setLoadImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
   
    const formData = new FormData();
    FormData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('image', image);

    dispatch(userRegister(formData));

  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form action="" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required
                id="username"
                onChange={inputHandler}
                name="username"
                value={username}
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
                onChange={inputHandler}
                name="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                required
                id="password"
                onChange={inputHandler}
                name="password"
                value={password}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
                id="confirmPassword"
                onChange={inputHandler}
                name="confirmPassword"
                value={confirmPassword}
              />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? <img src={loadImage} /> : ""}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Upload Profile Picture"
                    id="image"
                    onChange={fileHandler}
                    name="image"
                    value={image}
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-" value="register" />
            </div>
            <div className="form-group">
              <span>
                {" "}
                Already a member?
                <Link href="/messenger/login">Login here</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
