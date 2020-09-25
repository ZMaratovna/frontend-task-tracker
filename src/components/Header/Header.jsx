import React from "react";
import { logoutUser } from "../../actions/session.actions";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.isLoggenIn && (
          <span>
            <a href='/auth' onClick={() => logoutUser()}>
              Log Out
            </a>
          </span>
        )}
      </div>
    );
  }
}

export default Header;
