import React from 'react';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    // Yes, setting state from props is an anti-pattern.
    // But this is a mock, we're matching the external API, so bite me.
    const token = props.token && jwt.sign(props.token, props.secret);
    this.state = {
      loggedIn: !!props.loggedIn,
      token,
      user: { capabilities: ['create', 'read', 'update', 'delete'] },
    };
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

LoginProvider.propTypes = {
  children: PropTypes.array.isRequired,
  loggedIn: PropTypes.boolean.isRequired,
  token: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
};

export default LoginProvider;
