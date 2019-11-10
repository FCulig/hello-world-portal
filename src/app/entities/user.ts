export class User {
  username: string;
  email: string;
  role: string;

  constructor(_username: string, _email: string) {
    this.email = _email;
    this.username = _username;
  }
}
