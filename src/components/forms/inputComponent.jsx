import React, { Fragment } from "react";
import { InputLabel } from "@material-ui/core";
import Input from "@material-ui/core/Input";
const myInput = (props) => {
  const { input, type, placeholder, meta } = props;
  return (
    <Fragment>
      <Input
        fullWidth
        style={{ height: "50px" }}
        {...input}
        type={type}
        placeholder={placeholder}
      />

      {meta.error && meta.touched && (
        <div style={{ color: "#f50057", fontSize: "12px" }}>{meta.error}</div>
      )}
    </Fragment>
  );
};
export default myInput;
