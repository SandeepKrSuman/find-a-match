import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CookiePolicy from "./components/CookiePolicy/CookiePolicy";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/share/*" exact element={<WelcomeUser />} />
      <Route path="/policy/*" exact element={<CookiePolicy />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
