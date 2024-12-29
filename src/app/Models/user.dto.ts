export class User {
  id: string;
  email: string;
  username: string;

  constructor(id: string, username: string, email: string) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
}
