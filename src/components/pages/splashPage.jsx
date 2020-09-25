import React from "react";

const SplashPage = (props) => {
  console.log("splash page props", props);
  return (
    <div>
      <h1>Start page</h1>
      <button>
        <a href='/projects'>Start</a>
      </button>
    </div>
  );
};

export default SplashPage;
