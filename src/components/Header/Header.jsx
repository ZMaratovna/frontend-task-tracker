import React from "react";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      {props.isLoggedIn ? (
        <span>
          <a
            className={s.link}
            href='/auth'
            onClick={async (e) => {
              console.log("logout clicked");
              e.preventDefault();
              props.logout();
            }}
          >
            Log Out
          </a>
        </span>
      ) : (
        <div></div>
      )}
      <span>
        <a className={s.link} href='/myprojects'>
          <span>My projects</span>
        </a>
      </span>
      <div>
        <p>{props.userName}</p>
        <p>{props.position}</p>
      </div>
    </div>
  );
};

export default Header;
