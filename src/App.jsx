import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Sagar-components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Sagar-components/Home";
import { About } from "./components/Om-components/components/about";
import { Profile } from "./components/Sagar-components/Profile";
import { Login } from "./components/Sagar-components/Login";
import { Signup } from "./components/Sagar-components/Signup";
import { Articles } from "./components/Om-components/components/articles";
import{LearnMore}  from "./components/Om-components/components/learnmore"
import { ArtContextProvider } from './components/Om-components/context/artContextProv';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ArtContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn" element={<LearnMore />} />
      </Routes>
      </ArtContextProvider>
    </>
  );
}

export default App;
