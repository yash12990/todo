import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: email,
        password: password,
      };

      const res = await axios.post(
        `http://localhost:5010/users/login`,
        userData
      );

      if (res.status === 200) {
        alert("User logged in successfully!!");
        console.log("User logged in successfully!!", res);

        // localStorage.setItem(`${res.data.user.name}`, userData.email);

    } else if (res.status === 201) {
        alert("Incorrect password!");
      } else if (res.status === 202) {
        alert("User not found! Please signup and try again.");
        console.log(res);
      }
    } catch (error) {
      console.log("Error in login: " + error);
      alert("Error occured!");
    }
  };

  return (
    <Card className="mx-auto my-10 w-[40vw] h-[50vh] bg-slate-100 shadow-2xl">
      <Card.Header>
        <h1 className="font-bold text-5xl text-center p-3">Login</h1>
      </Card.Header>
      <Card.Body className="mt-5">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center gap-y-4"
        >
          <p className="font-semibold text-xl">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email..."
            className="h-10 w-1/2 rounded-lg p-2 mb-4"
            required
          />

          <p className="font-semibold text-xl">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password..."
            className="h-10 w-1/2 rounded-lg p-2 mb-4"
            required
          />

          <button
            disabled={email.length <= 0 || password.length <= 0}
            className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-400"
            type="submit"
          >
            Login
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
