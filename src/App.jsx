import { useState } from "react";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Book from "./components/Book";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";

import "./App.css";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Home />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <About />
      <Book />
      <Admin />
      <Create />
      <Update />
      <Footer />
    </div>
  );
}

export default App;
