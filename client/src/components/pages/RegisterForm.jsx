import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: username,
      email: email,
      password: password,
    };

    const res = await axios.post(
      "http://localhost:5010/users/create-user",
      userData
    );

    if (res) {
      alert("Registered successfully!!!");
      console.log("Added user!".res);
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Card className="mx-auto mt-12 w-[50vw] h-[60vh] bg-slate-100 shadow-2xl">
      <Card.Header>
        <h1 className="font-bold text-5xl text-center p-3">Register</h1>
      </Card.Header>
      <Card.Body className="mt-5">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center gap-y-4"
        >
          <p className="font-semibold text-xl">Username</p>
          <input
          value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Username..."
            className="h-10 w-1/2 rounded-lg p-2 mb-4"
            required
          />

          <p className="font-semibold text-xl">Email</p>
          <input
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email..."
            className="h-10 w-1/2 rounded-lg p-2 mb-4"
            required
          />

          <p className="font-semibold text-xl">Password</p>
          <input
          value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password..."
            className="h-10 w-1/2 rounded-lg p-2 mb-4"
            required
          />

          <button
            onClick={handleFormSubmit}
            disabled={username.length <= 0 || email.length <= 0 || password.length <= 0}
            className="p-3 bg-blue-600 text-white rounded-xl disabled:bg-blue-400"
            // type="submit"
          >
            Register
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}

export default RegisterForm;
