import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";

function App() {

  return (
    <div className="App">
      <Header />
      <h1>CodeSquad Comics</h1>
      <Home />
      <About />
      <Admin />
      <Create />
      <Login />
      <Signup />
      <Update />
      <Footer />
    </div>
  );
}
export default App;
