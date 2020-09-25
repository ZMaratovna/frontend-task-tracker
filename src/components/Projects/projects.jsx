import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectsPageContainer from "../pages/projectsPageContainer";
import ProjectContainer from "./ProjectItem";

const Projects = (props) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path='/projects'
          component={<ProjectsPageContainer />}
        ></Route>
        <Route
          path='/projects/:projectId'
          component={
            <ProjectContainer projectId={props.match.params.projectId} />
          }
        ></Route>
      </Switch>
    </>
  );
};

export default Projects;
