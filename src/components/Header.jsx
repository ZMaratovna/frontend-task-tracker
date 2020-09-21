import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <span>
          <a href='/auth' onClick={this.logout}>
            {localStorage.getItem("isAuth") ? "Logout" : false}
          </a>
        </span>
      </div>
    );
  }
}

export default Header;
