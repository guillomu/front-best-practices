import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import A from "./a";
import B from "./b";
import C from "./c";

interface members {
  title: string;
  isLoaded: boolean;
}

export default (props: members) => {
  return (
    <div className="">
      <h1>{props.title}</h1>
      <Router>
        <nav>
          <li>
            <Link to="/members/a">Go to road A</Link>
          </li>
          <li>
            <Link to="/members/b">Go to road B</Link>
          </li>
          <li>
            <Link to="/members/c">Go to road C</Link>
          </li>
        </nav>{" "}
        <br />
        <Route title="A" path="/members/a">
          <A />
        </Route>
        <Route title="B" path="/members/b">
          <B />
        </Route>
        <Route title="C" path="/members/c">
          <C />
        </Route>
      </Router>
    </div>
  );
};

export const myObject = {
  title: "mon-title",
  entries: 10
};
