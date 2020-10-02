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
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const useStyle = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(1) },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyle();
  return (
    <div className='app-wrapper'>
      <AppBar position='fixed'>
        <Container>
          <Toolbar>
            <IconButton edge='end' className={classes.menuButton}>
              <MenuIcon color='secondary'></MenuIcon>
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Task Tracker
            </Typography>
            <Button
              href='/auth'
              className={classes.menuButton}
              variant='outlined'
              color='inherit'
            >
              Log In
            </Button>
            <Button variant='contained' color='secondary' href='/register'>
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
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
