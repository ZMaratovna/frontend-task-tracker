import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProjectsThunk } from "../../actions/project.actions";
import MyProjects from "./MyProjects";

class MyProjectsContainer extends React.Component {
  async componentDidMount() {
    await this.props.getProjectsThunk(this.props.userId);
  }
  render() {
    console.log("myProjects props", this.props);

    return (
      <MyProjects userId={this.props.userId} projects={this.props.projects} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.Session.id,
    projects: state.Projects.projects,
  };
};
export default connect(mapStateToProps, { getProjectsThunk })(
  MyProjectsContainer
);

// export default MyProjectsContainer;
