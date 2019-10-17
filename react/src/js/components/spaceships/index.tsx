import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import A from "./a";
import B from "./b";
import C from "./c";

interface spaceships {
  title: string;
  isLoaded: boolean;
}

export default (props: spaceships) => {
  return (
    <div className="">
      <h1>{props.title}</h1>
      <Router>
        <nav>
          <li>
            <Link to="/spaceships/a">Go to road A</Link>
          </li>
          <li>
            <Link to="/spaceships/b">Go to road B</Link>
          </li>
          <li>
            <Link to="/spaceships/c">Go to road C</Link>
          </li>
        </nav>{" "}
        <br />
        <Route title="A" path="/spaceships/a">
          <A />
        </Route>
        <Route title="B" path="/spaceships/b">
          <B />
        </Route>
        <Route title="C" path="/spaceships/c">
          <C />
        </Route>
      </Router>
    </div>
  );
};
