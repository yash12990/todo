import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoginForm from "./components/pages/LoginForm";
import RegisterForm from "./components/pages/RegisterForm";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header
        onRegisterClick={setShowRegisterModal}
        onLoginClick={setShowLoginModal}
      />
      <Hero />

      <LoginForm
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <RegisterForm
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />

      {/* {showLoginModal && <LoginForm />} */}
      {/* {showRegisterModal && <RegisterForm />} */}
    </div>
  );
}
export default App;
