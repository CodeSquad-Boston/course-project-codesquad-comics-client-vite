import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./shared/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Update from "./components/Update";
import Footer from "./shared/Footer";

import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoutes user={user} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/books/:bookId/update" element={<Update />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
