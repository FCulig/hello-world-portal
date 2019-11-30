export class User {
  _id: string;
  username: string;
  email: string;
  role: string;

  constructor(_username: string, _email: string, id:string) {
    this.email = _email;
    this.username = _username;
    this._id = id;
  }
}
