import "./App.css";
import { Switch, Route } from "react-router-dom";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Reset from "./components/Reset";

const App = () => {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>

      <div className="main">
        <Switch>
          <Route exact path="/">
            <Hero />
            <Info />
            <Brands />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/forgot">
            <ForgotPassword />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
