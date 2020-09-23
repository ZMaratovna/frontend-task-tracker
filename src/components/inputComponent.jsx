// const inputComponent = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning },
// }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched &&
//         ((error && <span>{error}</span>) ||
//           (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// );

// export default inputComponent;

import React, { Fragment } from "react";

const myInput = (props) => {
  const { input, label, type, placeholder, meta } = props;
  return (
    <Fragment>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder} />

      {meta.error && meta.touched && <div>{meta.error}</div>}
    </Fragment>
  );
};
export default myInput;
