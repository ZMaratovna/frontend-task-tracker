import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import RegistrationPageContainer from "./components/pages/registrPageContainer";
// import ProjectsPageContainer from "./components/pages/projectsPageContainer";
import Projects from "./components/projects";
import authPageContainer from "./components/pages/authPageContainer";

function App() {
  return (
    <Switch>
      <Route
        exact
        path='/register'
        component={RegistrationPageContainer}
      ></Route>
      <Route exact path='/auth' component={authPageContainer}></Route>
      <Route exactpath='/projects' component={Projects}></Route>
    </Switch>
  );
}
export default App;
