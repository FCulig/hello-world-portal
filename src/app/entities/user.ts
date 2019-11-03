export class User {
  username: string;
  email: string;

  constructor(_username: string, _email: string) {
    this.email = _email;
    this.username = _username;
  }
}
