import Header from "./shared/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Book from "./components/Book";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Update from "./components/Update";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>CodeSquad Comics</h1>
      <Home />
      <Login />
      <Signup />
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
