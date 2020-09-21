import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationPage from "./components/pages/registrPage";
import ProjectsPageContainer from "./components/pages/projectsPageContainer";
import Project from "./components/Project";
import Header from "./components/Header";

function App() {
  return (
    <div className='app-wrapper'>
      <Router>
        <Route path='/register' render={() => <RegistrationPage />}></Route>
        <Route
          path='/projects'
          render={() => <ProjectsPageContainer />}
        ></Route>
        <Route path='/project/:projectId' render={() => <Project />}></Route>
      </Router>
    </div>
  );
}
export default App;

//   constructor(props) {
//     super(props);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isRegistr: false,
//       username: "",
//       position: "manager",
//       email: "",
//       password: "",
//       projects: [],
//     };
//     this.updateData = this.updateData.bind(this);
//     this.authData = this.authData.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   async handleSubmit(e) {
//     e.preventDefault();
//     // Authentification request
//     if (e.target.className === "auth-form") {
//       const authResponse = await API.auth({
//         password: this.state.password,
//         email: this.state.email,
//       });
//       if (authResponse.status === 400) {
//         console.log("Incorrect passport or email");
//       }
//       if (authResponse.status === 422) {
//         console.log("Please, confirm your email address before");
//       }
//       this.setState({
//         password: "",
//         username: authResponse.username,
//         id: authResponse._id,
//         isSignin: true,
//       });
//       localStorage.setItem("isAuth", true);
//       localStorage.setItem("userId", authResponse._id);
//       localStorage.setItem("user", authResponse.username);
//       // Registration  request
//     } else {
//       e.target.reset();
//       const userResponse = await API.postNewUser({
//         username: this.state.username,
//         email: this.state.email,
//         password: this.state.password,
//         position: this.state.position,
//       });
//       if (userResponse.status === 400) {
//         this.setState({ error: "This user has already exists" });
//         console.log("This user has already exists");
//       } else if (userResponse.status === 200) {
//         this.setState({ error: userResponse.data });
//       } else if (userResponse.status === 201) {
//         const res = userResponse.data;
//         this.setState({
//           username: res.username,
//           email: res.email,
//           position: res.position,
//           id: res.id,
//           isRegistr: true,
//           password: "",
//           projects: [],
//         });
//       }
//     }
//     console.log(this.state);
//   }

//   updateData = function (target, value) {
//     if (target && value) {
//       this.setState({ [target]: value });
//     }
//   };
//   authData = function (target, value) {
//     this.setState({ [target]: value });
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <Header />
//         <Router>
//           <Route
//             path='/register'
//             render={() => (
//               <RegistrationPage
//                 state={this.state}
//                 updateData={this.updateData}
//                 handleSubmit={this.handleSubmit}
//                 isRegistr={this.state.isRegistr}
//               />
//             )}
//           />
//           <Route
//             path='/auth'
//             render={() => (
//               <AuthPage
//                 state={this.state}
//                 authData={this.authData}
//                 handleSubmit={this.handleSubmit}
//               />
//             )}
//           />
//           <Route
//             path='/projects'
//             render={() => (
//               <ProjectsPage
//                 userId={this.state.id || localStorage.getItem("userId")}
//               />
//             )}
//           />
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;
