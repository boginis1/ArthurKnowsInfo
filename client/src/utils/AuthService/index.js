

let auth = false

class AuthService {
  authorize = () => {
    auth = true;
  }

  getAuthorization = () => {
    return auth;
  }

  logout = () => {
    auth = false;
  }

}

export default new AuthService();