import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AsyncRouteComponent from "./AsyncRouteComponent";
// import Home from "./routes/Home";
// import About from "./routes/About";

const Home = AsyncRouteComponent(() =>
  import("./routes/Home").then(module => module.default)
);
const About = AsyncRouteComponent(() =>
  import("./routes/About").then(module => module.default)
);

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Routes;
