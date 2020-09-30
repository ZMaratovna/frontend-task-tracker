import React from "react";
import { connect } from "react-redux";

const Comments = (props) => {
  console.log("comments", props);
  return <div>Comments</div>;
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(Comments);
