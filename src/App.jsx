import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Sagar-components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Sagar-components/Home";
import { About } from "./components/Sagar-components/About";
import { Profile } from "./components/Sagar-components/Profile";
import { Login } from "./components/Sagar-components/Login";
import { Signup } from "./components/Sagar-components/Signup";
import { ForgotPassword } from "./components/Sagar-components/ForgotPassword";
import { ResetPassword } from "./components/Sagar-components/ResetPassword";
import { Article } from "./components/Sagar-components/Articles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
