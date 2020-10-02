import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import RegistrationPageContainer from "./components/pages/registrPageContainer";
import authPageContainer from "./components/pages/authPageContainer";
import SplashPage from "./components/pages/splashPage";
import { AuthRoute, ProtectedRoute } from "./utils/route_util";
import ProjectsPageContainer from "./components/pages/projectsPageContainer";
import ProjectContainer from "./components/Projects/ProjectContainer";
import TasksContainer from "./components/Tasks/TasksContainer";
import MyProjectsContainer from "./components/Projects/MyProjectsContainer";

import "./App.css";

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={SplashPage}></Route>
          <AuthRoute
            exact
            path='/register'
            component={RegistrationPageContainer}
          ></AuthRoute>
          <AuthRoute
            exact
            path='/auth'
            component={authPageContainer}
          ></AuthRoute>
          <ProtectedRoute
            exact
            path='/projects'
            component={ProjectsPageContainer}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/projects/:id'
            component={ProjectContainer}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/tasks/:id'
            component={TasksContainer}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/myprojects'
            component={MyProjectsContainer}
          ></ProtectedRoute>
        </Switch>
      </div>
    </div>
  );
}
export default App;
