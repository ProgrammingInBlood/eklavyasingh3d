import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./base/Home";

function Routing() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <h2>NOT FOUND</h2>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routing;
