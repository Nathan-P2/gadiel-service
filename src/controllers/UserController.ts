import User from '@models/User';

export default class UserController {
  static getUser() {
    const user = new User();

    return user;
  }
}
