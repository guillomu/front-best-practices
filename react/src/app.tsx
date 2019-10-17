import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Members from "./js/components/members";
import Spaceships from "./js/components/spaceships";
//Ici nous declarons une interface TypeScript
//qui servira a donner la structure de notre objet testProps
interface testProps {
  //Notre objet testProps a un attribut test de type: string
  test: string;
}

//On déclare notre composant (Class) avec comme paramètre props. Qui aura la structure
export default (props: testProps) => {
  return (
    <Router>
      <nav class="main-nav">
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/spaceships">Spaceships</Link>
        </li>
      </nav>{" "}
      <br />
      <Switch>
        <Route title="Members" path="/members/">
          <Members title="Members" isLoaded={true} />
        </Route>
        <Route title="Spaceships" path="/spaceships/">
          <Spaceships title="Spaceships" isLoaded={true} />
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <Members title={"My component title"} isLoading={true} />
    // </div>
  );
};
