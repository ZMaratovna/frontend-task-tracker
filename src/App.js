import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/utils/theme";
import HeaderContainer from "./components/Header/HeaderContainer";
import RegistrationPageContainer from "./components/pages/registrPageContainer";
import authPageContainer from "./components/pages/authPageContainer";
import SplashPage from "./components/pages/splashPage";
import { AuthRoute, ProtectedRoute } from "./utils/route_util";
import ProjectsPageContainer from "./components/pages/projectsPageContainer";
import ProjectContainer from "./components/Projects/ProjectContainer";
import Contacts from "./components/pages/Contacts";

import "./App.css";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className='skew'></div>

        <HeaderContainer />

        <Switch>
          <Route exact path='/' component={SplashPage}></Route>
          <Route exact path='/contacts' component={Contacts}></Route>
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
        </Switch>
      </ThemeProvider>
    </div>
  );
}
export default App;
