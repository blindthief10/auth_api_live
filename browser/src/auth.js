class Auth {
  constructor() {
    this.isAuth = false;
  }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  isAuthenticated() {
    return this.isAuth;
  }
}

export default new Auth();
