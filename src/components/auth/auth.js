import React from 'react';
import PropTypes from 'prop-types';

import { LoginContext } from './context';

const If = (props) => {
  return props.condition ? props.children : null;
};

console.log('auth loaded');

class Auth extends React.Component {
  render() {
    console.log('AUTH RENDER');
    return (
      <LoginContext.Consumer>
        {(context) => {
          console.log(context);
          const okToRender = context.loggedIn
            && (this.props.capability ? context.user.capabilities
              && context.user.capabilities.includes(this.props.capability)
              : true);

          return <If condition={okToRender}>{this.props.children}</If>;
        }}
      </LoginContext.Consumer>
    );
  }
}

Auth.propTypes = {
  capability: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Auth;
