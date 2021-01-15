import { Route } from "react-router-dom";
import "./App.css";
import { LoginForm, RegisterForm } from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Posts from "./components/Posts";
import Navbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
    </div>
  );
}

export default App;
