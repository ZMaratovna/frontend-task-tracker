import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectsPageContainer from "./pages/projectsPageContainer";
import Project from "./Project";

const Projects = () => (
  <Switch>
    <Route exact path='/projects' component={<ProjectsPageContainer />}></Route>
    <Route path='/projects/:projectId' component={<Project />}></Route>
  </Switch>
);

export default Projects;
