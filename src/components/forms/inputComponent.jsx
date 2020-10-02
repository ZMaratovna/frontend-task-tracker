import React, { Fragment } from "react";
import styles from "./forms.module.css";
const myInput = (props) => {
  const { input, label, type, placeholder, meta } = props;
  return (
    <Fragment>
      <input
        className={styles.input}
        {...input}
        type={type}
        placeholder={placeholder}
      />

      {meta.error && meta.touched && <div>{meta.error}</div>}
    </Fragment>
  );
};
export default myInput;
