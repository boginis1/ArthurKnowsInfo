import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import AuthService from '../../utils/AuthService';

class SecretRoute extends React.Component {

  render() {
    const { component: Component } = this.props;
    return (
      <Route
        render={(props) => (
          (AuthService.getAuthorization() === true)
            ? <Component {...props} />
            : <Redirect to="/" />
        )}
      />
    );
  }
}

export default SecretRoute;
