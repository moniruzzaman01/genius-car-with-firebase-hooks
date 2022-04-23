import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-75 mx-auto mt-5">
      <h1 className="my-4">Register here!!!</h1>
      <form>
        <div class="mb-3">
          <label class="form-label">Your Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            onBlur={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
          />
        </div>
        <p>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/login"
          >
            Go back to login page.
          </Link>
        </p>
        <button type="submit" class="btn btn-dark">
          Register
        </button>
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px 0",
        }}
      >
        <div className="separator"></div>
        <div style={{ margin: "0 5px" }}> OR </div>
        <div className="separator"></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="btn btn-dark me-2">GoogleSignIn</button>
        <button className="btn btn-dark ms-2">GitHubSignIn</button>
      </div>
    </div>
  );
};

export default SignUp;
