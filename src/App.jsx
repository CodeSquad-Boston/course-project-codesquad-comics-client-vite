import { useState } from "react";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";

import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Home />
      <About />
      <Admin />
      <Create />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <Update />
      <Footer />
    </div>
  );
}

export default App;
