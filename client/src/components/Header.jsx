import React from "react";

function Header({ onRegisterClick, onLoginClick }) {
  return (
    <div className="flex justify-between w-full h-24 bg-cyan-50 items-center">
      <div className="text-3xl font-semibold pl-4">
        <h1>To-Do App</h1>
      </div>

      <div className="w-60 h-10 flex justify-between px-4">
        <button
          onClick={() => {
            onLoginClick((prev) => !prev);
            onRegisterClick(false);
          }}
          className="p-2 w-20 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center"
        >
          Login
        </button>

        <button
          onClick={() => {
            onRegisterClick((prev) => !prev);
            onLoginClick(false);
          }}
          className="p-2 w-20 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center"
        >
          Sign-Up
        </button>

        {/* <Link
          to="/login"
          className="p-2 w-20 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="p-2 w-20 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center"
        >
          Sign-Up
        </Link> */}
      </div>
    </div>
  );
}

export default Header;
