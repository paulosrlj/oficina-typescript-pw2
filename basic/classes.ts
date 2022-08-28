class User {

  constructor(private email: string, private password: string) {}

}

class User2 {
  private _email: string;
  private _password?: string = '';

  constructor(email: string, password?: string) {
    this._email = email;
    this._password = password;
  }

  get email() {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string | undefined {
    return this._password;
  }

  set password(value: string | undefined) {
    this._password = value;
  }
}

class Aluno extends User {
  
}

const user = new User2('Paulo');
console.log(user.email)
console.log(user.password)